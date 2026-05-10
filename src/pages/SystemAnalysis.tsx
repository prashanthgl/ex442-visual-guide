import { Activity, ChevronDown, ChevronRight, BookOpen } from 'lucide-react'
import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

function Section({ title, children, defaultOpen = false }: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-4 bg-slate-900 hover:bg-slate-800/80 transition-colors text-left"
      >
        {open ? <ChevronDown size={16} className="text-cyan-400 flex-shrink-0" /> : <ChevronRight size={16} className="text-slate-500 flex-shrink-0" />}
        <span className="font-semibold text-white">{title}</span>
      </button>
      {open && <div className="px-5 py-5 bg-slate-950 space-y-4">{children}</div>}
    </div>
  )
}

function MetricRow({ name, desc, note }: { name: string; desc: string; note?: string }) {
  return (
    <tr>
      <td className="py-2 pr-4 font-mono text-cyan-400 text-sm whitespace-nowrap align-top border-b border-slate-800/60">{name}</td>
      <td className="py-2 pr-4 text-slate-300 text-sm align-top border-b border-slate-800/60">{desc}</td>
      {note && <td className="py-2 text-slate-500 text-xs align-top border-b border-slate-800/60 italic">{note}</td>}
    </tr>
  )
}

export default function SystemAnalysis() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
            <Activity size={20} className="text-cyan-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">System Analysis Tools</h1>
            <p className="text-slate-400 text-sm">vmstat · iostat · mpstat · sar · top · powertop · perf</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Before you can tune a system, you must <em className="text-slate-200">measure</em> it. These tools all read from
          the kernel's virtual filesystems (<code className="text-cyan-400 bg-slate-900 px-1 rounded">/proc</code> and{' '}
          <code className="text-cyan-400 bg-slate-900 px-1 rounded">/sys</code>), which expose live kernel data structures
          as pseudo-files. Understanding where data comes from makes you a better diagnostician.
        </p>
      </div>

      {/* /proc internals */}
      <Section title="/proc — The Kernel's Window to Userspace" defaultOpen>
        <p className="text-slate-300 text-sm leading-relaxed">
          <code className="text-cyan-400">/proc</code> is a <strong className="text-white">virtual filesystem</strong> (procfs) — no disk I/O occurs
          when reading it. The kernel populates each file on-demand by executing special read handlers registered during
          boot. This means reading <code className="text-cyan-400">/proc/meminfo</code> triggers kernel functions that
          interrogate the memory allocator in real time.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { file: '/proc/meminfo', desc: 'Memory statistics: MemTotal, MemFree, Cached, Buffers, SwapUsed…' },
            { file: '/proc/vmstat', desc: 'VM events: pgpgin, pgpgout, pswpin, pswpout, nr_dirty…' },
            { file: '/proc/diskstats', desc: 'Per-disk I/O stats: reads, writes, sectors, time in queue' },
            { file: '/proc/net/dev', desc: 'Per-interface network statistics: bytes, packets, errors, drops' },
            { file: '/proc/cpuinfo', desc: 'CPU model, flags, cache sizes, NUMA topology' },
            { file: '/proc/interrupts', desc: 'IRQ counts per CPU — spot interrupt imbalance' },
            { file: '/proc/softirqs', desc: 'Soft interrupt counts — NET_RX, NET_TX, TIMER…' },
            { file: '/proc/[PID]/status', desc: 'Per-process: VmRSS, VmSwap, Threads, voluntary_ctxt_switches' },
          ].map(({ file, desc }) => (
            <div key={file} className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <code className="text-cyan-400 text-xs font-mono">{file}</code>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <CodeBlock language="bash" filename="Explore /proc in real time" code={`# Watch memory counters update every second
watch -n1 cat /proc/meminfo

# See raw VM events (counters since boot)
cat /proc/vmstat | grep -E 'pgpg|pswp|nr_dirty'

# Per-process memory breakdown
cat /proc/$$/status | grep -E 'Vm|ctxt'

# CPU frequency and NUMA info
cat /proc/cpuinfo | grep -E 'MHz|NUMA|cache'`} />
      </Section>

      {/* vmstat */}
      <Section title="vmstat — Virtual Memory Statistics" defaultOpen>
        <p className="text-slate-300 text-sm leading-relaxed">
          <code className="text-cyan-400">vmstat</code> reads from <code className="text-cyan-400">/proc/vmstat</code> and
          <code className="text-cyan-400 ml-1">/proc/meminfo</code>. Each line in interval mode shows the <em>delta</em> since
          the last sample (except the first line which shows totals since boot — ignore it).
        </p>

        <TerminalWindow title="vmstat 2 5 — Sample Output">
{`procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 2  0      0 1234567  45678 987654    0    0    12    34  456  789  5  2 92  1  0
 1  0      0 1233456  45679 987891    0    0     0    48  512  823  8  3 89  0  0
 0  0      0 1234123  45680 987923    0    0     0     8  389  701  2  1 97  0  0
 0  0      0 1234200  45680 987943    0    0     0     0  342  654  1  1 98  0  0`}
        </TerminalWindow>

        <div className="overflow-x-auto">
          <table className="metric-table">
            <thead>
              <tr>
                <th>Column</th>
                <th>Meaning</th>
                <th>Concern</th>
              </tr>
            </thead>
            <tbody>
              <MetricRow name="r" desc="Run queue — processes waiting for CPU" note="r > nCPUs sustained = CPU bottleneck" />
              <MetricRow name="b" desc="Blocked — processes waiting for I/O or resources" note="> 0 intermittently = normal; sustained = problem" />
              <MetricRow name="swpd" desc="Virtual memory used (kB) — currently swapped out pages" note="Any value here means swapping has occurred" />
              <MetricRow name="free" desc="Idle memory (kB) — not including reclaimable cache" note="Low is OK if buff+cache is high" />
              <MetricRow name="buff" desc="Buffer cache — kernel block device buffers" note="Metadata/superblocks for filesystems" />
              <MetricRow name="cache" desc="Page cache — file data cached in RAM" note="High = good, OS using RAM effectively" />
              <MetricRow name="si" desc="Swap in (kB/s) — pages read from swap disk" note="Non-zero = active swapping = RAM pressure" />
              <MetricRow name="so" desc="Swap out (kB/s) — pages written to swap disk" note="Non-zero = system is swapping out pages" />
              <MetricRow name="bi" desc="Block in (blocks/s) — reads from block devices" note="Includes page cache misses (file reads)" />
              <MetricRow name="bo" desc="Block out (blocks/s) — writes to block devices" note="Includes dirty page writeback" />
              <MetricRow name="in" desc="Interrupts per second" note="High = busy I/O or network" />
              <MetricRow name="cs" desc="Context switches per second" note="High = many threads competing or I/O waits" />
              <MetricRow name="us" desc="User CPU time %" note="Application CPU usage" />
              <MetricRow name="sy" desc="System (kernel) CPU time %" note="High = excessive syscalls, lock contention" />
              <MetricRow name="wa" desc="I/O wait CPU time %" note="CPU idle waiting for I/O — I/O bottleneck signal" />
              <MetricRow name="st" desc="Steal time %" note="VM hypervisor taking CPU cycles — only in VMs" />
            </tbody>
          </table>
        </div>

        <CodeBlock language="bash" code={`# Run every 2 seconds, 10 samples
vmstat 2 10

# Show active/inactive memory detail
vmstat -a 2 5

# Show disk statistics (like iostat)
vmstat -d 2

# Show slab info — kernel memory allocator
vmstat -m

# Show event counters (cumulative)
vmstat -s`} />

        <Callout type="tip" title="Reading vmstat Like a Pro">
          The key diagnostic pattern: <strong>si/so &gt; 0</strong> means the system is actively swapping — RAM is exhausted.
          <strong> wa &gt; 20%</strong> means CPUs are stalled waiting for I/O. <strong>r &gt; number of CPUs</strong> means a CPU bottleneck.
        </Callout>
      </Section>

      {/* iostat */}
      <Section title="iostat — I/O Statistics">
        <p className="text-slate-300 text-sm leading-relaxed">
          <code className="text-cyan-400">iostat</code> (part of <code className="text-slate-300">sysstat</code>) reads
          from <code className="text-cyan-400">/proc/diskstats</code>. The kernel updates these counters in the block layer
          — every time a request completes, its latency is added to the running totals. <code>iostat -x</code> calculates
          derived metrics from these deltas.
        </p>

        <TerminalWindow title="iostat -xz 2 3">
{`Linux 5.14.0-427.el9.x86_64   05/10/2026   _x86_64_   (4 CPU)

Device     r/s     rkB/s   rrqm/s  %rrqm r_await rareq-sz    w/s    wkB/s   wrqm/s  %wrqm w_await wareq-sz  aqu-sz  %util
sda       12.50   456.00     0.50   3.85    2.34    36.48   8.20   128.00     1.20  12.77    4.21    15.61    0.08   2.13
nvme0n1  234.00  8976.00     0.00   0.00    0.18    38.36  89.00  2048.00     0.00   0.00    0.22    23.01    0.07   4.21`}
        </TerminalWindow>

        <div className="overflow-x-auto">
          <table className="metric-table">
            <thead><tr><th>Column</th><th>Meaning</th><th>Threshold</th></tr></thead>
            <tbody>
              <MetricRow name="r/s, w/s" desc="Read/write requests per second (IOPS)" note="Depends on device type" />
              <MetricRow name="rkB/s, wkB/s" desc="Read/write throughput in kB/s" note="Compare to device spec" />
              <MetricRow name="rrqm/s, wrqm/s" desc="Read/write requests merged per second" note="High merges = sequential workload" />
              <MetricRow name="r_await, w_await" desc="Average request service time (ms) including queue wait" note="HDD: <20ms, SSD: <1ms, NVMe: <0.1ms" />
              <MetricRow name="aqu-sz" desc="Average queue depth — requests waiting + being served" note="> 1 = device has a queue backlog" />
              <MetricRow name="%util" desc="% of time device was busy (saturated)" note="> 80% = potential bottleneck; 100% = saturated" />
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="%util is Misleading for SSDs">
          On NVMe SSDs with internal parallelism, <code>%util</code> can hit 100% even with plenty of headroom because
          the device can handle thousands of parallel requests. Use <code>aqu-sz</code> (queue depth) as a better saturation indicator.
          High <code>r_await</code> with high <code>aqu-sz</code> is the true sign of I/O saturation.
        </Callout>

        <CodeBlock language="bash" code={`# Extended stats, skip zero-activity devices, 2 sec interval
iostat -xz 2

# Show only specific device
iostat -x nvme0n1 2 5

# JSON output for scripting
iostat -o JSON -x 1 3

# Show CPU stats too
iostat -c -x 2`} />
      </Section>

      {/* mpstat */}
      <Section title="mpstat — Multiprocessor Statistics">
        <p className="text-slate-300 text-sm leading-relaxed">
          <code className="text-cyan-400">mpstat</code> reads from <code className="text-cyan-400">/proc/stat</code>.
          The kernel maintains per-CPU jiffy counters for each CPU state. mpstat calculates percentages from these counters.
          The key insight: <code className="text-cyan-400">%iowait</code> is a CPU metric — it counts CPU cycles where
          the CPU was idle <em>and</em> at least one I/O was outstanding. It does <strong>not</strong> mean "I/O is slow."
        </p>

        <TerminalWindow title="mpstat -P ALL 2 3">
{`Linux 5.14.0-427.el9.x86_64   05/10/2026   _x86_64_   (4 CPU)

08:15:23     CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
08:15:25     all    8.25    0.00    2.31    1.25    0.25    0.37    0.00    0.00    0.00   87.57
08:15:25       0   12.50    0.00    3.50    0.50    0.50    1.00    0.00    0.00    0.00   82.00
08:15:25       1    6.00    0.00    1.50    2.00    0.00    0.00    0.00    0.00    0.00   90.50
08:15:25       2    8.00    0.00    2.00    1.00    0.00    0.00    0.00    0.00    0.00   89.00
08:15:25       3    6.50    0.00    2.25    1.50    0.50    0.50    0.00    0.00    0.00   88.75`}
        </TerminalWindow>

        <div className="overflow-x-auto">
          <table className="metric-table">
            <thead><tr><th>Column</th><th>Meaning</th><th>Linux Internals</th></tr></thead>
            <tbody>
              <MetricRow name="%usr" desc="User space CPU time (non-nice)" note="Comes from /proc/stat user counter" />
              <MetricRow name="%nice" desc="CPU time for nicely-adjusted user processes" note="Processes with nice > 0" />
              <MetricRow name="%sys" desc="Kernel CPU time (system calls, kernel threads)" note="High = lock contention, syscall overhead" />
              <MetricRow name="%iowait" desc="CPU was idle AND at least one I/O pending on CPU" note="Per-CPU metric, not a global I/O metric" />
              <MetricRow name="%irq" desc="Hardware interrupt handling time" note="High = hardware interrupts not load-balanced" />
              <MetricRow name="%soft" desc="Software interrupt (softirq) handling time" note="NET_RX dominating = network rx bottleneck" />
              <MetricRow name="%steal" desc="Hypervisor 'stealing' CPU cycles from this VM" note="Only relevant in virtual machines" />
              <MetricRow name="%idle" desc="CPU truly idle (no runnable tasks, no I/O waits)" note="Target: as much as your workload allows" />
            </tbody>
          </table>
        </div>

        <CodeBlock language="bash" code={`# Per-CPU stats every 2 seconds
mpstat -P ALL 2 5

# Show interrupt stats per CPU
mpstat -I ALL 2 3

# Only CPU 0 and CPU 2
mpstat -P 0,2 2 5`} />

        <Callout type="info" title="Uneven CPU Load">
          If one CPU is at 100% while others are idle, you have an <strong>IRQ affinity</strong> problem or a single-threaded
          bottleneck. Use <code>cat /proc/interrupts</code> to see interrupt distribution. Fix with
          <code> irqbalance</code> or manual <code>/proc/irq/N/smp_affinity</code> tuning.
        </Callout>
      </Section>

      {/* sar */}
      <Section title="sar — System Activity Reporter">
        <p className="text-slate-300 text-sm leading-relaxed">
          <code className="text-cyan-400">sar</code> is the <em>historical</em> view — unlike vmstat and iostat which only
          show current activity, sar records data to <code className="text-cyan-400">/var/log/sa/saXX</code> (where XX is the
          day of month) via the <code className="text-cyan-400">sadc</code> data collector cron job. This lets you investigate
          what happened yesterday at 3am without needing to be awake.
        </p>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 text-sm">
          <div className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">sar Data Flow</div>
          <div className="flex items-center gap-2 flex-wrap">
            {['Kernel /proc', '→', 'sadc (collector)', '→', '/var/log/sa/saDD', '→', 'sar (reader)', '→', 'Human output'].map((item, i) => (
              <span key={i} className={item === '→' ? 'text-slate-600' :
                'bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs font-mono ' +
                (item.startsWith('/') ? 'text-cyan-400' : item.includes('sadc') ? 'text-violet-400' : 'text-slate-300')}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <CodeBlock language="bash" code={`# Install sysstat (enables sadc collection)
dnf install sysstat -y
systemctl enable --now sysstat

# Current CPU activity (like top, but periodic)
sar -u 2 5

# Memory stats
sar -r 2 5

# I/O stats (like iostat)
sar -b 2 5

# Network stats for interface eth0
sar -n DEV 2 5 | grep eth0

# Load average and run queue
sar -q 2 5

# Swap usage
sar -S 2 5

# View yesterday's data (from /var/log/sa)
sar -u -f /var/log/sa/sa09

# View from specific time to time
sar -u -s 09:00:00 -e 10:00:00 -f /var/log/sa/sa09`} />

        <Callout type="exam" title="sar for Exam">
          The exam may ask you to set up monitoring or analyze historical performance. Know how to enable sysstat,
          where data is stored (<code>/var/log/sa/</code>), and the key flags: <code>-u</code> (CPU), <code>-r</code> (mem),
          <code>-b</code> (I/O), <code>-n DEV</code> (network), <code>-q</code> (load).
        </Callout>
      </Section>

      {/* top */}
      <Section title="top — Interactive Process Monitor">
        <p className="text-slate-300 text-sm leading-relaxed">
          <code className="text-cyan-400">top</code> reads from <code>/proc/[PID]/stat</code> for each process and
          <code className="text-cyan-400 ml-1">/proc/meminfo</code> for system memory. It polls at the configured
          delay (default 3s). Understanding the header is crucial for rapid diagnosis.
        </p>

        <TerminalWindow title="top — Annotated Header">
{`top - 08:23:11 up 5 days, 14:22,  2 users,  load average: 0.52, 0.68, 0.71
Tasks: 284 total,   1 running, 283 sleeping,   0 stopped,   0 zombie
%Cpu(s):  5.2 us,  1.3 sy,  0.0 ni, 92.8 id,  0.4 wa,  0.1 hi,  0.2 si,  0.0 st
MiB Mem :  15892.4 total,   2341.2 free,   8921.4 used,   4629.8 buff/cache
MiB Swap:   4096.0 total,   4096.0 free,      0.0 used.   6548.3 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   1234 root      20   0  567123  45678  23456 R  45.2   0.3   5:23.45 myapp
   5678 mysql     20   0 2345678 456789  12345 S  12.3   2.8  45:12.33 mysqld`}
        </TerminalWindow>

        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase mb-2">Header Fields</div>
            <div className="space-y-1 text-xs">
              <div><span className="text-cyan-400 font-mono">load average:</span><span className="text-slate-300 ml-2">Avg runnable+uninterruptible tasks over 1/5/15 min. &gt;nCPU = overloaded</span></div>
              <div><span className="text-cyan-400 font-mono">wa (I/O wait):</span><span className="text-slate-300 ml-2">CPUs idle waiting for I/O. Root cause is I/O, not CPU</span></div>
              <div><span className="text-cyan-400 font-mono">buff/cache:</span><span className="text-slate-300 ml-2">Reclaimable memory. OS will give it up under memory pressure</span></div>
              <div><span className="text-cyan-400 font-mono">avail Mem:</span><span className="text-slate-300 ml-2">Estimated available without swap: free + reclaimable cache</span></div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase mb-2">Process Fields</div>
            <div className="space-y-1 text-xs">
              <div><span className="text-cyan-400 font-mono">PR/NI:</span><span className="text-slate-300 ml-2">Priority / Nice value. PR=20+NI for normal processes</span></div>
              <div><span className="text-cyan-400 font-mono">VIRT:</span><span className="text-slate-300 ml-2">Virtual address space size (doesn't mean that much RAM is used)</span></div>
              <div><span className="text-cyan-400 font-mono">RES:</span><span className="text-slate-300 ml-2">Resident Set Size — actual physical RAM in use (the real cost)</span></div>
              <div><span className="text-cyan-400 font-mono">SHR:</span><span className="text-slate-300 ml-2">Shared memory (mmap'd libs, shared segments). Part of RES</span></div>
              <div><span className="text-cyan-400 font-mono">S:</span><span className="text-slate-300 ml-2">State: R=Running, S=Sleeping, D=Uninterruptible, Z=Zombie</span></div>
            </div>
          </div>
        </div>

        <CodeBlock language="bash" code={`# Interactive top shortcuts:
# 1     — toggle per-CPU vs aggregate view
# H     — toggle per-thread view (shows individual threads)
# V     — forest view (parent/child process tree)
# M     — sort by memory (RES)
# P     — sort by CPU
# z     — color mode
# i     — hide idle processes
# u     — filter by user

# Non-interactive: run 3 iterations, batch mode
top -b -n 3 | head -50

# Sort by memory, batch
top -b -n 1 -o %MEM | head -20`} />
      </Section>

      {/* powertop */}
      <Section title="powertop — Power Consumption Analysis">
        <p className="text-slate-300 text-sm leading-relaxed">
          <code className="text-cyan-400">powertop</code> uses perf events and kernel tracepoints to measure power
          consumption and identify what's preventing the CPU from entering deep idle states. It's critical for
          laptop/edge workloads and also reveals unexpected wakeup sources.
        </p>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
          <div className="text-xs text-slate-400 mb-3 font-semibold uppercase">CPU Power States</div>
          <div className="flex gap-4 flex-wrap text-xs">
            <div className="space-y-1">
              <div className="text-violet-400 font-semibold">P-states (Performance)</div>
              <div className="text-slate-400">Processor frequency/voltage pairs</div>
              <div className="text-slate-400">P0 = highest, Pn = lowest freq</div>
              <div className="text-slate-400">Controlled by cpufreq governor</div>
            </div>
            <div className="space-y-1">
              <div className="text-cyan-400 font-semibold">C-states (Idle)</div>
              <div className="text-slate-400">C0 = active, C1 = halt, C3 = sleep</div>
              <div className="text-slate-400">Deeper = less power, longer wake latency</div>
              <div className="text-slate-400">C6/C7 = core fully powered down</div>
            </div>
          </div>
        </div>

        <CodeBlock language="bash" code={`# Interactive mode (requires root)
powertop

# Generate HTML report
powertop --html=/tmp/power-report.html

# Auto-apply all recommended tunables
powertop --auto-tune

# Calibrate first for better accuracy
powertop --calibrate`} />

        <Callout type="info" title="--auto-tune vs Permanent Changes">
          <code>powertop --auto-tune</code> applies optimizations at runtime but they don't persist.
          To persist powertop settings, create a systemd service that runs <code>powertop --auto-tune</code> at boot,
          or use <code>tuned</code> with the <code>powersave</code> profile.
        </Callout>
      </Section>

      {/* perf */}
      <Section title="perf — Hardware Performance Counters">
        <p className="text-slate-300 text-sm leading-relaxed">
          <code className="text-cyan-400">perf</code> interfaces with the kernel's <strong>Performance Monitoring Units (PMU)</strong>
          — hardware registers inside the CPU that count low-level events like cache misses, branch mispredictions,
          and instruction completions. This gives you insight impossible to get from /proc alone.
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              title: 'Hardware Events',
              items: ['cache-misses', 'cache-references', 'branch-misses', 'cycles', 'instructions', 'LLC-load-misses'],
              color: 'text-cyan-400',
            },
            {
              title: 'Software Events',
              items: ['page-faults', 'context-switches', 'cpu-migrations', 'minor-faults', 'major-faults'],
              color: 'text-violet-400',
            },
            {
              title: 'Tracepoint Events',
              items: ['syscalls:sys_enter_read', 'sched:sched_switch', 'block:block_rq_issue', 'net:net_dev_xmit'],
              color: 'text-amber-400',
            },
          ].map(({ title, items, color }) => (
            <div key={title} className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <div className={`text-xs font-semibold mb-2 ${color}`}>{title}</div>
              {items.map(item => (
                <div key={item} className="text-xs font-mono text-slate-400 py-0.5">{item}</div>
              ))}
            </div>
          ))}
        </div>

        <CodeBlock language="bash" code={`# Quick system-wide stats for 5 seconds
perf stat -a sleep 5

# Count cache misses for a specific program
perf stat -e cache-misses,cache-references,instructions ./myprogram

# IPC = instructions per cycle (1.0+ is good, <0.5 = likely memory-bound)
perf stat -e cycles,instructions ./myprogram

# Record call graph (flamegraph data)
perf record -g -p $(pgrep myapp) sleep 10
perf report --stdio

# Real-time top-like view
perf top -e cache-misses

# Count system calls
perf stat -e 'syscalls:sys_enter_*' -a sleep 5 2>&1 | sort -k1 -rn | head -20`} />

        <Callout type="tip" title="IPC — Instructions Per Cycle">
          The IPC ratio from <code>perf stat</code> is one of the most useful single metrics.
          A well-optimized CPU-bound program achieves 2–4 IPC on modern CPUs. An IPC of 0.3 means
          the CPU is spending 70% of its time <em>stalled waiting for memory</em> — no amount of CPU
          tuning will help; you need to fix memory access patterns.
        </Callout>
      </Section>

      {/* Key Takeaways */}
      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">Exam Key Takeaways</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li>• All metrics ultimately come from <code className="text-cyan-400">/proc</code> — there's no magic.</li>
          <li>• <code className="text-cyan-400">vmstat si/so &gt; 0</code> = active swapping = RAM pressure — tune with swappiness or add RAM.</li>
          <li>• <code className="text-cyan-400">iostat %util → 100%</code> + high <code>aqu-sz</code> = I/O saturated — switch scheduler or add storage.</li>
          <li>• <code className="text-cyan-400">%iowait</code> is a CPU state, not an I/O measurement — high wa means CPUs are idle waiting for I/O.</li>
          <li>• <code className="text-cyan-400">sar</code> requires <code>sysstat</code> service enabled to collect historical data in <code>/var/log/sa/</code>.</li>
          <li>• <code className="text-cyan-400">perf stat</code> IPC &lt; 0.5 = memory-bound workload — consider huge pages or NUMA pinning.</li>
          <li>• <code className="text-cyan-400">load average &gt; nCPUs</code> sustained = CPU bottleneck — check run queue with <code>vmstat r</code>.</li>
        </ul>
      </div>
    </div>
  )
}
