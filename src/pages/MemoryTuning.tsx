import { Database, BookOpen, CheckCircle } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

function VirtualMemoryDiagram() {
  const zones = [
    { name: 'Zone DMA', range: '0 – 16 MB', color: '#f59e0b', desc: 'For legacy 24-bit DMA devices (ISA). Very small on modern systems.' },
    { name: 'Zone DMA32', range: '16 MB – 4 GB', color: '#06b6d4', desc: 'For 32-bit DMA devices (most PCI). All allocations < 4GB.' },
    { name: 'Zone Normal', range: '4 GB+', color: '#8b5cf6', desc: 'The main zone for kernel allocations on 64-bit systems.' },
    { name: 'Zone Movable', range: 'Overlay', color: '#10b981', desc: 'Pages that can be migrated (for memory hotplug and huge pages).' },
  ]
  return (
    <div className="space-y-1.5 my-4">
      {zones.map(z => (
        <div key={z.name} className="flex items-center gap-3 rounded-lg border p-3"
          style={{ borderColor: z.color + '30', background: z.color + '08' }}>
          <div className="w-28 flex-shrink-0">
            <div className="font-mono text-xs font-semibold" style={{ color: z.color }}>{z.name}</div>
            <div className="text-slate-600 text-xs">{z.range}</div>
          </div>
          <div className="text-slate-400 text-xs">{z.desc}</div>
        </div>
      ))}
    </div>
  )
}

export default function MemoryTuning() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Database size={20} className="text-emerald-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Memory Tuning</h1>
            <p className="text-slate-400 text-sm">huge pages · overcommit · swap · NUMA · SYSV shared memory</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Memory is the most complex Linux subsystem to tune. Poor memory configuration causes performance
          degradation that looks like a CPU or I/O problem. Master virtual memory internals and you'll
          solve issues others can't diagnose.
        </p>
      </div>

      {/* Virtual Memory Architecture */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Linux Virtual Memory Architecture</h2>
        <p className="text-sm text-slate-400 mb-3">
          Every process has its own <strong className="text-slate-200">virtual address space</strong> — a map of
          virtual addresses to physical memory pages. The CPU's Memory Management Unit (MMU) translates virtual
          to physical addresses using <strong className="text-slate-200">page tables</strong>. The
          <strong className="text-slate-200"> Translation Lookaside Buffer (TLB)</strong> caches recent translations
          for speed. A TLB miss requires a page table walk — expensive!
        </p>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4">
          <div className="text-xs font-semibold text-slate-400 uppercase mb-3">Virtual → Physical Translation</div>
          <div className="flex items-center gap-2 flex-wrap text-xs">
            {['Virtual Address', '→', 'TLB Lookup', '→', 'TLB Hit?'].map((item, i) => (
              <span key={i} className={item === '→' ? 'text-slate-600' :
                'bg-slate-800 border border-slate-700 rounded px-2 py-1 ' +
                (item === 'TLB Hit?' ? 'text-emerald-400' : 'text-slate-300')}>
                {item}
              </span>
            ))}
          </div>
          <div className="ml-8 mt-2 flex gap-6 text-xs">
            <div className="flex items-center gap-1">
              <span className="text-emerald-400">✓ Yes:</span>
              <span className="text-slate-400">Physical address returned in ~1ns</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-rose-400">✗ No:</span>
              <span className="text-slate-400">Page table walk (~50-100ns) → update TLB → return physical address</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4">
          <div className="text-xs font-semibold text-slate-400 uppercase mb-2">Page Sizes and TLB Impact</div>
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            {[
              { size: '4 KB (default)', entries: '~1024 entries cover 4 MB', color: 'text-slate-400', impact: 'TLB exhausted quickly for large allocations → frequent misses' },
              { size: '2 MB (huge pages)', entries: '~1024 entries cover 2 GB', color: 'text-emerald-400', impact: '512x fewer TLB entries needed → dramatically fewer misses' },
              { size: '1 GB (gigantic pages)', entries: '~1024 entries cover 1 TB', color: 'text-cyan-400', impact: 'Ideal for databases/VMs with large working sets' },
            ].map(({ size, entries, color, impact }) => (
              <div key={size} className="bg-slate-800 rounded p-2.5">
                <div className={`font-mono font-bold ${color}`}>{size}</div>
                <div className="text-slate-400 mt-1">{entries}</div>
                <div className="text-slate-500 mt-1 italic">{impact}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <div className="text-sm font-semibold text-slate-300 mb-1">Physical Memory Zones</div>
          <VirtualMemoryDiagram />
        </div>
      </div>

      {/* Huge Pages */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Huge Pages — Reducing TLB Pressure</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
            <div className="text-emerald-400 font-semibold text-sm mb-2">Static HugeTLB Pages</div>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Pre-allocated at boot, reserved exclusively</li>
              <li>• Applications must explicitly request them</li>
              <li>• Use <code className="text-cyan-400">mmap(MAP_HUGETLB)</code> or SYSV shmget</li>
              <li>• Cannot be used for anything else if not claimed</li>
              <li>• 2MB or 1GB page size available</li>
              <li>• <strong className="text-white">Best for databases</strong> (PostgreSQL, Oracle)</li>
            </ul>
          </div>
          <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
            <div className="text-cyan-400 font-semibold text-sm mb-2">Transparent Huge Pages (THP)</div>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Kernel automatically promotes 4KB → 2MB pages</li>
              <li>• Application doesn't need code changes</li>
              <li>• Can cause latency spikes during promotion/defrag</li>
              <li>• Three modes: always, madvise, never</li>
              <li>• <strong className="text-white">madvise</strong> = only for applications that opt in</li>
              <li>• <strong className="text-rose-400">Disable for Redis, MongoDB</strong> (causes latency jitter)</li>
            </ul>
          </div>
        </div>

        <CodeBlock language="bash" code={`# ── STATIC HUGE PAGES ──────────────────────────────────
# Check current huge page status
grep -i huge /proc/meminfo

# Allocate 512 x 2MB = 1GB of huge pages at runtime
echo 512 > /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages
sysctl vm.nr_hugepages=512

# Mount hugetlbfs (for mmap access)
mkdir -p /mnt/huge
mount -t hugetlbfs nodev /mnt/huge

# Check allocation success
cat /sys/kernel/mm/hugepages/hugepages-2048kB/free_hugepages`} />

        <CodeBlock language="bash" filename="/etc/sysctl.d/99-hugepages.conf" code={`# Allocate huge pages persistently
# Note: Allocate at boot — later allocation may fail if memory is fragmented
vm.nr_hugepages = 512

# For 1GB pages (if CPU supports PDPE1GB):
vm.nr_hugepages_mempolicy = 512`} />

        <div className="flex items-center gap-2 mt-1 mb-4">
          <span className="persist-badge"><CheckCircle size={10} /> Persists across reboots</span>
          <span className="text-xs text-slate-500">via /etc/sysctl.d/ — allocate early in boot for best results</span>
        </div>

        <CodeBlock language="bash" code={`# ── TRANSPARENT HUGE PAGES ─────────────────────────────
# Check THP status
cat /sys/kernel/mm/transparent_hugepage/enabled
# Output: [always] madvise never  <- current mode in brackets

# Set to madvise (safest for production)
echo madvise > /sys/kernel/mm/transparent_hugepage/enabled

# Control defrag aggressiveness (madvise = only for madvise regions)
echo madvise > /sys/kernel/mm/transparent_hugepage/defrag

# Disable completely for Redis/MongoDB
echo never > /sys/kernel/mm/transparent_hugepage/enabled`} />

        <CodeBlock language="bash" filename="/etc/tuned/myprofile/tuned.conf" code={`[vm]
transparent_hugepages=madvise`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists via tuned profile</span>
        </div>
      </div>

      {/* Memory Overcommit */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Memory Overcommit</h2>
        <p className="text-sm text-slate-400 mb-3">
          When a process calls <code className="text-cyan-400">malloc()</code>, the kernel doesn't immediately
          allocate physical RAM — it just reserves virtual address space. Physical pages are allocated on first
          access (demand paging). Overcommit controls how much virtual memory the kernel is willing to promise.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="metric-table">
            <thead><tr><th>Mode</th><th>Value</th><th>Behavior</th><th>Use Case</th></tr></thead>
            <tbody>
              {[
                { mode: 'Heuristic', val: '0', behavior: 'Allow overcommit up to (RAM + Swap) with heuristics. malloc() can succeed even if not enough physical RAM.', use: 'Default — good for most workloads' },
                { mode: 'Always', val: '1', behavior: 'Always allow overcommit. malloc() never fails. If OOM happens, OOM killer acts.', use: 'Scientific computing, Redis (fork-based saves)' },
                { mode: 'Never', val: '2', behavior: 'Limit to (RAM × overcommit_ratio/100) + Swap. malloc() returns NULL if exceeded.', use: 'Safety-critical — predictable memory usage required' },
              ].map(({ mode, val, behavior, use }) => (
                <tr key={val}>
                  <td className="text-emerald-400 font-semibold text-sm">{mode}</td>
                  <td className="font-mono text-cyan-400 text-center">{val}</td>
                  <td className="text-slate-300 text-sm">{behavior}</td>
                  <td className="text-slate-400 text-xs italic">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock language="bash" code={`# Check current mode
sysctl vm.overcommit_memory

# Set to 'never' mode with 80% ratio
sysctl -w vm.overcommit_memory=2
sysctl -w vm.overcommit_ratio=80

# Check CommitLimit and Committed_AS
grep -E 'CommitLimit|Committed_AS' /proc/meminfo
# CommitLimit = RAM * overcommit_ratio/100 + Swap
# Committed_AS = currently committed virtual memory

# Set to 'always allow' for Redis (prevents fork() memory issues)
sysctl -w vm.overcommit_memory=1`} />

        <CodeBlock language="bash" filename="/etc/sysctl.d/99-memory.conf" code={`vm.overcommit_memory = 2
vm.overcommit_ratio = 80`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists via /etc/sysctl.d/</span>
        </div>
      </div>

      {/* Swap */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Swap Behavior — Anonymous vs Cached Pages</h2>
        <p className="text-sm text-slate-400 mb-3">
          When memory is low, the kernel must reclaim pages. It can either:
          <span className="text-emerald-400 font-medium ml-1">drop page cache</span> (file-backed — can be re-read from disk) or
          <span className="text-amber-400 font-medium ml-1">swap anonymous pages</span> (heap, stack — must be written to swap).
          <code className="text-cyan-400 ml-1">vm.swappiness</code> controls this balance.
        </p>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4">
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            {[
              { range: '0', label: 'Never swap (RHEL 8)', color: 'text-emerald-400', desc: 'Strongly prefer dropping cache over swapping. OOM kill before swap.' },
              { range: '10–30', label: 'Server recommendation', color: 'text-cyan-400', desc: 'Retain anonymous pages (working set) as long as possible.' },
              { range: '60', label: 'Default', color: 'text-slate-300', desc: 'Balanced swap behavior — both file and anonymous pages eligible.' },
              { range: '100', label: 'Aggressive swap', color: 'text-amber-400', desc: 'Swap aggressively. Keeps file cache but swaps heap/stack.' },
              { range: '200', label: 'RHEL 9 max (zswap)', color: 'text-violet-400', desc: 'Prefer zswap over dropping cache. For systems with fast compressed swap.' },
            ].map(({ range, label, color, desc }) => (
              <div key={range} className="bg-slate-800 rounded p-2.5">
                <div className={`font-mono font-bold text-lg ${color}`}>{range}</div>
                <div className="text-white text-xs">{label}</div>
                <div className="text-slate-400 mt-1 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <CodeBlock language="bash" code={`# Current swappiness
sysctl vm.swappiness

# Set low swappiness for server (prefer anonymous pages in RAM)
sysctl -w vm.swappiness=10

# vfs_cache_pressure: tendency to reclaim inode/dentry cache
# Default 100 = balance inodes vs pages
# Lower = keep directory/file cache (good for file servers)
sysctl -w vm.vfs_cache_pressure=50

# Check swap usage
swapon --show
free -h
cat /proc/swaps

# Add swap space
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile

# Make swap permanent
echo '/swapfile none swap sw 0 0' >> /etc/fstab`} />

        <CodeBlock language="bash" filename="/etc/sysctl.d/99-swap.conf" code={`vm.swappiness = 10
vm.vfs_cache_pressure = 50`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists via /etc/sysctl.d/</span>
        </div>
      </div>

      {/* NUMA */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">NUMA — Non-Uniform Memory Access</h2>
        <p className="text-sm text-slate-400 mb-3">
          On multi-socket servers, each CPU has <strong className="text-slate-200">local RAM</strong> (fast, ~100ns) and
          <strong className="text-slate-200"> remote RAM</strong> (via QPI/UPI interconnect, ~200-300ns).
          The OS default is to allocate memory on the node where the requesting CPU runs. Without NUMA awareness,
          all processes might allocate from node 0 while running on node 1 — 2-3x memory latency penalty!
        </p>

        <CodeBlock language="bash" code={`# Show NUMA topology and memory per node
numactl --hardware

# Show per-node memory statistics
numastat

# Run process on specific NUMA node (CPU and memory local)
numactl --cpunodebind=0 --membind=0 ./myapp

# Run on node 1 CPUs, with memory from either node (default)
numactl --cpunodebind=1 ./myapp

# Interleave memory across all nodes (for bandwidth, not latency)
numactl --interleave=all ./myapp

# Bind to specific CPUs
numactl --physcpubind=0,1,2,3 --membind=0 ./myapp

# Check current NUMA policy
numactl --show

# Node distances (higher = slower)
cat /sys/devices/system/node/node0/distance`} />

        <TerminalWindow title="numactl --hardware — Sample Output">
{`available: 2 nodes (0-1)
node 0 cpus: 0 1 2 3 4 5 12 13 14 15 16 17
node 0 size: 32169 MB
node 0 free: 18234 MB
node 1 cpus: 6 7 8 9 10 11 18 19 20 21 22 23
node 1 size: 32226 MB
node 1 free: 21456 MB
node distances:
node   0   1
  0:  10  21
  1:  21  10`}
        </TerminalWindow>

        <Callout type="info" title="NUMA Distances">
          <code>node distances</code> shows the relative latency multiplier. <code>10</code> = local access.
          <code>21</code> means remote access is 2.1x slower. On 4-socket systems, distances can reach 40+
          for memory across 3 hops.
        </Callout>

        <CodeBlock language="bash" code={`# Auto NUMA balancing — kernel migrates pages to local node
sysctl kernel.numa_balancing   # 1 = enabled (default)

# Disable for latency-sensitive pinned workloads
sysctl -w kernel.numa_balancing=0

# Check NUMA memory allocation stats per process
numastat -p $(pgrep myapp)

# View huge pages per NUMA node
cat /sys/devices/system/node/node0/hugepages/hugepages-2048kB/nr_hugepages
cat /sys/devices/system/node/node1/hugepages/hugepages-2048kB/nr_hugepages`} />
      </div>

      {/* SYSV Shared Memory */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">SYSV Shared Memory Limits</h2>
        <p className="text-sm text-slate-400 mb-3">
          System V IPC provides shared memory, semaphores, and message queues. Databases (PostgreSQL, Oracle)
          use SYSV shared memory for their shared buffer pools. Default limits are too low for large databases.
        </p>

        <div className="overflow-x-auto mb-3">
          <table className="metric-table">
            <thead><tr><th>Parameter</th><th>Meaning</th><th>Default</th></tr></thead>
            <tbody>
              {[
                { param: 'kernel.shmmax', meaning: 'Maximum size of a single shared memory segment (bytes)', default: '4GB (usually)' },
                { param: 'kernel.shmall', meaning: 'Total pages of shared memory system-wide', default: '2097152 pages (8GB)' },
                { param: 'kernel.shmmni', meaning: 'Maximum number of shared memory segments', default: '4096' },
                { param: 'kernel.sem', meaning: 'Semaphore limits: SEMMSL SEMMNS SEMOPM SEMMNI', default: '32000 1024000000 500 32000' },
              ].map(({ param, meaning, default: def }) => (
                <tr key={param}>
                  <td className="font-mono text-emerald-400 text-xs">{param}</td>
                  <td className="text-slate-300 text-sm">{meaning}</td>
                  <td className="font-mono text-slate-400 text-xs">{def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock language="bash" code={`# View current limits
ipcs -l          # human-readable limits
sysctl kernel.shmmax kernel.shmall kernel.shmmni

# View current shared memory segments
ipcs -m          # segments
ipcs -s          # semaphores
ipcs -q          # message queues

# Remove a shared memory segment by shmid
ipcrm -m <shmid>

# Set limits for PostgreSQL (25% of RAM for shared_buffers)
# If RAM = 128GB, shared_buffers = 32GB
sysctl -w kernel.shmmax=34359738368   # 32GB
sysctl -w kernel.shmall=8388608       # 32GB / 4096 bytes per page`} />

        <CodeBlock language="bash" filename="/etc/sysctl.d/99-sysv-shm.conf" code={`# For a system with 128GB RAM, PostgreSQL shared_buffers = 32GB
kernel.shmmax = 34359738368
kernel.shmall = 8388608
kernel.shmmni = 4096`} />
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
          <li>• <code className="text-cyan-400">vm.nr_hugepages = 512</code> in sysctl.d allocates 512 × 2MB = 1GB of static huge pages persistently.</li>
          <li>• THP: <code className="text-cyan-400">echo madvise &gt; /sys/kernel/mm/transparent_hugepage/enabled</code> — persist via tuned profile.</li>
          <li>• <code className="text-cyan-400">vm.overcommit_memory</code>: 0=heuristic, 1=always, 2=never. Redis needs 1 (fork-safe). Oracle needs 2.</li>
          <li>• <code className="text-cyan-400">vm.swappiness = 10</code> is the standard server recommendation — keep working set in RAM.</li>
          <li>• <code className="text-cyan-400">numactl --cpunodebind=0 --membind=0</code> pins a process to NUMA node 0.</li>
          <li>• <code className="text-cyan-400">kernel.shmmax</code> = max single SYSV segment size; set to shared_buffers + some overhead.</li>
          <li>• <code className="text-cyan-400">ipcs -l</code> shows current SYSV limits; <code>ipcs -m</code> shows active shared memory segments.</li>
        </ul>
      </div>
    </div>
  )
}
