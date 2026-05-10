import { HardDrive, BookOpen, CheckCircle } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

function IOStackDiagram() {
  const layers = [
    { label: 'Application', tools: ['read()/write()', 'O_DIRECT bypass'], color: '#8b5cf6' },
    { label: 'VFS (Virtual File System)', tools: ['open/read/write syscalls', 'file descriptor abstraction'], color: '#06b6d4' },
    { label: 'Page Cache', tools: ['file data cache', 'dirty page writeback', 'readahead'], color: '#10b981' },
    { label: 'Filesystem (ext4/xfs)', tools: ['block allocation', 'journaling', 'extent management'], color: '#f59e0b' },
    { label: 'Block Layer (I/O Scheduler)', tools: ['mq-deadline / bfq / kyber / none', 'request merging, reordering'], color: '#f97316' },
    { label: 'Device Driver', tools: ['SCSI/NVMe/SATA', 'hardware queues'], color: '#6b7280' },
  ]
  return (
    <div className="space-y-1 my-4">
      {layers.map((layer, i) => (
        <div key={i} className="rounded-lg border p-3 flex items-center gap-3"
          style={{ borderColor: layer.color + '30', background: layer.color + '08' }}>
          <div className="w-48 flex-shrink-0 font-semibold text-sm" style={{ color: layer.color }}>{layer.label}</div>
          <div className="hidden sm:flex gap-2 flex-wrap">
            {layer.tools.map(t => (
              <span key={t} className="text-xs font-mono px-2 py-0.5 rounded border"
                style={{ color: layer.color, borderColor: layer.color + '30', background: layer.color + '10' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function DiskFileSystems() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <HardDrive size={20} className="text-teal-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Disk & File Systems</h1>
            <p className="text-slate-400 text-sm">I/O schedulers · filesystem tuning · dirty page writeback · block layer</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          I/O performance bottlenecks are subtle. The block layer, filesystem layer, and page cache each
          contribute to latency. Knowing <em>where</em> your I/O time is spent determines which knob to turn.
        </p>
      </div>

      {/* I/O Stack */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">The Linux I/O Stack</h2>
        <IOStackDiagram />
        <Callout type="info" title="O_DIRECT — Bypassing the Page Cache">
          Applications that manage their own caching (databases like PostgreSQL) use
          <code> O_DIRECT</code> to bypass the page cache and write directly to the block device.
          This avoids double-buffering (data in DB buffer pool AND page cache) but requires aligned writes.
        </Callout>
      </div>

      {/* I/O Schedulers */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">I/O Scheduling Algorithms</h2>
        <p className="text-sm text-slate-400 mb-3">
          The I/O scheduler sits in the block layer and decides in what order to dispatch requests to the device.
          RHEL 9 uses the <strong className="text-slate-200">multi-queue block layer (blk-mq)</strong> — device queues
          map to CPU cores, enabling high parallelism for NVMe.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            {
              name: 'mq-deadline',
              best: 'SATA/SAS SSDs, spinning HDDs',
              color: 'text-cyan-400',
              border: 'border-cyan-500/30',
              bg: 'bg-cyan-500/5',
              desc: 'Deadline-based scheduling. Each request has a deadline (default: reads 500ms, writes 5s). Requests approaching deadline are served first. Prevents I/O starvation. Best for mixed read/write workloads on SATA SSDs.',
              params: ['deadline_reads_ms=500', 'deadline_writes_ms=5000', 'front_merges=1'],
            },
            {
              name: 'bfq (Budget Fair Queueing)',
              best: 'Desktop, interactive workloads',
              color: 'text-violet-400',
              border: 'border-violet-500/30',
              bg: 'bg-violet-500/5',
              desc: 'Assigns a budget (number of sectors) to each process/group. Processes get time slices proportional to their weight. Excellent interactive responsiveness. Too much overhead for high-IOPS servers.',
              params: ['slice_idle=8ms', 'max_budget=2560', 'low_latency=1'],
            },
            {
              name: 'kyber',
              best: 'NVMe SSDs with high queue depth',
              color: 'text-emerald-400',
              border: 'border-emerald-500/30',
              bg: 'bg-emerald-500/5',
              desc: 'Token bucket algorithm. Two separate queues: reads and writes. Targets specific latency goals for each. Very lightweight — designed for ultra-fast NVMe devices that don\'t need much software scheduling.',
              params: ['read_lat_nsec=2000', 'write_lat_nsec=10000'],
            },
            {
              name: 'none / noop',
              best: 'NVMe SSDs, virtual machines',
              color: 'text-slate-400',
              border: 'border-slate-500/30',
              bg: 'bg-slate-500/5',
              desc: 'No software scheduling — requests go directly to the device. Best when the device has its own intelligent queuing (NVMe firmware, hypervisor). Lowest CPU overhead. Wrong choice for spinning disks.',
              params: ['(no parameters — passthrough)'],
            },
          ].map(({ name, best, color, border, bg, desc, params }) => (
            <div key={name} className={`rounded-lg border ${border} ${bg} p-4`}>
              <div className={`font-mono font-bold text-sm ${color}`}>{name}</div>
              <div className="text-xs text-slate-500 mb-2">Best for: {best}</div>
              <div className="text-xs text-slate-400 leading-relaxed mb-2">{desc}</div>
              <div className="flex flex-wrap gap-1">
                {params.map(p => (
                  <span key={p} className="text-xs font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <CodeBlock language="bash" code={`# Check current scheduler for a device
cat /sys/block/sda/queue/scheduler
cat /sys/block/nvme0n1/queue/scheduler
# Output: [mq-deadline] bfq kyber none  <- active in brackets

# Change scheduler (runtime, not persistent)
echo mq-deadline > /sys/block/sda/queue/scheduler
echo none > /sys/block/nvme0n1/queue/scheduler

# View queue depth and other settings
cat /sys/block/nvme0n1/queue/nr_requests    # queue depth
cat /sys/block/sda/queue/read_ahead_kb      # readahead buffer

# Set readahead for sequential workloads (in 512-byte sectors)
echo 2048 > /sys/block/sda/queue/read_ahead_kb  # 1MB readahead
blockdev --setra 2048 /dev/sda                   # equivalent`} />

        <CodeBlock language="bash" filename="/etc/udev/rules.d/60-ioscheduler.rules" code={`# mq-deadline for spinning disks and SATA SSDs
ACTION=="add|change", KERNEL=="sd[a-z]*", ATTR{queue/rotational}=="1", ATTR{queue/scheduler}="mq-deadline"
ACTION=="add|change", KERNEL=="sd[a-z]*", ATTR{queue/rotational}=="0", ATTR{queue/scheduler}="mq-deadline"

# none for NVMe (they manage their own queuing)
ACTION=="add|change", KERNEL=="nvme[0-9]*", ATTR{queue/scheduler}="none"

# Load rules
# udevadm control --reload-rules && udevadm trigger`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists via udev rules</span>
          <span className="text-xs text-slate-500">applied at device discovery on boot</span>
        </div>
      </div>

      {/* Filesystem Tuning */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Filesystem Layout & Mount Option Tuning</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm font-semibold text-slate-200 mb-2">Common Performance Mount Options</div>
            <div className="space-y-1.5">
              {[
                { opt: 'noatime', desc: 'Don\'t update access time on reads — saves write I/O' },
                { opt: 'nodiratime', desc: 'Don\'t update directory access times' },
                { opt: 'relatime', desc: 'Only update atime when newer than mtime (RHEL default)' },
                { opt: 'data=writeback', desc: 'ext4: skip journaling data (only journal metadata) — fastest, unsafe' },
                { opt: 'data=ordered', desc: 'ext4: journal metadata, flush data before commit — default' },
                { opt: 'barrier=0', desc: 'Disable write barriers (unsafe without battery-backed cache)' },
                { opt: 'stripe=N', desc: 'RAID stripe size hint for better block allocation' },
              ].map(({ opt, desc }) => (
                <div key={opt} className="flex gap-2 text-xs">
                  <code className="text-teal-400 font-mono flex-shrink-0 w-28">{opt}</code>
                  <span className="text-slate-400">{desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-200 mb-2">XFS Specifics</div>
            <div className="space-y-1.5 text-xs">
              {[
                { opt: 'logbsize=256k', desc: 'Larger log buffer — more journaling throughput' },
                { opt: 'swalloc', desc: 'Swap extents for RAID — align to stripe width' },
                { opt: 'largeio', desc: 'Prefer large I/Os (good for sequential)' },
                { opt: 'inode64', desc: 'Spread inodes across entire filesystem (default on XFS)' },
                { opt: 'allocsize=64m', desc: 'Speculative preallocation size for sequential writes' },
              ].map(({ opt, desc }) => (
                <div key={opt} className="flex gap-2">
                  <code className="text-orange-400 font-mono flex-shrink-0 w-28">{opt}</code>
                  <span className="text-slate-400">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CodeBlock language="bash" filename="/etc/fstab" code={`# High-performance database partition (ext4)
/dev/sdb1  /data  ext4  defaults,noatime,data=ordered  0 2

# Log partition (sequential writes — disable barriers only with BBU)
/dev/sdc1  /logs  xfs   defaults,noatime,logbsize=256k  0 2

# Remount with new options (without reboot)
mount -o remount,noatime /data`} />

        <Callout type="warning" title="data=writeback Safety">
          <code>data=writeback</code> on ext4 dramatically increases write throughput but means data written
          just before a crash may be corrupted (metadata is consistent, data may not be). Only use with
          UPS-backed systems or application-level crash recovery.
        </Callout>
      </div>

      {/* Dirty Page Writeback */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Dirty Page Writeback</h2>
        <p className="text-sm text-slate-400 mb-3">
          When applications write data, it goes to the <strong className="text-slate-200">page cache</strong> first
          (write-behind buffering). The kernel marks these pages "dirty" and a background thread (<code className="text-cyan-400">pdflush/writeback</code>)
          eventually flushes them to disk. Too aggressive writeback = frequent I/O spikes; too lazy = risk of data loss on crash.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="metric-table">
            <thead><tr><th>Parameter</th><th>Default</th><th>Effect</th><th>Tune To</th></tr></thead>
            <tbody>
              {[
                {
                  param: 'vm.dirty_ratio', default: '20', 
                  effect: 'Max % RAM as dirty pages before writes BLOCK (synchronous)',
                  tune: 'Lower (5-10%) for smooth I/O; higher for bursty writers',
                },
                {
                  param: 'vm.dirty_background_ratio', default: '10',
                  effect: '% RAM dirty pages that trigger BACKGROUND writeback',
                  tune: 'Should be < dirty_ratio; lower triggers earlier writeback',
                },
                {
                  param: 'vm.dirty_writeback_centisecs', default: '500 (5s)',
                  effect: 'How often writeback thread wakes up to flush dirty pages',
                  tune: 'Lower = more frequent small writes; higher = batch larger writes',
                },
                {
                  param: 'vm.dirty_expire_centisecs', default: '3000 (30s)',
                  effect: 'How long a dirty page can be dirty before being considered expired',
                  tune: 'Lower = fresher on-disk data, more I/O; higher = less I/O',
                },
              ].map(({ param, default: def, effect, tune }) => (
                <tr key={param}>
                  <td className="font-mono text-teal-400 text-xs">{param}</td>
                  <td className="font-mono text-slate-400 text-xs">{def}</td>
                  <td className="text-slate-300 text-sm">{effect}</td>
                  <td className="text-slate-400 text-xs italic">{tune}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock language="bash" code={`# Check dirty page status
cat /proc/meminfo | grep -i dirty
cat /proc/vmstat | grep -E 'nr_dirty|writeback'

# View writeback statistics
/proc/sys/vm/dirty_ratio
/proc/sys/vm/dirty_background_ratio

# For a database server with lots of sequential writes:
# Reduce dirty_ratio to avoid long pause spikes
sysctl -w vm.dirty_ratio=5
sysctl -w vm.dirty_background_ratio=2
sysctl -w vm.dirty_writeback_centisecs=200`} />

        <CodeBlock language="bash" filename="/etc/sysctl.d/99-disk.conf" code={`# Database server write tuning — minimize write pause spikes
vm.dirty_ratio = 5
vm.dirty_background_ratio = 2
vm.dirty_writeback_centisecs = 200
vm.dirty_expire_centisecs = 1000`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists via /etc/sysctl.d/</span>
        </div>
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">Exam Key Takeaways</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li>• Check current scheduler: <code className="text-cyan-400">cat /sys/block/sda/queue/scheduler</code></li>
          <li>• Change scheduler: <code className="text-cyan-400">echo mq-deadline &gt; /sys/block/sda/queue/scheduler</code> — persist with udev rules.</li>
          <li>• <strong className="text-white">mq-deadline</strong> for spinning disks/SATA SSDs; <strong className="text-white">none</strong> for NVMe.</li>
          <li>• Mount with <code className="text-cyan-400">noatime</code> to reduce unnecessary write I/O from access time updates.</li>
          <li>• <code className="text-cyan-400">vm.dirty_ratio</code> and <code className="text-cyan-400">vm.dirty_background_ratio</code> — persist via /etc/sysctl.d/.</li>
          <li>• Scheduler changes via udev rules in <code className="text-cyan-400">/etc/udev/rules.d/</code> are persistent and apply to all matching devices.</li>
        </ul>
      </div>
    </div>
  )
}
