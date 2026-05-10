import { Server, BookOpen } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

export default function HardwareProfiling() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
            <Server size={20} className="text-sky-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Hardware Profiling</h1>
            <p className="text-slate-400 text-sm">dmesg · dmidecode · sosreport · lscpu · lspci</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Before tuning, you must understand what hardware you're running on. A NUMA-unaware tuning on a 4-socket server
          can make performance <em>worse</em>. These tools decode BIOS tables and kernel logs to reveal your hardware topology.
        </p>
      </div>

      {/* dmesg */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">dmesg — Kernel Ring Buffer</h2>
        <p className="text-sm text-slate-400 mb-3">
          The kernel maintains a circular ring buffer in memory where it logs messages from boot time onwards.
          Each message has a <strong className="text-slate-200">facility</strong> (subsystem) and
          <strong className="text-slate-200"> level</strong> (severity). The buffer has a fixed size
          (default 512KB, configurable via <code className="text-cyan-400">CONFIG_LOG_BUF_SHIFT</code>).
          When full, old messages are overwritten.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase mb-2">Log Levels</div>
            <div className="space-y-1 text-xs">
              {[
                { level: '0 EMERG', color: 'text-rose-400', desc: 'System is unusable' },
                { level: '1 ALERT', color: 'text-rose-400', desc: 'Action must be taken immediately' },
                { level: '2 CRIT', color: 'text-orange-400', desc: 'Critical conditions' },
                { level: '3 ERR', color: 'text-orange-400', desc: 'Error conditions' },
                { level: '4 WARNING', color: 'text-amber-400', desc: 'Warning conditions' },
                { level: '5 NOTICE', color: 'text-cyan-400', desc: 'Normal but significant' },
                { level: '6 INFO', color: 'text-slate-300', desc: 'Informational messages' },
                { level: '7 DEBUG', color: 'text-slate-500', desc: 'Debug-level messages' },
              ].map(({ level, color, desc }) => (
                <div key={level} className="flex gap-2">
                  <span className={`font-mono ${color} w-24 flex-shrink-0`}>{level}</span>
                  <span className="text-slate-400">{desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase mb-2">Key Facilities</div>
            <div className="space-y-1 text-xs font-mono text-slate-400">
              <div><span className="text-cyan-400">kern</span> — kernel messages</div>
              <div><span className="text-cyan-400">user</span> — user-level messages</div>
              <div><span className="text-cyan-400">daemon</span> — system daemon messages</div>
              <div><span className="text-cyan-400">syslog</span> — messages from syslogd</div>
            </div>
          </div>
        </div>

        <CodeBlock language="bash" code={`# Human-readable timestamps
dmesg -T

# Follow in real-time (like tail -f)
dmesg -w

# Filter by log level (show errors and above)
dmesg -l err,crit,alert,emerg

# Filter by facility
dmesg -f kern

# Filter errors with timestamps
dmesg -T -l err,warn

# Search for hardware-related messages
dmesg | grep -E 'MCE|ECC|EDAC|Hardware Error'

# Find memory errors
dmesg | grep -i 'memory\|DIMM\|ECC'

# Kernel messages since last boot
journalctl -k -b

# See why the system rebooted
journalctl -k -b -1 | tail -50  # last boot's kernel messages`} />

        <TerminalWindow title="dmesg -T — Hardware Boot Messages">
{`[May10 08:00:01] BIOS-provided physical RAM map:
[  +0.000000] ACPI: IRQ0 used by override.
[  +0.003241] NUMA: Node 0 [mem 0x0000000000-0x3fffffffff] + [mem 0x100000000-0x3fffffffff] -> [mem 0x0000000000-0x3fffffffff]
[  +0.004123] NODE_DATA(0) allocated [mem 0x3ffd5000-0x3fffffff]
[  +0.021456] ACPI: PCI Interrupt Link [LNKA] (IRQs 3 4 5 6 7 9 10 *11)
[  +0.034512] nvme nvme0: pci function 0000:03:00.0
[  +0.045678] nvme nvme0: 8/0/0 default/read/poll queues
[  +0.056789] EXT4-fs (sda1): mounted filesystem with ordered data mode`}
        </TerminalWindow>

        <Callout type="info" title="MCE — Machine Check Exceptions">
          MCE errors in dmesg indicate hardware faults (CPU, memory, PCI). Commands like
          <code> mcelog</code> or <code>rasdaemon</code> decode them. Seeing MCE in dmesg is
          a serious hardware health warning — it's not a software bug.
        </Callout>
      </div>

      {/* dmidecode */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">dmidecode — SMBIOS/DMI Table Decoder</h2>
        <p className="text-sm text-slate-400 mb-3">
          The BIOS stores hardware information in <strong className="text-slate-200">SMBIOS</strong> (System Management BIOS)
          tables at a fixed physical address. <code className="text-cyan-400">dmidecode</code> reads
          <code className="text-cyan-400 ml-1">/sys/firmware/dmi/tables/</code> (kernel exposes SMBIOS tables here)
          and parses the binary structures. Each entry has a numeric <strong>type</strong>:
        </p>

        <div className="grid sm:grid-cols-3 gap-2 mb-4">
          {[
            { type: 'Type 0', name: 'BIOS', desc: 'Vendor, version, release date' },
            { type: 'Type 1', name: 'System', desc: 'Manufacturer, model, UUID, serial' },
            { type: 'Type 4', name: 'Processor', desc: 'CPU socket, family, speed, cores' },
            { type: 'Type 7', name: 'Cache', desc: 'L1/L2/L3 cache sizes and types' },
            { type: 'Type 17', name: 'Memory Device', desc: 'Each DIMM slot: size, speed, type' },
            { type: 'Type 19', name: 'Memory Array', desc: 'Physical memory array details' },
          ].map(({ type, name, desc }) => (
            <div key={type} className="bg-slate-900 rounded p-2.5 border border-slate-800">
              <div className="font-mono text-sky-400 text-xs">{type}</div>
              <div className="text-white text-xs font-medium">{name}</div>
              <div className="text-slate-500 text-xs">{desc}</div>
            </div>
          ))}
        </div>

        <CodeBlock language="bash" code={`# Show everything (verbose)
dmidecode

# CPU information
dmidecode -t processor

# Memory modules — see each DIMM slot
dmidecode -t memory

# BIOS version
dmidecode -t bios | grep -E 'Version|Release'

# System serial and model (useful for hardware identification)
dmidecode -t system | grep -E 'Manufacturer|Product Name|Serial'

# Check maximum memory capacity and current DIMMs
dmidecode -t 16,17 | grep -E 'Maximum Capacity|Size|Speed|Type'

# Quick one-liner for memory layout
dmidecode -t 17 | awk '/Memory Device/{slot++} /Size:/{print "Slot " slot ": " $0}'`} />

        <TerminalWindow title="dmidecode -t 17 — Sample DIMM Output">
{`Handle 0x0020, DMI type 17, 84 bytes
Memory Device
        Array Handle: 0x0010
        Error Information Handle: 0x0011
        Total Width: 72 bits
        Data Width: 64 bits
        Size: 16 GB
        Form Factor: DIMM
        Set: None
        Locator: DIMM_A1
        Bank Locator: NODE 0
        Type: DDR4
        Type Detail: Synchronous Registered (Buffered)
        Speed: 3200 MT/s
        Manufacturer: Samsung
        Serial Number: [REDACTED]
        Part Number: M393A2K43DB3-CWE
        Rank: 2
        Configured Memory Speed: 3200 MT/s
        Minimum Voltage: 1.14 V`}
        </TerminalWindow>
      </div>

      {/* sosreport */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">sosreport — Support Data Collection</h2>
        <p className="text-sm text-slate-400 mb-3">
          <code className="text-cyan-400">sosreport</code> (now <code className="text-cyan-400">sos report</code> in RHEL 9)
          collects a comprehensive snapshot of system state including configuration files, command outputs, kernel
          parameters, logs, and hardware information. It's used when opening Red Hat support cases.
        </p>

        <CodeBlock language="bash" code={`# Generate a full sosreport (RHEL 9)
sos report

# Quick report with fewer plugins
sos report --batch --all-logs

# Only collect specific plugins
sos report -o hardware,kernel,memory,networking

# List available plugins
sos report -l

# Collect without sensitive data (customer name, hostname redacted)
sos report --clean

# Output to specific directory
sos report -o /tmp/sosdata/`} />

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 mt-3">
          <div className="text-xs font-semibold text-slate-400 uppercase mb-2">What sosreport Collects</div>
          <div className="grid sm:grid-cols-3 gap-2 text-xs text-slate-400">
            {[
              'All /proc and /sys relevant files',
              'Network configuration (ip, ss, netstat)',
              'Installed packages (rpm -qa)',
              'systemd journal logs',
              'SELinux status and policy',
              'Storage layout (lsblk, fdisk, pvs)',
              'Memory details (dmidecode, free)',
              'CPU info (lscpu, numactl)',
              'Tuned profile and sysctl values',
              'Performance data (sar archives)',
              'dmesg output',
              'Hardware error logs (mcelog)',
            ].map(item => (
              <div key={item} className="flex items-start gap-1">
                <span className="text-sky-500 mt-0.5">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* lscpu and NUMA */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">lscpu — CPU Topology</h2>
        <CodeBlock language="bash" code={`# Full CPU info including NUMA topology
lscpu

# Key NUMA fields to look for:
# NUMA node(s): 2            <- number of NUMA nodes
# NUMA node0 CPU(s): 0-11   <- CPUs on node 0
# NUMA node1 CPU(s): 12-23  <- CPUs on node 1

# Machine-parseable output
lscpu -J  # JSON
lscpu -p  # CSV per-CPU

# Show CPU vulnerability mitigations (Spectre/Meltdown impact on performance)
lscpu | grep Vulnerability

# Display cache hierarchy
lscpu --caches`} />

        <TerminalWindow title="lscpu — NUMA Topology Example">
{`Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPU(s):              48
On-line CPU(s) list: 0-47
Thread(s) per core:  2
Core(s) per socket:  12
Socket(s):           2
NUMA node(s):        2
Vendor ID:           GenuineIntel
Model name:          Intel Xeon Gold 6336Y
CPU MHz:             3600.000
CPU max MHz:         4200.0000
CPU min MHz:         800.0000
L1d cache:           32K
L1i cache:           32K
L2 cache:            1024K
L3 cache:            36608K
NUMA node0 CPU(s):   0-11,24-35
NUMA node1 CPU(s):   12-23,36-47`}
        </TerminalWindow>

        <Callout type="warning" title="NUMA Topology Matters for Tuning">
          On multi-socket servers, memory access to a remote NUMA node is 2-4x slower than local.
          Always check <code>lscpu</code> and <code>numactl --hardware</code> before tuning.
          CPU pinning without NUMA awareness can cause performance regressions.
        </Callout>
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">Exam Key Takeaways</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li>• <code className="text-cyan-400">dmesg -T -l err,warn</code> — check for hardware errors at boot or runtime.</li>
          <li>• <code className="text-cyan-400">dmidecode -t memory</code> — see DIMM slots, speed, and type for memory planning.</li>
          <li>• <code className="text-cyan-400">dmidecode -t processor</code> — verify CPU features and socket count for NUMA awareness.</li>
          <li>• <code className="text-cyan-400">sos report</code> (RHEL 9) — comprehensive system snapshot used for Red Hat support.</li>
          <li>• <code className="text-cyan-400">lscpu</code> — reveals NUMA topology; look for NUMA node lines to understand memory layout.</li>
          <li>• MCE errors in dmesg indicate actual hardware failures — escalate, don't ignore.</li>
        </ul>
      </div>
    </div>
  )
}
