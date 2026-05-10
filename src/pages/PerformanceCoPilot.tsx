import { BarChart2, BookOpen } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

function PCPArchDiagram() {
  const layers = [
    { label: 'PCP Tools (pmstat, pmrep, pmatop, Grafana)', color: '#8b5cf6', items: ['pmstat', 'pmrep', 'pmatop', 'pmchart', 'Grafana/PCP'] },
    { label: 'PMAPI — Performance Metrics API', color: '#06b6d4', items: ['libpcp', 'pmlookup', 'pmfetch', 'pmstore'] },
    { label: 'pmcd — Performance Metrics Collection Daemon', color: '#10b981', items: ['TCP :44321', 'Agent multiplexer', 'PMNS resolver'] },
    { label: 'PMDAs — Performance Metrics Domain Agents', color: '#f59e0b', items: ['linux PMDA', 'proc PMDA', 'xfs PMDA', 'Custom PMDAs'] },
    { label: 'Kernel / Hardware', color: '#6b7280', items: ['/proc', '/sys', 'hardware counters', 'perf events'] },
  ]
  return (
    <div className="space-y-1 my-4">
      {layers.map((layer, i) => (
        <div key={i} className="rounded-lg border p-3 flex items-center gap-3"
          style={{ borderColor: layer.color + '30', background: layer.color + '08' }}>
          <div className="font-medium text-sm" style={{ color: layer.color }}>{layer.label}</div>
          <div className="ml-auto hidden sm:flex gap-1.5 flex-wrap justify-end">
            {layer.items.map(item => (
              <span key={item} className="text-xs font-mono px-1.5 py-0.5 rounded border"
                style={{ color: layer.color, borderColor: layer.color + '30', background: layer.color + '10' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function PerformanceCoPilot() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
            <BarChart2 size={20} className="text-violet-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Performance Co-Pilot (PCP)</h1>
            <p className="text-slate-400 text-sm">pmcd · pmlogger · pmstat · pmrep · pmatop · custom metrics</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          PCP is Red Hat's enterprise performance monitoring framework. Unlike ad-hoc tools, PCP provides a
          <strong className="text-slate-200"> unified namespace</strong> for thousands of metrics, a persistent logging
          infrastructure, and a query API that works the same way live or on archived data.
        </p>
      </div>

      {/* Architecture */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-1">PCP Architecture</h2>
        <p className="text-sm text-slate-400 mb-2">PCP separates collection, storage, and visualization into distinct components.</p>
        <PCPArchDiagram />
        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          {[
            { name: 'pmcd', port: ':44321', desc: 'Central broker daemon. All tools connect here. Multiplexes requests to the right PMDA.' },
            { name: 'pmlogger', port: 'Logging daemon', desc: 'Records metric values to PCP archive files. Replays are indistinguishable from live data.' },
            { name: 'pmie', port: 'Inference Engine', desc: 'Rule-based alerting engine. Evaluates metric expressions and triggers actions.' },
          ].map(({ name, port, desc }) => (
            <div key={name} className="bg-slate-900 rounded-lg p-3 border border-slate-800">
              <div className="font-mono text-violet-400 font-semibold text-sm">{name}</div>
              <div className="text-xs text-slate-500 mb-1">{port}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Installation */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-3">Installation & Quick Start</h2>
        <CodeBlock language="bash" code={`# Install core PCP and tools
dnf install pcp pcp-system-tools pcp-zeroconf -y

# pcp-zeroconf auto-configures pmlogger for common metrics
# Start the collection daemon
systemctl enable --now pmcd pmlogger

# Verify PCP is running
pcp           # shows version and enabled PMDAs
pminfo        # list ALL available metrics
pminfo -d kernel.all.load  # describe a specific metric

# Install additional PMDAs (e.g., for containers, databases)
dnf install pcp-pmda-podman pcp-pmda-postgresql`} />
        <Callout type="exam" title="pcp-zeroconf">
          Installing <code>pcp-zeroconf</code> and enabling <code>pmcd</code> + <code>pmlogger</code> is all
          you need for basic PCP monitoring. The exam may ask you to configure PCP — this three-step process covers it.
        </Callout>
      </div>

      {/* PMNS */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Performance Metrics Name Space (PMNS)</h2>
        <p className="text-sm text-slate-400 mb-3">
          PCP organizes metrics in a hierarchical namespace similar to DNS. Every metric has a unique dotted name.
        </p>
        <TerminalWindow title="pminfo — Explore the PMNS">
{`# List metrics in the kernel.cpu domain
$ pminfo kernel.cpu
kernel.cpu.user
kernel.cpu.sys
kernel.cpu.idle
kernel.cpu.wait.total
kernel.cpu.intr

# Get description and current value
$ pminfo -dfF kernel.cpu.user
kernel.cpu.user
    Data Type: 64-bit unsigned int  InDom: 60.0 0x3c000000
    Semantics: counter  Units: millisec
    inst [0 or "cpu0"] value 245678
    inst [1 or "cpu1"] value 198234

# Fetch current values
$ pmval -s 3 kernel.all.load
metric:    kernel.all.load
host:      localhost
semantics: instantaneous value
units:     none
samples:   3; interval: 1.00 sec
              1 min   5 min  15 min
              0.520   0.680   0.710`}
        </TerminalWindow>
      </div>

      {/* pmstat and pmrep */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-3">Key PCP Commands</h2>
        <CodeBlock language="bash" code={`# pmstat — like vmstat but via PCP
pmstat -s 5 -t 2sec

# pmrep — flexible reporter, CSV or column output
pmrep -s 10 -t 2s kernel.all.cpu.user disk.all.read_bytes
pmrep -o csv -s 100 -t 1s kernel.all.load > load.csv

# pmatop — like top but driven by PCP metrics
pmatop

# pmrep with a predefined config (from /etc/pcp/pmrep/)
pmrep :sar-u           # like 'sar -u'
pmrep :sar-d           # like 'sar -d'
pmrep :vmstat          # like 'vmstat'

# Query historical data from an archive
pmval -a /var/log/pcp/pmlogger/hostname/20260510 kernel.all.load

# Chart with pmchart (GUI)
pmchart -a /var/log/pcp/pmlogger/hostname/20260510`} />
      </div>

      {/* Custom metrics */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Creating Custom PMDAs</h2>
        <p className="text-sm text-slate-400 mb-3">
          You can expose any metric to PCP using a custom PMDA (Performance Metrics Domain Agent).
          PCP ships a simple shell PMDA for quick custom metrics.
        </p>
        <CodeBlock language="bash" code={`# Use the simple PMDA for shell-based custom metrics
# Metrics defined in /var/lib/pcp/pmdas/simple/simple.conf

# Example: Create a PMDA that exposes a custom counter
cd /var/lib/pcp/pmdas/simple
./Install

# Or use mmv (Memory Mapped Values) for application-level metrics
# Applications write to /var/tmp/mmv/<name>
# PCP reads them instantly via mmap — zero overhead`} />
      </div>

      {/* pmlogger */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">pmlogger — Persistent Recording</h2>
        <CodeBlock language="bash" code={`# pmlogger config is in /etc/pcp/pmlogger/control
# Default archive location: /var/log/pcp/pmlogger/<hostname>/

# Manually record specific metrics to a file
pmlogger -c /dev/stdin -l /tmp/mylog.log /tmp/myarchive <<EOF
log mandatory on every 2 seconds {
    kernel.all.cpu.user
    kernel.all.cpu.sys
    mem.util.used
    disk.all.read_bytes
    disk.all.write_bytes
}
EOF

# Check archive contents
pmdumplog -l /tmp/myarchive
pmdumplog -a /tmp/myarchive | head -50

# Replay archive through any PCP tool
pmval -a /tmp/myarchive kernel.all.cpu.user`} />
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">Exam Key Takeaways</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li>• Install <code className="text-cyan-400">pcp pcp-system-tools pcp-zeroconf</code> then enable <code className="text-cyan-400">pmcd</code> and <code className="text-cyan-400">pmlogger</code>.</li>
          <li>• PCP metrics use a dotted namespace: <code className="text-cyan-400">kernel.all.load</code>, <code className="text-cyan-400">disk.all.read_bytes</code>.</li>
          <li>• <code className="text-cyan-400">pmstat</code> is PCP's vmstat equivalent; <code className="text-cyan-400">pmrep</code> offers flexible output.</li>
          <li>• Archives are stored in <code className="text-cyan-400">/var/log/pcp/pmlogger/&lt;hostname&gt;/</code> and can be replayed with any PCP tool.</li>
          <li>• <code className="text-cyan-400">pminfo -d &lt;metric&gt;</code> describes a metric including units, semantics, and instances.</li>
        </ul>
      </div>
    </div>
  )
}
