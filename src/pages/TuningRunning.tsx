import { Settings, BookOpen, CheckCircle } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

function NiceScaleVisual() {
  const ticks = Array.from({ length: 40 }, (_, i) => i - 20)
  return (
    <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 my-3">
      <div className="text-xs text-slate-400 mb-2 font-semibold uppercase">Nice Value Scale</div>
      <div className="flex items-center gap-0.5 overflow-x-auto pb-1">
        {ticks.map(v => (
          <div key={v} className={`flex-shrink-0 w-6 h-8 rounded text-center flex items-center justify-center text-xs font-mono
            ${v === -20 ? 'bg-rose-500/30 text-rose-400' :
              v < 0 ? 'bg-orange-500/20 text-orange-400' :
              v === 0 ? 'bg-slate-700 text-white font-bold' :
              v > 0 ? 'bg-emerald-500/10 text-emerald-500' : ''}`}>
            {v === -20 || v === 0 || v === 19 ? v : v % 5 === 0 ? v : ''}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span className="text-rose-400">← Highest priority (gets more CPU)</span>
        <span className="text-emerald-600">Lowest priority (gets less CPU) →</span>
      </div>
    </div>
  )
}

export default function TuningRunning() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
            <Settings size={20} className="text-orange-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Tuning Running Systems</h1>
            <p className="text-slate-400 text-sm">process priorities · tuned profiles · cgroups v2 · systemd constraints</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Rather than modifying kernel parameters blindly, use these high-level abstractions to control how
          the OS allocates CPU, memory, and I/O between competing workloads.
        </p>
      </div>

      {/* Process Priorities */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Process Priorities & Scheduling</h2>

        <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-1">Nice Values — CFS Scheduler</h3>
        <p className="text-sm text-slate-400 mb-2">
          The <strong className="text-slate-200">Completely Fair Scheduler (CFS)</strong> uses <em>virtual runtime</em> to
          allocate CPU time. Nice values (-20 to +19) are weight multipliers applied to the time slice calculation.
          A nice value of -20 gets ~10x more CPU than nice +19. Most processes start at nice 0.
        </p>
        <NiceScaleVisual />

        <CodeBlock language="bash" code={`# Start a new process with a specific nice value
nice -n 10 ./low-priority-task
nice -n -5 ./important-app   # requires root for negative nice

# Change nice value of running process
renice -n 5 -p $(pgrep myapp)
renice -n -10 -p 1234        # requires root for lowering

# Change all processes of a user
renice -n 5 -u username

# I/O priority (separate from CPU nice)
# Class 0=Real-time, 1=Best-effort, 2=Idle
ionice -c 1 -n 0 ./latency-critical   # RT, highest
ionice -c 2 -n 4 ./batch-job          # BE, middle
ionice -c 3 ./backup-job              # Idle — lowest

# Get current ionice class of a process
ionice -p $(pgrep myapp)`} />

        <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-1">Real-Time Scheduling with chrt</h3>
        <p className="text-sm text-slate-400 mb-2">
          Real-time scheduling policies run before <em>any</em> SCHED_OTHER (CFS) process.
          This is critical for latency-sensitive applications.
        </p>

        <div className="overflow-x-auto mb-3">
          <table className="metric-table">
            <thead><tr><th>Policy</th><th>Algorithm</th><th>Priority</th><th>Use Case</th></tr></thead>
            <tbody>
              {[
                { policy: 'SCHED_OTHER', alg: 'CFS (default)', prio: 'nice -20..+19', use: 'Normal processes' },
                { policy: 'SCHED_BATCH', alg: 'CFS + batch hint', prio: 'nice 0..+19', use: 'CPU-intensive batch jobs' },
                { policy: 'SCHED_IDLE', alg: 'CFS, lowest weight', prio: 'N/A', use: 'Background maintenance' },
                { policy: 'SCHED_FIFO', alg: 'RT, first-in first-out', prio: '1–99', use: 'Hard RT: audio, drivers' },
                { policy: 'SCHED_RR', alg: 'RT, round-robin', prio: '1–99', use: 'Soft RT: multiple RT threads' },
                { policy: 'SCHED_DEADLINE', alg: 'EDF (earliest deadline)', prio: 'runtime/deadline/period', use: 'Periodic tasks with deadlines' },
              ].map(row => (
                <tr key={row.policy}>
                  <td className="font-mono text-orange-400 text-xs">{row.policy}</td>
                  <td className="text-slate-300 text-xs">{row.alg}</td>
                  <td className="text-slate-400 text-xs font-mono">{row.prio}</td>
                  <td className="text-slate-400 text-xs">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock language="bash" code={`# Set SCHED_FIFO with priority 50 for existing process
chrt -f -p 50 $(pgrep myapp)

# Set SCHED_RR priority 20
chrt -r -p 20 $(pgrep myapp)

# Start a new process with RT scheduling
chrt -f 80 ./rt-application

# View current scheduling policy
chrt -p $(pgrep myapp)

# SCHED_DEADLINE (requires root) — 10ms task every 100ms
chrt -d --sched-runtime 10000000 --sched-deadline 10000000 \
    --sched-period 100000000 -p 0 $(pgrep myapp)`} />

        <Callout type="warning" title="RT Process Can Lock Up System">
          A SCHED_FIFO process at priority 99 that runs a busy-loop will <strong>lock out all other processes</strong>.
          Always set <code>RLIMIT_RTTIME</code> or use cgroups to limit RT process runtime.
        </Callout>
      </div>

      {/* tuned */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">tuned — Profile-Based System Tuning</h2>
        <p className="text-sm text-slate-400 mb-3">
          <code className="text-cyan-400">tuned</code> is a daemon that dynamically adjusts system settings based on
          profiles. A profile is a directory containing an <code className="text-cyan-400">tuned.conf</code> file that
          declares what sysctl, disk, CPU, and other settings to apply. Profiles can extend other profiles.
        </p>

        <div className="grid sm:grid-cols-3 gap-2 mb-4">
          {[
            { name: 'throughput-performance', desc: 'Max throughput: disables power saving, tuned for server workloads. Default for RHEL servers.' },
            { name: 'latency-performance', desc: 'Minimal latency: disables C-states, power saving; sets CPU to performance governor.' },
            { name: 'network-throughput', desc: 'Optimizes kernel buffers and IRQ coalescing for maximum network throughput.' },
            { name: 'network-latency', desc: 'Low network latency: disables TCP options that add latency (TSO, GRO).' },
            { name: 'powersave', desc: 'Maximum power savings: enables deep C-states, reduces frequency.' },
            { name: 'balanced', desc: 'Balanced power and performance. Default for desktops.' },
            { name: 'virtual-guest', desc: 'Optimized for running inside a virtual machine.' },
            { name: 'virtual-host', desc: 'Optimized for a system hosting VMs (hypervisor).' },
            { name: 'hpc-compute', desc: 'High Performance Computing: huge pages, NUMA, CPU performance.' },
            { name: 'desktop', desc: 'Improved responsiveness for desktop workloads.' },
            { name: 'realtime', desc: 'Hard real-time: disables dynamic ticking, isolates CPUs, sets RT scheduling.' },
            { name: 'oracle', desc: 'Optimized for Oracle Database workloads (huge pages, shmem).' },
          ].map(({ name, desc }) => (
            <div key={name} className="bg-slate-900 rounded p-2.5 border border-slate-800">
              <div className="font-mono text-orange-400 text-xs font-semibold">{name}</div>
              <div className="text-slate-400 text-xs mt-1 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>

        <CodeBlock language="bash" code={`# Show available profiles
tuned-adm list

# Show currently active profile
tuned-adm active

# Apply a profile (takes effect immediately)
tuned-adm profile throughput-performance

# Apply multiple profiles (they merge)
tuned-adm profile throughput-performance network-latency

# Get a recommendation for this system
tuned-adm recommend

# Check if tuned is running
systemctl status tuned

# Verify what settings were applied
tuned-adm profile_info throughput-performance`} />

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-slate-200 mb-2">Creating Custom tuned Profiles</h3>
          <CodeBlock language="bash" filename="/etc/tuned/myprofile/tuned.conf" code={`[main]
summary=My Custom Performance Profile
# Inherit all settings from throughput-performance
include=throughput-performance

[cpu]
# Set CPU scaling governor
governor=performance
# Disable energy/performance bias
energy_perf_bias=performance

[vm]
# Enable transparent huge pages
transparent_hugepages=always

[sysctl]
# Custom sysctl overrides
vm.swappiness=10
vm.dirty_ratio=10
net.core.rmem_max=134217728
net.core.wmem_max=134217728

[disk]
# Set elevator for all block devices
elevator=mq-deadline`} />
          <CodeBlock language="bash" code={`# Apply custom profile (auto-persistent via tuned service)
tuned-adm profile myprofile`} />
          <div className="flex items-center gap-2 mt-1">
            <span className="persist-badge"><CheckCircle size={10} /> Persists across reboots</span>
            <span className="text-xs text-slate-500">tuned service restores active profile at boot</span>
          </div>
        </div>
      </div>

      {/* Control Groups */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Control Groups v2 (cgroups)</h2>
        <p className="text-sm text-slate-400 mb-3">
          Cgroups are a kernel mechanism to <strong className="text-slate-200">limit, account, and isolate</strong> resources
          (CPU, memory, I/O) for groups of processes. RHEL 9 uses <strong>cgroups v2</strong> with a unified hierarchy.
          Everything under systemd is already in cgroups — use <code className="text-cyan-400">systemd-cgls</code> to see the tree.
        </p>

        <TerminalWindow title="systemd-cgls — Cgroup Tree">
{`Control group /:
-.slice
├─user.slice
│ └─user-1000.slice
│   └─session-1.scope
│     ├─1234 sshd: guled [priv]
│     └─1235 -bash
├─system.slice
│ ├─nginx.service
│ │ ├─4567 nginx: master process
│ │ └─4568 nginx: worker process
│ ├─postgresql.service
│ │ └─7890 /usr/bin/postgres
│ └─tuned.service
│   └─1111 /usr/sbin/tuned
└─init.scope
  └─1 /usr/lib/systemd/systemd`}
        </TerminalWindow>

        <CodeBlock language="bash" code={`# View cgroup hierarchy
systemd-cgls

# Show cgroup resource usage (CPU, memory, I/O per service)
systemd-cgtop

# Create a cgroup slice (persistent via systemd .slice unit)
# /etc/systemd/system/batch.slice

# Manually interact with cgroup v2 via filesystem
ls /sys/fs/cgroup/

# Create a cgroup
mkdir /sys/fs/cgroup/mygroup

# Enable controllers in parent first
echo "+cpu +memory +io" > /sys/fs/cgroup/cgroup.subtree_control

# Limit CPU (100000 = 100ms, period 1s — i.e., 10% of 1 CPU)
echo "100000 1000000" > /sys/fs/cgroup/mygroup/cpu.max

# Limit memory to 512MB
echo $((512 * 1024 * 1024)) > /sys/fs/cgroup/mygroup/memory.max

# Add a process to the cgroup
echo $PID > /sys/fs/cgroup/mygroup/cgroup.procs`} />
      </div>

      {/* systemd resource constraints */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">systemd Service Resource Constraints</h2>
        <p className="text-sm text-slate-400 mb-3">
          The cleanest way to apply cgroup limits is via systemd unit properties. systemd translates these
          into cgroup v2 settings automatically.
        </p>

        <CodeBlock language="bash" filename="/etc/systemd/system/myapp.service" code={`[Unit]
Description=My Performance-Critical Application

[Service]
ExecStart=/usr/bin/myapp
User=myuser

# CPU limits
CPUQuota=200%          # Use up to 2 full CPUs (200% of 1 CPU)
CPUWeight=100          # Relative weight vs other services (default=100)
CPUAffinity=0-3        # Pin to CPUs 0-3

# Memory limits
MemoryMax=2G           # Hard limit - process killed if exceeded
MemoryHigh=1.5G        # Soft limit - throttled, not killed
MemorySwapMax=0        # Disable swap for this service

# I/O limits
IOWeight=100           # I/O scheduling weight (1-10000)
IOReadBandwidthMax=/dev/sda 100M   # Max read bandwidth
IOWriteBandwidthMax=/dev/sda 50M   # Max write bandwidth

# File descriptor limit
LimitNOFILE=65536

# Nice value
Nice=-5

# Task (thread) limit
TasksMax=128

[Install]
WantedBy=multi-user.target`} />

        <CodeBlock language="bash" code={`# Reload and start
systemctl daemon-reload
systemctl enable --now myapp

# Override settings without editing the unit file (use drop-in)
systemctl edit myapp
# This creates /etc/systemd/system/myapp.service.d/override.conf

# Verify cgroup limits are applied
systemctl show myapp | grep -E 'Memory|CPU|IO'
cat /sys/fs/cgroup/system.slice/myapp.service/cpu.max
cat /sys/fs/cgroup/system.slice/myapp.service/memory.max`} />

        <div className="flex items-center gap-2 mt-2">
          <span className="persist-badge"><CheckCircle size={10} /> Persists across reboots</span>
          <span className="text-xs text-slate-500">systemd unit files are automatically applied at service start</span>
        </div>
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">Exam Key Takeaways</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li>• <code className="text-cyan-400">renice -n 5 -p PID</code> adjusts CPU priority; <code className="text-cyan-400">ionice -c 3 -p PID</code> adjusts I/O priority.</li>
          <li>• <code className="text-cyan-400">chrt -f -p 50 PID</code> sets SCHED_FIFO real-time scheduling (requires root).</li>
          <li>• <code className="text-cyan-400">tuned-adm profile throughput-performance</code> is <strong className="text-white">persistent</strong> — tuned restores at boot.</li>
          <li>• <code className="text-cyan-400">tuned-adm recommend</code> suggests the best profile for your hardware.</li>
          <li>• Custom profiles in <code className="text-cyan-400">/etc/tuned/&lt;name&gt;/tuned.conf</code> can include (extend) existing profiles.</li>
          <li>• systemd service <code className="text-cyan-400">CPUQuota</code>, <code className="text-cyan-400">MemoryMax</code>, <code className="text-cyan-400">IOWeight</code> set persistent cgroup limits.</li>
          <li>• Use <code className="text-cyan-400">systemctl edit &lt;service&gt;</code> to create persistent drop-in overrides without modifying originals.</li>
        </ul>
      </div>
    </div>
  )
}
