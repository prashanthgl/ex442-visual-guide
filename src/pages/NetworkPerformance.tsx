import { Network, BookOpen, CheckCircle } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import TerminalWindow from '../components/TerminalWindow'
import Callout from '../components/Callout'

function BDPCalculator() {
  const examples = [
    { bw: '1 Gbps', rtt: '10ms', bdp_mb: '1.25', buffers: '~2 MB', use: 'LAN, same datacenter' },
    { bw: '10 Gbps', rtt: '10ms', bdp_mb: '12.5', buffers: '~16 MB', use: 'Datacenter, high-speed LAN' },
    { bw: '10 Gbps', rtt: '50ms', bdp_mb: '62.5', buffers: '~64 MB', use: 'WAN link, cross-region' },
    { bw: '100 Gbps', rtt: '10ms', bdp_mb: '125', buffers: '~128 MB', use: 'HPC, InfiniBand-class' },
  ]
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden my-4">
      <div className="bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 uppercase">
        BDP = Bandwidth × RTT (pipe size in bytes)
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left px-4 py-2 text-slate-400">Bandwidth</th>
              <th className="text-left px-4 py-2 text-slate-400">RTT</th>
              <th className="text-left px-4 py-2 text-rose-400">BDP</th>
              <th className="text-left px-4 py-2 text-emerald-400">Buffer Needed</th>
              <th className="text-left px-4 py-2 text-slate-500 hidden sm:table-cell">Use Case</th>
            </tr>
          </thead>
          <tbody>
            {examples.map(({ bw, rtt, bdp_mb, buffers, use }) => (
              <tr key={bw + rtt} className="border-b border-slate-800/50">
                <td className="px-4 py-2 font-mono text-cyan-400">{bw}</td>
                <td className="px-4 py-2 font-mono text-slate-300">{rtt}</td>
                <td className="px-4 py-2 font-mono text-rose-400 font-semibold">{bdp_mb} MB</td>
                <td className="px-4 py-2 font-mono text-emerald-400">{buffers}</td>
                <td className="px-4 py-2 text-slate-500 hidden sm:table-cell">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2 text-xs text-slate-600">
        Formula: BDP (bytes) = Bandwidth (bits/s) ÷ 8 × RTT (seconds). Buffer size should be ≥ BDP.
      </div>
    </div>
  )
}

export default function NetworkPerformance() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
            <Network size={20} className="text-rose-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Network Performance</h1>
            <p className="text-slate-400 text-sm">BDP calculation · TCP buffers · UDP buffers · congestion control</p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          Network tuning is math-driven: you need to calculate the <strong className="text-white">Bandwidth-Delay Product</strong>
          before setting buffer sizes. Setting buffers too small leaves performance on the table;
          too large wastes RAM and can increase latency.
        </p>
      </div>

      {/* TCP Internals */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">TCP Internals: The Send/Receive Window</h2>
        <p className="text-sm text-slate-400 mb-3">
          TCP uses a <strong className="text-slate-200">sliding window protocol</strong>. The sender can have up to
          <em> window size bytes</em> in-flight (sent but not acknowledged). If the window is too small, the sender
          must stop and wait for ACKs — this creates <em>stop-and-wait bubbles</em> that waste bandwidth.
          The window must be ≥ BDP to keep the pipe full.
        </p>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4">
          <div className="text-xs font-semibold text-slate-400 uppercase mb-3">TCP Stack Buffer Layers</div>
          <div className="space-y-2">
            {[
              { layer: 'Application Buffer', desc: 'write() puts data here first', path: 'userspace', color: '#8b5cf6' },
              { layer: 'Socket Send Buffer (sk_sndbuf)', desc: 'Kernel holds unsent + unacked data. Limited by tcp_wmem[2]', path: 'net/ipv4/tcp.c', color: '#06b6d4' },
              { layer: 'TCP Send Window', desc: 'min(cwnd, rwnd) — congestion window × receiver window', path: 'kernel decides', color: '#f59e0b' },
              { layer: 'Socket Receive Buffer (sk_rcvbuf)', desc: 'Received data waiting to be read. Limited by tcp_rmem[2]', path: 'net/ipv4/tcp_input.c', color: '#10b981' },
            ].map(({ layer, desc, path, color }) => (
              <div key={layer} className="flex items-start gap-3 text-xs">
                <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ background: color }} />
                <div>
                  <span className="font-semibold" style={{ color }}>{layer}</span>
                  <span className="text-slate-400 ml-2">{desc}</span>
                  <span className="text-slate-600 ml-2 font-mono">({path})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BDP Calculation */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Bandwidth-Delay Product (BDP)</h2>
        <p className="text-sm text-slate-400 mb-2">
          The BDP is the <strong className="text-slate-200">volume of data in transit</strong> on a fully utilized
          network path. It's the minimum buffer size needed to keep the pipe full and achieve maximum throughput.
        </p>

        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 mb-4">
          <div className="text-xs font-semibold text-slate-400 uppercase mb-2">Formula</div>
          <div className="font-mono text-center text-lg">
            <span className="text-rose-400">BDP</span>
            <span className="text-slate-400"> = </span>
            <span className="text-cyan-400">Bandwidth (bits/s)</span>
            <span className="text-slate-400"> × </span>
            <span className="text-violet-400">RTT (seconds)</span>
            <span className="text-slate-400"> ÷ 8</span>
          </div>
          <div className="mt-3 text-xs text-slate-400 text-center">
            Example: 10 Gbps × 0.050s ÷ 8 = <span className="text-rose-400 font-bold">62.5 MB</span> BDP
          </div>
        </div>

        <BDPCalculator />

        <Callout type="exam" title="BDP Calculation is Exam Material">
          You will be given bandwidth and RTT values and asked to calculate the required buffer size.
          <strong> Always divide by 8</strong> to convert bits to bytes. Then round up to the next power of 2
          for buffer settings (e.g., 62.5 MB → 67108864 bytes = 64 MB).
        </Callout>
      </div>

      {/* TCP Buffer Tuning */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">TCP Buffer Size Tuning</h2>
        <p className="text-sm text-slate-400 mb-3">
          TCP buffers are configured at two levels: the <strong className="text-slate-200">socket level</strong>
          (per-connection maximums) and the <strong className="text-slate-200">system level</strong> (autotuning bounds).
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="metric-table">
            <thead><tr><th>Parameter</th><th>Values</th><th>Meaning</th></tr></thead>
            <tbody>
              {[
                { param: 'net.core.rmem_max', vals: 'single value', meaning: 'Hard maximum for socket receive buffer (SO_RCVBUF). Must be ≥ tcp_rmem[2]' },
                { param: 'net.core.wmem_max', vals: 'single value', meaning: 'Hard maximum for socket send buffer (SO_SNDBUF). Must be ≥ tcp_wmem[2]' },
                { param: 'net.core.rmem_default', vals: 'single value', meaning: 'Default socket receive buffer before autotuning kicks in' },
                { param: 'net.core.wmem_default', vals: 'single value', meaning: 'Default socket send buffer before autotuning kicks in' },
                { param: 'net.ipv4.tcp_rmem', vals: 'min default max', meaning: 'TCP receive buffer: min (floor), default (initial), max (autotune ceiling)' },
                { param: 'net.ipv4.tcp_wmem', vals: 'min default max', meaning: 'TCP send buffer: min (floor), default (initial), max (autotune ceiling)' },
                { param: 'net.ipv4.tcp_mem', vals: 'min pressure max', meaning: 'System-wide TCP memory pages: normal, pressure (start reclaiming), max (drop connections)' },
              ].map(({ param, vals, meaning }) => (
                <tr key={param}>
                  <td className="font-mono text-rose-400 text-xs">{param}</td>
                  <td className="font-mono text-slate-400 text-xs">{vals}</td>
                  <td className="text-slate-300 text-sm">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Autotuning">
          Linux autotuning (<code>tcp_moderate_rcvbuf</code>) automatically grows socket buffers up to the
          <code> tcp_rmem[2]</code> maximum based on actual throughput. You only need to set <code>rmem_max</code>
          and <code>tcp_rmem[2]</code> to ≥ BDP; the kernel handles the rest.
        </Callout>

        <CodeBlock language="bash" code={`# ── STEP-BY-STEP BUFFER TUNING ─────────────────────────────────────
# Given: 10 Gbps link, RTT = 50ms
# BDP = 10e9 bits/s * 0.050s / 8 = 62,500,000 bytes ≈ 64 MB

# Round up to next power of 2: 67108864 (64 MB)

# Measure your RTT first
ping -c 10 <remote_host> | tail -1
# or for more precision:
hping3 -S -p 80 -c 100 <remote_host> | grep RTT

# Set buffers to accommodate BDP
sysctl -w net.core.rmem_max=134217728       # 128 MB (2x BDP)
sysctl -w net.core.wmem_max=134217728       # 128 MB
sysctl -w net.core.rmem_default=67108864    # 64 MB
sysctl -w net.core.wmem_default=67108864    # 64 MB

# TCP-specific autotuning bounds [min default max]
sysctl -w "net.ipv4.tcp_rmem=4096 67108864 134217728"
sysctl -w "net.ipv4.tcp_wmem=4096 67108864 134217728"

# Verify buffer sizes being used by active sockets
ss -tnm | head -20   # shows send-Q, recv-Q, memory

# Check if autotuning is on
sysctl net.ipv4.tcp_moderate_rcvbuf   # should be 1`} />

        <CodeBlock language="bash" filename="/etc/sysctl.d/99-network.conf" code={`# TCP buffer tuning for 10 Gbps WAN (50ms RTT, BDP = 62.5 MB)
net.core.rmem_max = 134217728
net.core.wmem_max = 134217728
net.core.rmem_default = 67108864
net.core.wmem_default = 67108864
net.ipv4.tcp_rmem = 4096 67108864 134217728
net.ipv4.tcp_wmem = 4096 67108864 134217728
net.ipv4.tcp_moderate_rcvbuf = 1`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists via /etc/sysctl.d/</span>
        </div>
      </div>

      {/* UDP Buffer Tuning */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">UDP Buffer Sizes</h2>
        <p className="text-sm text-slate-400 mb-3">
          UDP is connectionless — there's no flow control or congestion control. Applications using UDP
          (DNS, DHCP, RTP/media streaming, QUIC) rely entirely on socket buffers. Dropped UDP packets
          mean lost data (for DNS: retry; for media: artifacts).
        </p>

        <CodeBlock language="bash" code={`# Check current UDP buffer sizes
sysctl net.core.rmem_default      # default receive buffer (~208 KB)
sysctl net.core.wmem_default      # default send buffer
sysctl net.ipv4.udp_rmem_min      # minimum UDP receive buffer
sysctl net.ipv4.udp_wmem_min      # minimum UDP send buffer

# Check UDP socket stats — look for recv-Q overflow
ss -unu   # UDP sockets

# Check UDP receive errors (RcvbufErrors = dropped due to buffer full)
netstat -su | grep -i error
cat /proc/net/udp | awk 'NR>1 {print $5}' | sort | uniq -c  # drop counts

# Set UDP buffers
sysctl -w net.core.rmem_default=26214400   # 25 MB
sysctl -w net.core.wmem_default=26214400   # 25 MB

# For high-throughput UDP (video streaming, QUIC)
sysctl -w net.core.rmem_max=134217728
sysctl -w net.core.wmem_max=134217728`} />

        <CodeBlock language="bash" filename="/etc/sysctl.d/99-udp.conf" code={`# UDP buffer tuning for high-throughput streams
net.core.rmem_default = 26214400
net.core.wmem_default = 26214400
net.core.rmem_max = 134217728
net.core.wmem_max = 134217728
net.ipv4.udp_rmem_min = 8192
net.ipv4.udp_wmem_min = 8192`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists via /etc/sysctl.d/</span>
        </div>
      </div>

      {/* Congestion Control */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">TCP Congestion Control</h2>
        <p className="text-sm text-slate-400 mb-3">
          The congestion control algorithm determines how fast TCP ramps up to fill the pipe and how it reacts
          to packet loss (signal of congestion). RHEL 9 default is <strong className="text-slate-200">CUBIC</strong>.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            {
              name: 'CUBIC (default)', color: 'text-cyan-400',
              desc: 'Window grows as a cubic function. Aggressive in high-BDP, fair to other CUBIC flows. Works well for large buffers.',
              best: 'Default for most workloads'
            },
            {
              name: 'BBR (Bottleneck Bandwidth & RTT)', color: 'text-violet-400',
              desc: 'Model-based: estimates bottleneck bandwidth and RTT, fills pipe without causing queue buildup. Excellent on lossy/WAN links.',
              best: 'WAN, cloud, lossy networks'
            },
          ].map(({ name, color, desc, best }) => (
            <div key={name} className="bg-slate-900 rounded-lg p-4 border border-slate-800">
              <div className={`font-mono font-bold text-sm ${color}`}>{name}</div>
              <div className="text-xs text-slate-500 mb-2">Best for: {best}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>

        <CodeBlock language="bash" code={`# Check current congestion control
sysctl net.ipv4.tcp_congestion_control

# List available algorithms
sysctl net.ipv4.tcp_available_congestion_control

# Enable BBR (load module first)
modprobe tcp_bbr
sysctl -w net.ipv4.tcp_congestion_control=bbr

# Verify BBR is active
sysctl net.ipv4.tcp_congestion_control`} />

        <CodeBlock language="bash" filename="/etc/sysctl.d/99-tcp-bbr.conf" code={`net.ipv4.tcp_congestion_control = bbr`} />
        <CodeBlock language="bash" filename="/etc/modules-load.d/tcp_bbr.conf" code={`tcp_bbr`} />
        <div className="flex items-center gap-2 mt-1">
          <span className="persist-badge"><CheckCircle size={10} /> Persists</span>
          <span className="text-xs text-slate-500">sysctl.d for the parameter + modules-load.d to load the module at boot</span>
        </div>
      </div>

      {/* Network diagnostics */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Network Diagnostics Quick Reference</h2>
        <CodeBlock language="bash" code={`# Socket statistics (replaces netstat)
ss -tuln               # TCP/UDP listening ports
ss -tnp                # TCP connections with process
ss -tnm                # TCP with memory (buffer sizes)
ss -i dst 10.0.0.1     # connections to specific host with TCP internals

# Network interface stats
ip -s link show eth0   # bytes/packets/errors per interface
ethtool -S eth0        # driver-level stats (ring buffer drops, etc.)
ethtool eth0           # speed, duplex, link detected

# TCP retransmit analysis
ss -ti | grep retrans  # show retransmit count per socket

# Per-protocol statistics
netstat -s | grep -E 'retransmit|failed'
cat /proc/net/snmp | awk 'NR%2==0'  # protocol statistics

# Trace route with RTT
tracepath 8.8.8.8      # also shows MTU
mtr --report 8.8.8.8   # combined traceroute + ping

# Measure actual throughput
iperf3 -s              # server
iperf3 -c <server> -t 30 -P 4  # client, 30s, 4 parallel streams`} />
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="font-semibold text-amber-300">Exam Key Takeaways</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-300">
          <li>• <strong className="text-white">BDP formula</strong>: Bandwidth (bits/s) × RTT (seconds) ÷ 8 = bytes needed in buffers.</li>
          <li>• Set <code className="text-cyan-400">net.core.rmem_max</code> and <code className="text-cyan-400">net.ipv4.tcp_rmem[2]</code> to ≥ BDP. Persist in <code>/etc/sysctl.d/</code>.</li>
          <li>• UDP buffers: <code className="text-cyan-400">net.core.rmem_default</code> and <code className="text-cyan-400">net.core.wmem_default</code>.</li>
          <li>• <code className="text-cyan-400">net.core.rmem_max</code> must be ≥ <code className="text-cyan-400">tcp_rmem[2]</code> — otherwise tcp_rmem max is silently capped.</li>
          <li>• BBR congestion control: load <code className="text-cyan-400">tcp_bbr</code> module persistently via <code>/etc/modules-load.d/</code>.</li>
          <li>• <code className="text-cyan-400">ss -tnm</code> shows current socket buffer usage per connection to verify tuning is effective.</li>
        </ul>
      </div>
    </div>
  )
}
