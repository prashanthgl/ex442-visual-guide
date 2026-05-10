import { Gauge, BookOpen } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

export default function AppPerformance() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <Gauge size={20} className="text-amber-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Application Performance</h1>
            <p className="text-slate-400 text-sm">ps · Valgrind · SystemTap · eBPF · bpftrace</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          System tools show aggregate metrics; these tools let you <em>interrogate individual processes</em> with
          surgical precision. eBPF in particular has revolutionized Linux observability — it lets you run safe
          custom programs inside the kernel without loading kernel modules.
        </p>
      </div>

      {/* ps */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">ps — Process Status Deep Dive</h2>
        <p className="text-sm text-slate-400 mb-3">
          <code className="text-cyan-400">ps</code> reads from the <code className="text-cyan-400">/proc/[PID]/</code>
          directory structure. Every process has its own directory containing dozens of pseudo-files:
          <code className="text-cyan-400 ml-1">stat</code>, <code className="text-cyan-400">status</code>,
          <code className="text-cyan-400 ml-1">maps</code>, <code className="text-cyan-400">fd/</code>,
          <code className="text-cyan-400 ml-1">io</code>, and more.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {[
            { file: '/proc/[PID]/stat', desc: 'One-line process state: PID, name, state (S/R/D/Z), PPID, CPU times, priority, nice, num_threads, virtual memory size, RSS' },
            { file: '/proc/[PID]/status', desc: 'Human-readable: VmRSS, VmSwap, Threads, voluntary/involuntary context switches, CapPrm' },
            { file: '/proc/[PID]/maps', desc: 'Virtual memory map: all mmap regions, file-backed, anonymous, shared libraries' },
            { file: '/proc/[PID]/io', desc: 'I/O counters: rchar, wchar, syscr, syscw, read_bytes, write_bytes, cancelled_write_bytes' },
            { file: '/proc/[PID]/fd/', desc: 'Symlinks to all open file descriptors — detect file descriptor leaks' },
            { file: '/proc/[PID]/smaps', desc: 'Detailed memory map with PSS (Proportional Set Size) — true memory cost per process' },
          ].map(({ file, desc }) => (
            <div key={file} className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <code className="text-amber-400 text-xs font-mono">{file}</code>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <CodeBlock language="bash" code={`# BSD style — all processes
ps aux

# System V style — all processes with full info
ps -ef

# Forest view — show parent/child relationships
ps -ef --forest

# Custom columns — the real power of ps
ps -eo pid,ppid,stat,pri,ni,pcpu,pmem,rss,vsz,comm

# Monitor thread count per process
ps -eo pid,nlwp,comm | sort -k2 -rn | head

# Find top memory users (RSS in kB)
ps -eo pid,comm,rss --sort=-rss | head -15

# Processes in D state (uninterruptible sleep = waiting for I/O)
ps -eo pid,stat,comm | awk '$2 ~ /^D/ {print}'

# Process I/O stats (needs /proc/[PID]/io)
ps -eo pid,comm -o "rchar,wchar,read_bytes,write_bytes" 2>/dev/null | head`} />

        <div className="overflow-x-auto mt-3">
          <table className="metric-table">
            <thead><tr><th>State</th><th>Name</th><th>Meaning</th><th>Concern</th></tr></thead>
            <tbody>
              {[
                { state: 'R', name: 'Running', meaning: 'On CPU or in run queue', concern: 'Normal for active processes' },
                { state: 'S', name: 'Sleeping', meaning: 'Interruptible sleep (waiting for event)', concern: 'Normal — waiting on I/O, socket, sleep()' },
                { state: 'D', name: 'Disk sleep', meaning: 'Uninterruptible sleep — cannot be killed', concern: 'Waiting for kernel I/O — D state flood = storage problem' },
                { state: 'Z', name: 'Zombie', meaning: 'Terminated, parent hasn\'t called wait()', concern: 'Parent has a bug; zombies waste no resources but count against PID limit' },
                { state: 'T', name: 'Stopped', meaning: 'Stopped via SIGSTOP or traced (ptrace)', concern: 'Check if debugging session or job control' },
                { state: 'I', name: 'Idle', meaning: 'Idle kernel thread (Linux 4.14+)', concern: 'Not a zombie — kernel threads that are deliberately idle' },
              ].map(({ state, name, meaning, concern }) => (
                <tr key={state}>
                  <td><span className="font-mono text-amber-400 font-bold">{state}</span></td>
                  <td className="text-white text-sm">{name}</td>
                  <td className="text-slate-300 text-sm">{meaning}</td>
                  <td className="text-slate-400 text-xs italic">{concern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Valgrind */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Valgrind — Dynamic Analysis Suite</h2>
        <p className="text-sm text-slate-400 mb-3">
          Valgrind works by running your program on a synthetic CPU (called the Valgrind core / VEX IR). Every instruction
          is translated and instrumented. This means <strong className="text-slate-200">no recompilation needed</strong>,
          but programs run 20-100x slower. Each "tool" within Valgrind is a plugin that instruments differently.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            {
              tool: 'memcheck',
              flag: '--tool=memcheck (default)',
              desc: 'Detects memory errors: use-after-free, buffer overflow, uninitialized reads, memory leaks',
              color: 'text-rose-400',
            },
            {
              tool: 'callgrind',
              flag: '--tool=callgrind',
              desc: 'Call graph profiler: counts instructions, cache hits/misses per function. Visualize with KCachegrind',
              color: 'text-cyan-400',
            },
            {
              tool: 'cachegrind',
              flag: '--tool=cachegrind',
              desc: 'Cache profiler: simulates L1/L2/L3 cache. Shows miss rates per source line',
              color: 'text-violet-400',
            },
            {
              tool: 'massif',
              flag: '--tool=massif',
              desc: 'Heap profiler: tracks heap allocations over time. Produces snapshots for ms_print',
              color: 'text-emerald-400',
            },
            {
              tool: 'helgrind',
              flag: '--tool=helgrind',
              desc: 'Thread error detector: data races, lock order violations, POSIX pthreads misuse',
              color: 'text-amber-400',
            },
            {
              tool: 'drd',
              flag: '--tool=drd',
              desc: 'Data Race Detector: alternative to helgrind, lower memory use, finds more race types',
              color: 'text-sky-400',
            },
          ].map(({ tool, flag, desc, color }) => (
            <div key={tool} className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <div className={`font-mono font-semibold text-sm ${color}`}>{tool}</div>
              <div className="text-xs text-slate-500 font-mono mb-1">{flag}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>

        <CodeBlock language="bash" code={`# Memory leak detection
valgrind --leak-check=full --show-leak-kinds=all --track-origins=yes ./myapp

# CPU profiling with callgrind
valgrind --tool=callgrind ./myapp
callgrind_annotate callgrind.out.<PID>   # text report
kcachegrind callgrind.out.<PID>          # GUI (requires X)

# Cache analysis
valgrind --tool=cachegrind ./myapp
cg_annotate cachegrind.out.<PID>

# Heap memory growth over time
valgrind --tool=massif --pages-as-heap=yes ./myapp
ms_print massif.out.<PID>

# Thread races (run multiple iterations for best coverage)
valgrind --tool=helgrind --history-level=full ./myapp_threaded`} />
      </div>

      {/* SystemTap */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">SystemTap — Kernel Scripting</h2>
        <p className="text-sm text-slate-400 mb-3">
          SystemTap compiles scripts into kernel modules that hook into kernel probes (kprobes, uprobes, tracepoints).
          It's more powerful than eBPF for complex logic, but requires kernel debug symbols and root access.
          Requires <code className="text-cyan-400">kernel-devel</code> and <code className="text-cyan-400">kernel-debuginfo</code>.
        </p>

        <CodeBlock language="bash" code={`# Install SystemTap
dnf install systemtap systemtap-runtime kernel-devel-$(uname -r)

# For full function names, install debuginfo (large download)
dnf debuginfo-install kernel-$(uname -r)

# Run a simple script — count syscalls per second
stap -ve '
global count
probe syscall.* { count[execname()]++ }
probe timer.s(1) {
    foreach (name in count-)
        printf("%-20s %d\n", name, count[name])
    delete count
}
'

# Trace all writes to a specific file
stap -ve '
probe kernel.function("vfs_write") {
    if (filename = @cast($file, "file")->f_path->dentry->d_name->name)
        printf("PID %d wrote to %s\n", pid(), kernel_string(filename))
}
'`} />

        <Callout type="info" title="SystemTap vs eBPF">
          SystemTap requires kernel debug symbols and compilation at probe time (~10s startup). eBPF/bpftrace
          uses pre-compiled programs verified by the kernel and starts instantly. For production use, prefer
          eBPF tools. SystemTap shines for complex multi-event correlation scripts.
        </Callout>
      </div>

      {/* eBPF */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">eBPF — Extended Berkeley Packet Filter</h2>
        <p className="text-sm text-slate-400 mb-3">
          eBPF is a revolutionary Linux kernel technology that lets you run <strong className="text-slate-200">sandboxed programs</strong>
          in the kernel without loading kernel modules. The kernel verifier checks the program for safety
          (no infinite loops, bounded memory access) before loading. Programs are JIT-compiled to native code
          and can access kernel data structures and maps shared with userspace.
        </p>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4">
          <div className="text-xs font-semibold text-slate-400 uppercase mb-3">eBPF Architecture</div>
          <div className="grid sm:grid-cols-3 gap-2 text-xs">
            {[
              { title: 'Probe Types', items: ['kprobes (kernel functions)', 'uprobes (user functions)', 'tracepoints (kernel events)', 'USDT (user static probes)', 'network XDP/TC hooks', 'perf events'] },
              { title: 'eBPF Maps', items: ['Hash maps', 'Array maps', 'Ring buffers', 'Perf event arrays', 'Shared between kernel/user', 'Persists across probe calls'] },
              { title: 'Key Tools', items: ['bpftrace (scripting)', 'BCC toolkit (Python)', 'libbpf (C library)', 'bpftool (introspect)', 'perf (uses eBPF internally)'] },
            ].map(({ title, items }) => (
              <div key={title}>
                <div className="text-cyan-400 font-medium mb-2">{title}</div>
                {items.map(item => (
                  <div key={item} className="text-slate-400 py-0.5">• {item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <CodeBlock language="bash" code={`# Install BCC tools (includes syscount, gethostlatency, etc.)
dnf install bcc-tools bpftrace -y

# All tools are in /usr/share/bcc/tools/
ls /usr/share/bcc/tools/

# SYSCOUNT — count system calls system-wide
/usr/share/bcc/tools/syscount

# Count syscalls for a specific process
/usr/share/bcc/tools/syscount -p $(pgrep myapp)

# GETHOSTLATENCY — DNS lookup latency
/usr/share/bcc/tools/gethostlatency

# OPENSNOOP — trace file opens in real-time
/usr/share/bcc/tools/opensnoop

# EXECSNOOP — trace new process executions
/usr/share/bcc/tools/execsnoop

# BIOLATENCY — I/O request latency distribution (histogram)
/usr/share/bcc/tools/biolatency

# TCPRETRANS — trace TCP retransmits
/usr/share/bcc/tools/tcpretrans

# TCPCONNECT — trace outbound TCP connections
/usr/share/bcc/tools/tcpconnect`} />

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white mb-2">bpftrace — eBPF Scripting Language</h3>
          <p className="text-sm text-slate-400 mb-3">
            <code className="text-cyan-400">bpftrace</code> provides a high-level scripting language for eBPF programs
            inspired by awk and DTrace. One-liners are extremely powerful.
          </p>

          <TerminalWindow title="bpftrace One-liners">
{`# Count syscalls by process name (Ctrl+C to print)
bpftrace -e 'tracepoint:raw_syscalls:sys_enter { @[comm] = count(); }'

# Trace write() calls > 4096 bytes
bpftrace -e 'tracepoint:syscalls:sys_enter_write /args->count > 4096/ {
    printf("PID %d (%s) write %d bytes\n", pid, comm, args->count);
}'

# Histogram of read() return sizes (actual bytes read)
bpftrace -e 'tracepoint:syscalls:sys_exit_read /retval > 0/ {
    @bytes = hist(retval);
}'

# CPU profile — what's running every 99 Hz (flamegraph input)
bpftrace -e 'profile:hz:99 { @[kstack] = count(); }' > /tmp/cpu_profile.txt

# Trace all opens of a specific file
bpftrace -e 'tracepoint:syscalls:sys_enter_openat {
    if (str(args->filename) == "/etc/passwd") {
        printf("%s (PID %d) opened /etc/passwd\n", comm, pid);
    }
}'`}
          </TerminalWindow>

          <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 mt-3">
            <div className="text-xs font-semibold text-slate-400 uppercase mb-2">bpftrace Probe Types</div>
            <div className="grid sm:grid-cols-3 gap-2 text-xs">
              {[
                { probe: 'kprobe:func', desc: 'Hook function entry', ex: 'kprobe:do_sys_openat2' },
                { probe: 'kretprobe:func', desc: 'Hook function return + retval', ex: 'kretprobe:vfs_read' },
                { probe: 'tracepoint:cat:event', desc: 'Stable kernel tracepoints', ex: 'tracepoint:block:block_rq_issue' },
                { probe: 'uprobe:path:func', desc: 'User-space function probe', ex: 'uprobe:/lib/libc.so.6:malloc' },
                { probe: 'profile:hz:N', desc: 'Sample at N Hz (CPU profiling)', ex: 'profile:hz:99' },
                { probe: 'interval:s:N', desc: 'Run every N seconds', ex: 'interval:s:1' },
              ].map(({ probe, desc, ex }) => (
                <div key={probe} className="bg-slate-800 rounded p-2">
                  <div className="text-cyan-400 font-mono">{probe}</div>
                  <div className="text-slate-400 mt-0.5">{desc}</div>
                  <div className="text-slate-500 mt-0.5 italic text-xs">e.g. {ex}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Choosing application versions */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Choosing the Best Application Version</h2>
        <p className="text-sm text-slate-400 mb-3">
          The exam objective says: "Given multiple versions of applications, choose which to run based on observed
          performance characteristics." This means benchmarking systematically.
        </p>
        <CodeBlock language="bash" code={`# Method 1: Repeat benchmark with time
for i in 1 2 3 4 5; do
    /usr/bin/time -v ./app-v1 < input.txt 2>&1 | grep "Maximum resident"
done

# Method 2: perf stat comparison
perf stat -r 5 ./app-v1 < input.txt 2>&1
perf stat -r 5 ./app-v2 < input.txt 2>&1

# Method 3: strace to compare syscall patterns
strace -c ./app-v1 < input.txt 2>&1
strace -c ./app-v2 < input.txt 2>&1

# Metrics to compare:
# - Wall clock time (total elapsed)
# - CPU time (user + sys)
# - Maximum RSS (peak memory)
# - I/O bytes read/written
# - Syscall counts (lower = better for CPU bound)`} />
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">Exam Key Takeaways</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li>• Processes in <code className="text-cyan-400">D state</code> (uninterruptible sleep) indicate I/O wait — storage issue, not process issue.</li>
          <li>• Valgrind <code className="text-cyan-400">memcheck</code> catches memory leaks; <code className="text-cyan-400">callgrind</code> profiles CPU usage per function.</li>
          <li>• SystemTap requires <code className="text-cyan-400">kernel-devel</code> + <code className="text-cyan-400">kernel-debuginfo</code> packages.</li>
          <li>• Install eBPF tools: <code className="text-cyan-400">dnf install bcc-tools bpftrace</code>. Tools live in <code className="text-cyan-400">/usr/share/bcc/tools/</code>.</li>
          <li>• <code className="text-cyan-400">syscount</code> counts syscalls, <code className="text-cyan-400">gethostlatency</code> measures DNS, <code className="text-cyan-400">biolatency</code> shows I/O latency distribution.</li>
          <li>• bpftrace uses probes: <code className="text-cyan-400">kprobe</code>, <code className="text-cyan-400">tracepoint</code>, <code className="text-cyan-400">uprobe</code>, <code className="text-cyan-400">profile</code>.</li>
        </ul>
      </div>
    </div>
  )
}
