import { FileText, BookOpen, CheckCircle, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface ParamRow {
  param: string
  section: string
  default_val: string
  recommended: string
  persist: string
  desc: string
}

const sysctlParams: ParamRow[] = [
  // Memory
  { param: 'vm.swappiness', section: 'Memory', default_val: '60', recommended: '10 (server)', persist: 'sysctl.d', desc: 'Tendency to swap anonymous pages. 10 = keep working set in RAM.' },
  { param: 'vm.nr_hugepages', section: 'Memory', default_val: '0', recommended: '512+ for DBs', persist: 'sysctl.d', desc: 'Static 2MB huge pages pre-allocated.' },
  { param: 'vm.overcommit_memory', section: 'Memory', default_val: '0', recommended: '0 or 2', persist: 'sysctl.d', desc: '0=heuristic, 1=always, 2=never overcommit.' },
  { param: 'vm.overcommit_ratio', section: 'Memory', default_val: '50', recommended: '80 (with mode 2)', persist: 'sysctl.d', desc: '% of RAM allowed in overcommit mode 2.' },
  { param: 'vm.vfs_cache_pressure', section: 'Memory', default_val: '100', recommended: '50 (file servers)', persist: 'sysctl.d', desc: 'Tendency to reclaim inode/dentry cache.' },
  { param: 'vm.dirty_ratio', section: 'Memory', default_val: '20', recommended: '5-10 (DB servers)', persist: 'sysctl.d', desc: 'Max % RAM dirty before writes block.' },
  { param: 'vm.dirty_background_ratio', section: 'Memory', default_val: '10', recommended: '2-5', persist: 'sysctl.d', desc: '% RAM dirty that triggers background writeback.' },
  { param: 'vm.dirty_writeback_centisecs', section: 'Memory', default_val: '500', recommended: '200 (DB)', persist: 'sysctl.d', desc: 'Writeback daemon wakeup interval (centiseconds).' },
  { param: 'kernel.numa_balancing', section: 'Memory', default_val: '1', recommended: '0 (pinned workloads)', persist: 'sysctl.d', desc: 'Auto NUMA page migration. Disable for pinned apps.' },
  { param: 'kernel.shmmax', section: 'Memory', default_val: '~4GB', recommended: 'shared_buffers + 5%', persist: 'sysctl.d', desc: 'Max single SYSV shared memory segment size.' },
  { param: 'kernel.shmall', section: 'Memory', default_val: 'varies', recommended: 'shmmax / PAGE_SIZE', persist: 'sysctl.d', desc: 'Total SYSV shared memory pages system-wide.' },
  // Network
  { param: 'net.core.rmem_max', section: 'Network', default_val: '212992', recommended: '≥ BDP', persist: 'sysctl.d', desc: 'Max socket receive buffer. Must be ≥ tcp_rmem[2].' },
  { param: 'net.core.wmem_max', section: 'Network', default_val: '212992', recommended: '≥ BDP', persist: 'sysctl.d', desc: 'Max socket send buffer. Must be ≥ tcp_wmem[2].' },
  { param: 'net.core.rmem_default', section: 'Network', default_val: '212992', recommended: 'BDP', persist: 'sysctl.d', desc: 'Default receive buffer (before autotuning).' },
  { param: 'net.ipv4.tcp_rmem', section: 'Network', default_val: '4096 131072 6291456', recommended: '4096 BDP 2×BDP', persist: 'sysctl.d', desc: 'TCP recv: min default max per socket.' },
  { param: 'net.ipv4.tcp_wmem', section: 'Network', default_val: '4096 16384 4194304', recommended: '4096 BDP 2×BDP', persist: 'sysctl.d', desc: 'TCP send: min default max per socket.' },
  { param: 'net.ipv4.tcp_congestion_control', section: 'Network', default_val: 'cubic', recommended: 'bbr (WAN)', persist: 'sysctl.d + modules-load.d', desc: 'TCP congestion algorithm.' },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
      className="text-slate-600 hover:text-slate-300 ml-2 flex-shrink-0"
    >
      {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
    </button>
  )
}

const persistMethods = [
  {
    change: 'Kernel parameters (sysctl)',
    method: '/etc/sysctl.d/99-tuning.conf',
    activate: 'sysctl --system',
    color: 'text-cyan-400',
    example: 'vm.swappiness = 10',
  },
  {
    change: 'I/O scheduler',
    method: '/etc/udev/rules.d/60-ioscheduler.rules',
    activate: 'udevadm control --reload-rules && udevadm trigger',
    color: 'text-amber-400',
    example: 'ACTION=="add|change", KERNEL=="sda", ATTR{queue/scheduler}="mq-deadline"',
  },
  {
    change: 'Module parameters',
    method: '/etc/modprobe.d/99-params.conf',
    activate: 'modprobe -r <module> && modprobe <module>',
    color: 'text-violet-400',
    example: 'options nf_conntrack hashsize=131072',
  },
  {
    change: 'Load modules at boot',
    method: '/etc/modules-load.d/modules.conf',
    activate: '(on next boot)',
    color: 'text-emerald-400',
    example: 'tcp_bbr',
  },
  {
    change: 'CPU/system profile',
    method: 'tuned-adm profile <name>',
    activate: 'Immediate + persistent (tuned service)',
    color: 'text-orange-400',
    example: 'tuned-adm profile throughput-performance',
  },
  {
    change: 'systemd service limits',
    method: '/etc/systemd/system/<svc>.service',
    activate: 'systemctl daemon-reload && systemctl restart <svc>',
    color: 'text-sky-400',
    example: 'MemoryMax=2G\nCPUQuota=200%',
  },
  {
    change: 'Huge pages (static)',
    method: '/etc/sysctl.d/ + /etc/fstab (hugetlbfs)',
    activate: 'sysctl --system',
    color: 'text-rose-400',
    example: 'vm.nr_hugepages = 512',
  },
  {
    change: 'THP setting',
    method: 'tuned profile [vm] transparent_hugepages=',
    activate: 'tuned-adm profile <name>',
    color: 'text-teal-400',
    example: 'transparent_hugepages=madvise',
  },
  {
    change: 'Mount options',
    method: '/etc/fstab',
    activate: 'mount -o remount <mount>',
    color: 'text-indigo-400',
    example: '/dev/sdb1 /data ext4 defaults,noatime 0 2',
  },
]

const examCommands = [
  { cmd: 'vmstat 2 5', purpose: 'Virtual memory stats: swapping, CPU states, I/O', section: 'Monitor' },
  { cmd: 'iostat -xz 2 5', purpose: 'Extended I/O stats: %util, await, aqu-sz', section: 'Monitor' },
  { cmd: 'mpstat -P ALL 2', purpose: 'Per-CPU statistics', section: 'Monitor' },
  { cmd: 'sar -u -r -b 2 5', purpose: 'CPU, memory, I/O activity report', section: 'Monitor' },
  { cmd: 'pmstat -s 5 -t 2s', purpose: 'PCP-based system statistics', section: 'PCP' },
  { cmd: 'pminfo kernel.all.load', purpose: 'Describe a PCP metric', section: 'PCP' },
  { cmd: 'dmesg -T -l err,warn', purpose: 'Kernel errors with timestamps', section: 'Hardware' },
  { cmd: 'dmidecode -t memory', purpose: 'DIMM slot info from BIOS', section: 'Hardware' },
  { cmd: 'lscpu', purpose: 'CPU topology including NUMA nodes', section: 'Hardware' },
  { cmd: 'sysctl -w vm.swappiness=10', purpose: 'Set kernel parameter (not persistent)', section: 'Kernel' },
  { cmd: 'sysctl --system', purpose: 'Apply all sysctl.d files', section: 'Kernel' },
  { cmd: 'ps -eo pid,stat,comm | awk \'$2~/^D/\'', purpose: 'Find processes in D state (I/O wait)', section: 'Performance' },
  { cmd: 'valgrind --leak-check=full ./app', purpose: 'Memory leak detection', section: 'Performance' },
  { cmd: '/usr/share/bcc/tools/syscount', purpose: 'Count system calls (eBPF)', section: 'eBPF' },
  { cmd: '/usr/share/bcc/tools/biolatency', purpose: 'Block I/O latency histogram (eBPF)', section: 'eBPF' },
  { cmd: 'renice -n 5 -p PID', purpose: 'Change process CPU priority', section: 'Tuning' },
  { cmd: 'chrt -f -p 50 PID', purpose: 'Set SCHED_FIFO real-time scheduling', section: 'Tuning' },
  { cmd: 'ionice -c 2 -n 4 -p PID', purpose: 'Set I/O scheduling class and priority', section: 'Tuning' },
  { cmd: 'tuned-adm profile throughput-performance', purpose: 'Apply a tuned profile (persistent)', section: 'Tuning' },
  { cmd: 'tuned-adm recommend', purpose: 'Get profile recommendation for this system', section: 'Tuning' },
  { cmd: 'numactl --hardware', purpose: 'Show NUMA topology and distances', section: 'Memory' },
  { cmd: 'numactl --cpunodebind=0 --membind=0 ./app', purpose: 'Run app on NUMA node 0', section: 'Memory' },
  { cmd: 'echo 512 > /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages', purpose: 'Allocate static huge pages', section: 'Memory' },
  { cmd: 'echo madvise > /sys/kernel/mm/transparent_hugepage/enabled', purpose: 'THP madvise mode', section: 'Memory' },
  { cmd: 'ipcs -l', purpose: 'SYSV IPC limits', section: 'Memory' },
  { cmd: 'cat /sys/block/sda/queue/scheduler', purpose: 'Check I/O scheduler', section: 'Disk' },
  { cmd: 'echo mq-deadline > /sys/block/sda/queue/scheduler', purpose: 'Set I/O scheduler', section: 'Disk' },
  { cmd: 'ss -tnm', purpose: 'TCP sockets with buffer usage', section: 'Network' },
  { cmd: 'ss -unu', purpose: 'UDP socket statistics', section: 'Network' },
]

const sections = ['Monitor', 'PCP', 'Hardware', 'Kernel', 'Performance', 'eBPF', 'Tuning', 'Memory', 'Disk', 'Network']

export default function QuickReference() {
  const [filter, setFilter] = useState<string>('All')

  const filtered = filter === 'All' ? examCommands : examCommands.filter(c => c.section === filter)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center">
            <FileText size={20} className="text-slate-300" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Quick Reference</h1>
            <p className="text-slate-400 text-sm">All commands · Persistence methods · Exam cheat sheet</p>
          </div>
        </div>
        <p className="text-slate-400 max-w-3xl">
          Your quick-access reference for exam day. Every command you need, every persistence method explained.
        </p>
      </div>

      {/* Persistence Table */}
      <div className="card mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={16} className="text-emerald-400" />
          <h2 className="text-xl font-bold text-white">The Persistence Guide</h2>
        </div>
        <p className="text-sm text-slate-400 mb-4">
          Every EX442 change must survive a reboot. Use this table to match the change type to the correct persistence method.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase">Change Type</th>
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase">Persist Using</th>
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase hidden md:table-cell">Activate</th>
                <th className="text-left py-2 text-slate-400 text-xs uppercase hidden lg:table-cell">Example</th>
              </tr>
            </thead>
            <tbody>
              {persistMethods.map(({ change, method, activate, color, example }) => (
                <tr key={change} className="border-b border-slate-800/50">
                  <td className={`py-2 pr-4 font-medium ${color} text-sm`}>{change}</td>
                  <td className="py-2 pr-4 font-mono text-slate-300 text-xs">{method}</td>
                  <td className="py-2 pr-4 text-slate-400 text-xs hidden md:table-cell">{activate}</td>
                  <td className="py-2 text-slate-500 text-xs font-mono hidden lg:table-cell max-w-xs truncate">{example.split('\n')[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Command Reference */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-slate-400" />
            <h2 className="text-xl font-bold text-white">Command Reference</h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['All', ...sections].map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`text-xs px-3 py-1 rounded-full border transition-all ${
                  filter === s
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase w-8"></th>
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase">Command</th>
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase">Purpose</th>
                <th className="text-left py-2 text-slate-400 text-xs uppercase hidden sm:table-cell">Section</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(({ cmd, purpose, section }) => (
                <tr key={cmd} className="border-b border-slate-800/40 hover:bg-slate-900/50 group">
                  <td className="py-2 pr-2">
                    <CopyButton text={cmd} />
                  </td>
                  <td className="py-2 pr-4 font-mono text-cyan-400 text-xs">{cmd}</td>
                  <td className="py-2 pr-4 text-slate-300 text-xs">{purpose}</td>
                  <td className="py-2 text-xs hidden sm:table-cell">
                    <span className="bg-slate-800 text-slate-400 rounded-full px-2 py-0.5 text-xs">{section}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sysctl Quick Reference */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Key sysctl Parameters</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase">Parameter</th>
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase hidden sm:table-cell">Default</th>
                <th className="text-left py-2 pr-4 text-slate-400 text-xs uppercase">Recommended</th>
                <th className="text-left py-2 text-slate-400 text-xs uppercase hidden lg:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {sysctlParams.map(({ param, default_val, recommended, desc, section }) => (
                <tr key={param} className="border-b border-slate-800/40 hover:bg-slate-900/50">
                  <td className="py-2 pr-4">
                    <div className="flex items-center gap-1">
                      <code className="text-cyan-400 font-mono text-xs">{param}</code>
                      <CopyButton text={param} />
                    </div>
                    <span className="text-xs text-slate-600">{section}</span>
                  </td>
                  <td className="py-2 pr-4 font-mono text-slate-500 text-xs hidden sm:table-cell">{default_val}</td>
                  <td className="py-2 pr-4 font-mono text-emerald-400 text-xs">{recommended}</td>
                  <td className="py-2 text-slate-400 text-xs hidden lg:table-cell">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exam Day Tips */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Exam Day Strategy</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: '1. Read First, Type Second',
              color: 'text-cyan-400',
              tips: [
                'Read the full question before starting',
                'Identify what is being asked: tune, monitor, or profile?',
                'Note any specific values given (bandwidth, RTT, etc.)',
              ]
            },
            {
              title: '2. Always Verify Persistence',
              color: 'text-amber-400',
              tips: [
                'For every change: ask "will this survive reboot?"',
                'Use /etc/sysctl.d/ not just sysctl -w',
                'Use tuned-adm for profile changes (self-persisting)',
                'Reboot a test VM to verify your persistence method',
              ]
            },
            {
              title: '3. Check Before and After',
              color: 'text-emerald-400',
              tips: [
                'Record the before state (sysctl -a > /tmp/before.txt)',
                'Verify the change took effect immediately',
                'Reboot and verify again',
                'Use sysctl vm.swappiness to confirm',
              ]
            },
            {
              title: '4. Common Mistakes to Avoid',
              color: 'text-rose-400',
              tips: [
                'Using sysctl -w without /etc/sysctl.d/ file',
                'Writing to /sys without udev rules',
                'Changing hugepages but forgetting hugetlbfs mount',
                'Setting tcp_rmem[2] > rmem_max (silently capped)',
                'Forgetting to enable sysstat for sar to work',
              ]
            },
          ].map(({ title, color, tips }) => (
            <div key={title} className="bg-slate-900 rounded-lg p-4 border border-slate-800">
              <div className={`font-semibold text-sm mb-2 ${color}`}>{title}</div>
              <ul className="space-y-1.5">
                {tips.map(tip => (
                  <li key={tip} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className={`${color} mt-0.5 flex-shrink-0`}>•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BDP Quick Calc */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-3">BDP Quick Calculator</h2>
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 font-mono text-sm">
          <div className="text-slate-400 mb-3"># Copy this formula for exam calculations:</div>
          <div className="text-white">
            BDP_bytes = <span className="text-cyan-400">bandwidth_gbps</span> × 10^9 × <span className="text-violet-400">rtt_ms</span> / 1000 / 8
          </div>
          <div className="text-slate-500 mt-2 text-xs">
            # Example: 10 Gbps, 50ms RTT<br/>
            BDP = 10 × 1000000000 × 0.050 / 8 = <span className="text-rose-400">62,500,000 bytes</span> ≈ 64 MB
          </div>
          <div className="mt-3 text-slate-400 text-xs">
            # Set buffers to 2× BDP for headroom:<br/>
            net.core.rmem_max = <span className="text-emerald-400">134217728</span>  # 128 MB<br/>
            net.ipv4.tcp_rmem = 4096 <span className="text-emerald-400">67108864</span> <span className="text-emerald-400">134217728</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-2">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">The One Rule to Rule Them All</h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          Every single configuration change on the EX442 exam must
          <strong className="text-white"> persist after a full system reboot</strong> without any manual intervention.
          This means: sysctl changes → <code className="text-cyan-400">/etc/sysctl.d/</code>,
          disk changes → <code className="text-cyan-400">udev rules</code> or <code className="text-cyan-400">fstab</code>,
          service limits → <code className="text-cyan-400">systemd unit files</code>,
          profiles → <code className="text-cyan-400">tuned-adm profile</code>.
          If you're not sure — test it. Reboot your practice VM and verify.
        </p>
      </div>
    </div>
  )
}
