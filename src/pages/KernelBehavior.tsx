import { Cpu, BookOpen, CheckCircle } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

function ProcSysTree() {
  const nodes = [
    {
      path: '/proc/sys/',
      color: 'text-cyan-400',
      children: [
        { path: 'kernel/', desc: 'Process scheduling, NUMA, shmem, core dumps', children: ['pid_max', 'shmmax', 'shmall', 'numa_balancing', 'core_pattern', 'ngroups_max'] },
        { path: 'vm/', desc: 'Virtual memory — the most performance-critical namespace', children: ['swappiness', 'dirty_ratio', 'overcommit_memory', 'nr_hugepages', 'vfs_cache_pressure', 'zone_reclaim_mode'] },
        { path: 'net/', desc: 'Network stack — TCP, UDP, IPv4, IPv6, interfaces', children: ['ipv4/tcp_rmem', 'ipv4/tcp_wmem', 'core/rmem_max', 'ipv4/tcp_congestion_control'] },
        { path: 'fs/', desc: 'Filesystem limits — file descriptors, inotify, pipes', children: ['file-max', 'nr_open', 'inotify/max_user_watches', 'aio-max-nr'] },
        { path: 'dev/', desc: 'Device-specific settings', children: ['cdrom/', 'raid/'] },
      ],
    },
  ]
  return (
    <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 my-4">
      {nodes[0].children.map(({ path, desc, children }) => (
        <div key={path} className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">/proc/sys/{path}</span>
            <span className="text-slate-500 text-xs">— {desc}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1 ml-4">
            {children.map(c => (
              <span key={c} className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                {c}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function KernelBehavior() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <Cpu size={20} className="text-indigo-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Kernel Behavior</h1>
            <p className="text-slate-400 text-sm">/proc/sys · sysctl · /sys filesystem · module parameters</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          The Linux kernel exposes its internal state and configuration through two virtual filesystems:
          <code className="text-cyan-400 mx-1">/proc</code> (procfs) and
          <code className="text-cyan-400 mx-1">/sys</code> (sysfs). Understanding how to read and modify
          these, and critically — how to make changes <strong className="text-white">persistent</strong> — is the heart of EX442.
        </p>
      </div>

      {/* /proc/sys */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">/proc/sys — Runtime Kernel Parameters</h2>
        <p className="text-sm text-slate-400 mb-2">
          The kernel exports hundreds of tunable parameters as files under <code className="text-cyan-400">/proc/sys/</code>.
          Each file corresponds to a kernel variable. Writing to a file changes the kernel's behavior <em>immediately</em> —
          no restart required. Reading a file shows the current value.
        </p>
        <ProcSysTree />

        <CodeBlock language="bash" code={`# Read a parameter (two equivalent methods)
cat /proc/sys/vm/swappiness
sysctl vm.swappiness

# Write a parameter (immediately, not persistent)
echo 10 > /proc/sys/vm/swappiness
sysctl -w vm.swappiness=10

# The dot notation in sysctl maps to / in /proc/sys:
# vm.swappiness  <->  /proc/sys/vm/swappiness
# net.ipv4.tcp_rmem  <->  /proc/sys/net/ipv4/tcp_rmem

# Show ALL current sysctl values
sysctl -a

# Search for a parameter
sysctl -a | grep swappiness
sysctl -a | grep -E 'hugepage|numa'`} />

        <div className="bg-amber-400/5 border border-amber-400/20 rounded-lg p-4 mt-3">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={14} className="text-amber-400" />
            <span className="text-amber-300 font-semibold text-sm">Making sysctl Changes Persistent</span>
          </div>
          <p className="text-sm text-slate-300 mb-3">
            Direct writes to <code>/proc/sys</code> are lost on reboot. Use one of these persistent methods:
          </p>
          <CodeBlock language="bash" code={`# METHOD 1: /etc/sysctl.conf (system-wide, lower priority)
echo "vm.swappiness = 10" >> /etc/sysctl.conf

# METHOD 2 (PREFERRED): Drop-in file in /etc/sysctl.d/
# Files are processed in alphabetical order; later files override earlier
cat > /etc/sysctl.d/99-performance.conf << 'EOF'
vm.swappiness = 10
vm.dirty_ratio = 15
net.core.rmem_max = 134217728
EOF

# Apply immediately without rebooting
sysctl -p /etc/sysctl.d/99-performance.conf

# Or apply all files
sysctl --system

# Verify
sysctl vm.swappiness`} />
          <div className="flex items-center gap-2 mt-2">
            <span className="persist-badge"><CheckCircle size={10} /> Persists across reboots</span>
            <span className="text-xs text-slate-500">via /etc/sysctl.d/ drop-in files</span>
          </div>
        </div>
      </div>

      {/* /sys filesystem */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">/sys — The sysfs Filesystem</h2>
        <p className="text-sm text-slate-400 mb-3">
          While <code className="text-cyan-400">/proc/sys</code> exposes kernel variables, <code className="text-cyan-400">/sys</code>
          (sysfs) exposes the <strong className="text-slate-200">kernel object model</strong>. Every device, driver, module,
          and bus is represented as a directory. Attributes (files) represent properties of those objects.
          This is how <code>udev</code>, <code>lspci</code>, and device management tools work.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {[
            { path: '/sys/block/sda/queue/', desc: 'Block device I/O scheduler, queue depth, read-ahead' },
            { path: '/sys/devices/system/cpu/', desc: 'Per-CPU frequency, C-states, online/offline control' },
            { path: '/sys/devices/system/node/', desc: 'NUMA node topology and memory statistics' },
            { path: '/sys/kernel/mm/hugepages/', desc: 'Huge page configuration and allocation stats' },
            { path: '/sys/kernel/mm/transparent_hugepage/', desc: 'THP enabled/disabled, defrag behavior' },
            { path: '/sys/bus/pci/devices/', desc: 'PCI device attributes (driver, power management)' },
          ].map(({ path, desc }) => (
            <div key={path} className="bg-slate-900 rounded p-3 border border-slate-800">
              <code className="text-cyan-400 text-xs font-mono">{path}</code>
              <p className="text-slate-400 text-xs mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <CodeBlock language="bash" code={`# Check and change I/O scheduler for nvme0n1
cat /sys/block/nvme0n1/queue/scheduler
echo mq-deadline > /sys/block/nvme0n1/queue/scheduler

# CPU frequency governor (scaling)
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor

# Set all CPUs at once
for cpu in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do
    echo performance > $cpu
done

# Transparent Huge Pages
cat /sys/kernel/mm/transparent_hugepage/enabled
echo madvise > /sys/kernel/mm/transparent_hugepage/enabled

# NUMA memory stats
cat /sys/devices/system/node/node0/meminfo`} />

        <Callout type="warning" title="Persisting /sys Changes">
          Writes to <code>/sys</code> are <em>not</em> persistent. Use <strong>udev rules</strong> for device-specific
          settings (like I/O scheduler per device) and <strong>tuned profiles</strong> or systemd units for CPU/system
          settings.
        </Callout>

        <CodeBlock language="bash" filename="/etc/udev/rules.d/60-ioscheduler.rules" code={`# Set mq-deadline for all SATA SSDs, none for NVMe
ACTION=="add|change", KERNEL=="sd[a-z]", ATTR{queue/rotational}=="0", ATTR{queue/scheduler}="mq-deadline"
ACTION=="add|change", KERNEL=="nvme[0-9]*", ATTR{queue/scheduler}="none"`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists across reboots</span>
          <span className="text-xs text-slate-500">via udev rules — applied at device discovery</span>
        </div>
      </div>

      {/* Module Parameters */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Kernel Module Parameters</h2>
        <p className="text-sm text-slate-400 mb-3">
          Kernel modules can expose parameters that control their behavior. Parameters can be set at module load time
          or modified at runtime via <code className="text-cyan-400">/sys/module/&lt;name&gt;/parameters/</code>.
        </p>

        <CodeBlock language="bash" code={`# List all parameters for a module
modinfo -p <module_name>
modinfo -p iwlwifi   # WiFi driver parameters
modinfo -p tcp_bbr   # BBR congestion control parameters

# Load a module with a parameter
modprobe tcp_bbr
modprobe nf_conntrack hashsize=65536

# View current parameter values at runtime
ls /sys/module/nf_conntrack/parameters/
cat /sys/module/nf_conntrack/parameters/hashsize

# Change a runtime-modifiable parameter
echo 131072 > /sys/module/nf_conntrack/parameters/hashsize`} />

        <CodeBlock language="bash" filename="/etc/modprobe.d/99-performance.conf" code={`# Set module parameters persistently (applied at next module load)
# Format: options <module_name> <param>=<value>

# Increase conntrack hash table size
options nf_conntrack hashsize=131072

# Enable BBR congestion control with high buffer sizes
options tcp_bbr bw_rtprop_win_rtts=10

# Intel NVMe performance settings
options nvme_core io_timeout=4294967295`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists across reboots</span>
          <span className="text-xs text-slate-500">via /etc/modprobe.d/ — applied at module load</span>
        </div>
      </div>

      {/* Important kernel params table */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-3">Key Kernel Performance Parameters</h2>
        <div className="overflow-x-auto">
          <table className="metric-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Default</th>
                <th>Description & Tuning Direction</th>
              </tr>
            </thead>
            <tbody>
              {[
                { param: 'vm.swappiness', default: '60', desc: 'Tendency to swap anonymous pages (0=prefer RAM, 100=aggressive swap, 200=RHEL9 max)' },
                { param: 'vm.dirty_ratio', default: '20', desc: 'Max % of RAM for dirty pages before writes block. Lower = less write bursting' },
                { param: 'vm.dirty_background_ratio', default: '10', desc: '% RAM dirty pages trigger background writeback. Lower = smoother I/O' },
                { param: 'vm.overcommit_memory', default: '0', desc: '0=heuristic, 1=always allow, 2=never overcommit beyond ratio' },
                { param: 'vm.nr_hugepages', default: '0', desc: 'Static huge pages (2MB each). Must be allocated at boot for best results' },
                { param: 'vm.vfs_cache_pressure', default: '100', desc: 'Pressure to reclaim inode/dentry cache. <100 = retain more, 0 = never reclaim' },
                { param: 'kernel.shmmax', default: '4GB', desc: 'Max size of single SYSV shared memory segment' },
                { param: 'kernel.shmall', default: 'varies', desc: 'Total pages for SYSV shared memory across all segments' },
                { param: 'kernel.numa_balancing', default: '1', desc: 'Auto NUMA balancing — may cause page migrations. Disable on pinned workloads' },
                { param: 'net.core.rmem_max', default: '212992', desc: 'Max socket receive buffer — must be >= tcp_rmem[2]' },
                { param: 'net.core.wmem_max', default: '212992', desc: 'Max socket send buffer — must be >= tcp_wmem[2]' },
                { param: 'net.ipv4.tcp_rmem', default: '4096 131072 6291456', desc: 'Min/default/max TCP receive buffer per socket' },
              ].map(({ param, default: def, desc }) => (
                <tr key={param}>
                  <td className="font-mono text-cyan-400 text-xs">{param}</td>
                  <td className="font-mono text-slate-400 text-xs whitespace-nowrap">{def}</td>
                  <td className="text-slate-300 text-xs">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">Exam Key Takeaways</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li>• <code className="text-cyan-400">sysctl -w</code> changes are <strong className="text-rose-400">not persistent</strong> — use <code className="text-cyan-400">/etc/sysctl.d/</code> drop-in files.</li>
          <li>• <code className="text-cyan-400">/sys</code> writes are <strong className="text-rose-400">not persistent</strong> — use udev rules for devices, tuned profiles for system settings.</li>
          <li>• Module parameter files go in <code className="text-cyan-400">/etc/modprobe.d/*.conf</code> using <code>options module_name param=value</code> syntax.</li>
          <li>• <code className="text-cyan-400">sysctl --system</code> applies all files in /etc/sysctl.d/, /run/sysctl.d/, /usr/lib/sysctl.d/ in order.</li>
          <li>• Dot notation in sysctl maps directly to <code className="text-cyan-400">/proc/sys/</code> with dots replaced by slashes.</li>
        </ul>
      </div>
    </div>
  )
}
