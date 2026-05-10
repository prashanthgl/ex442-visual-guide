import { Link } from 'react-router-dom'
import {
  Activity, BarChart2, Server, Cpu, Gauge, Settings,
  Database, HardDrive, Network, FileText, ArrowRight,
  Zap, Shield, Clock, CheckCircle
} from 'lucide-react'

const topics = [
  {
    to: '/system-analysis',
    icon: <Activity size={22} className="text-cyan-400" />,
    title: 'System Analysis Tools',
    desc: 'vmstat, iostat, mpstat, sar, top, powertop, perf — the complete toolkit for reading system vitals.',
    tags: ['vmstat', 'iostat', 'sar', 'perf'],
    color: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
    accent: 'text-cyan-400',
  },
  {
    to: '/pcp',
    icon: <BarChart2 size={22} className="text-violet-400" />,
    title: 'Performance Co-Pilot',
    desc: 'PCP architecture, pmcd, pmlogger, pmstat — enterprise-grade performance monitoring framework.',
    tags: ['pmcd', 'pmstat', 'pmrep', 'pmlogger'],
    color: 'from-violet-500/20 to-violet-500/5 border-violet-500/30',
    accent: 'text-violet-400',
  },
  {
    to: '/hardware-profiling',
    icon: <Server size={22} className="text-sky-400" />,
    title: 'Hardware Profiling',
    desc: 'dmesg ring buffer internals, dmidecode SMBIOS tables, sosreport — know your hardware.',
    tags: ['dmesg', 'dmidecode', 'sosreport', 'lscpu'],
    color: 'from-sky-500/20 to-sky-500/5 border-sky-500/30',
    accent: 'text-sky-400',
  },
  {
    to: '/kernel-behavior',
    icon: <Cpu size={22} className="text-indigo-400" />,
    title: 'Kernel Behavior',
    desc: '/proc/sys, sysctl, /sys filesystem internals, module parameters — control the kernel.',
    tags: ['sysctl', '/proc/sys', '/sys', 'modprobe'],
    color: 'from-indigo-500/20 to-indigo-500/5 border-indigo-500/30',
    accent: 'text-indigo-400',
  },
  {
    to: '/app-performance',
    icon: <Gauge size={22} className="text-amber-400" />,
    title: 'App Performance',
    desc: 'Valgrind suite, SystemTap scripting, eBPF/bpftrace tools — deep application introspection.',
    tags: ['Valgrind', 'SystemTap', 'eBPF', 'bpftrace'],
    color: 'from-amber-500/20 to-amber-500/5 border-amber-500/30',
    accent: 'text-amber-400',
  },
  {
    to: '/tuning-running',
    icon: <Settings size={22} className="text-orange-400" />,
    title: 'Tuning Running Systems',
    desc: 'Process priorities, tuned profiles, cgroups v2, systemd resource constraints — runtime control.',
    tags: ['nice', 'tuned', 'cgroups', 'systemd'],
    color: 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
    accent: 'text-orange-400',
  },
  {
    to: '/memory-tuning',
    icon: <Database size={22} className="text-emerald-400" />,
    title: 'Memory Tuning',
    desc: 'Huge pages, overcommit, swappiness, NUMA topology, SYSV shared memory — master virtual memory.',
    tags: ['HugePages', 'NUMA', 'swappiness', 'overcommit'],
    color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
    accent: 'text-emerald-400',
  },
  {
    to: '/disk-filesystems',
    icon: <HardDrive size={22} className="text-teal-400" />,
    title: 'Disk & File Systems',
    desc: 'I/O schedulers (mq-deadline, bfq, kyber), dirty page writeback, filesystem tuning.',
    tags: ['mq-deadline', 'bfq', 'dirty_ratio', 'noatime'],
    color: 'from-teal-500/20 to-teal-500/5 border-teal-500/30',
    accent: 'text-teal-400',
  },
  {
    to: '/network-performance',
    icon: <Network size={22} className="text-rose-400" />,
    title: 'Network Performance',
    desc: 'BDP calculation, TCP/UDP buffer sizing, congestion control — optimize the network stack.',
    tags: ['BDP', 'tcp_rmem', 'udp buffers', 'BBR'],
    color: 'from-rose-500/20 to-rose-500/5 border-rose-500/30',
    accent: 'text-rose-400',
  },
  {
    to: '/quick-reference',
    icon: <FileText size={22} className="text-slate-400" />,
    title: 'Quick Reference',
    desc: 'Cheat sheet of all sysctl params, commands, and persistence methods for exam day.',
    tags: ['sysctl.d', 'udev rules', 'tuned-adm', 'persistence'],
    color: 'from-slate-500/20 to-slate-500/5 border-slate-500/30',
    accent: 'text-slate-400',
  },
]

const stats = [
  { label: 'Exam Objectives', value: '8', icon: <CheckCircle size={18} className="text-emerald-400" /> },
  { label: 'Tools Covered', value: '40+', icon: <Gauge size={18} className="text-cyan-400" /> },
  { label: 'Kernel Params', value: '60+', icon: <Cpu size={18} className="text-violet-400" /> },
  { label: 'Practical Examples', value: '100+', icon: <Zap size={18} className="text-amber-400" /> },
]

// Linux Performance Stack Diagram
function LinuxStackDiagram() {
  const layers = [
    {
      label: 'Applications',
      sublabel: 'Your workloads',
      tools: ['Valgrind', 'SystemTap', 'bpftrace'],
      color: '#8b5cf6',
      bg: 'rgba(139,92,246,0.12)',
    },
    {
      label: 'System Call Interface',
      sublabel: 'Kernel entry point',
      tools: ['strace', 'ltrace', 'syscount'],
      color: '#06b6d4',
      bg: 'rgba(6,182,212,0.10)',
    },
    {
      label: 'Virtual File System (VFS)',
      sublabel: 'Abstraction over all filesystems',
      tools: ['iostat', 'iotop', 'blktrace'],
      color: '#10b981',
      bg: 'rgba(16,185,129,0.10)',
    },
    {
      label: 'Scheduler · Memory · Network',
      sublabel: 'Core kernel subsystems',
      tools: ['top', 'vmstat', 'ss', 'numastat'],
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.10)',
    },
    {
      label: 'Hardware Abstraction',
      sublabel: 'Device drivers, IRQ handling',
      tools: ['perf', 'powertop', 'mpstat'],
      color: '#f97316',
      bg: 'rgba(249,115,22,0.10)',
    },
    {
      label: 'Physical Hardware',
      sublabel: 'CPU, RAM, NIC, Storage',
      tools: ['dmidecode', 'lscpu', 'dmesg'],
      color: '#6b7280',
      bg: 'rgba(107,114,128,0.10)',
    },
  ]

  return (
    <div className="w-full space-y-1">
      {layers.map((layer, i) => (
        <div
          key={i}
          className="rounded-lg border flex items-center px-4 py-2.5 gap-4"
          style={{ background: layer.bg, borderColor: layer.color + '33' }}
        >
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm" style={{ color: layer.color }}>
              {layer.label}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">{layer.sublabel}</div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 flex-wrap justify-end">
            {layer.tools.map(t => (
              <span
                key={t}
                className="text-xs font-mono px-2 py-0.5 rounded border"
                style={{ color: layer.color, borderColor: layer.color + '40', background: layer.color + '10' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero */}
      <div className="mb-10 pt-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">EX442</span>
          <span className="badge bg-violet-500/10 text-violet-400 border border-violet-500/20">RHEL 9</span>
          <span className="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Performance Tuning</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          Master Linux{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Performance Tuning
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-6 leading-relaxed">
          A deep-dive visual guide for the{' '}
          <strong className="text-slate-200">Red Hat Certified Specialist in Performance Tuning (EX442)</strong>.
          Go beyond the exam — understand Linux internals and become a performance engineering expert.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/system-analysis"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-all"
          >
            Start Learning <ArrowRight size={16} />
          </Link>
          <Link
            to="/quick-reference"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium px-5 py-2.5 rounded-lg transition-all"
          >
            Quick Reference <FileText size={16} />
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="card flex items-center gap-3">
            {s.icon}
            <div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Linux Stack Diagram */}
      <div className="card mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/30 to-violet-500/30 flex items-center justify-center">
            <Cpu size={16} className="text-cyan-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Linux Performance Stack</h2>
            <p className="text-xs text-slate-500">Where each tool operates in the kernel hierarchy</p>
          </div>
        </div>
        <LinuxStackDiagram />
        <p className="mt-3 text-xs text-slate-600">
          Understanding which layer a tool observes tells you what problem it can diagnose. eBPF probes span all layers.
        </p>
      </div>

      {/* Critical exam note */}
      <div className="flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 mb-8">
        <Shield size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-semibold text-amber-300 text-sm mb-1">Golden Rule: Persistence After Reboot</div>
          <p className="text-sm text-slate-300">
            All EX442 exam configurations <strong className="text-white">must persist after reboot without intervention</strong>.
            A change that only works until the next reboot is worth <strong className="text-rose-400">zero marks</strong>.
            Look for the <span className="persist-badge ml-1">Persist</span> badge throughout this guide for the correct method.
          </p>
        </div>
      </div>

      {/* Topic Grid */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-1">All Topics</h2>
        <p className="text-sm text-slate-500 mb-5">Click any topic to dive deep into Linux internals and exam-focused content.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.to}
              to={topic.to}
              className={`group rounded-xl border p-5 bg-gradient-to-br ${topic.color}
                hover:scale-[1.02] transition-all duration-200 flex flex-col gap-3`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900/60 flex items-center justify-center flex-shrink-0">
                  {topic.icon}
                </div>
                <h3 className="font-semibold text-white text-sm leading-tight">{topic.title}</h3>
                <ArrowRight size={14} className={`ml-auto ${topic.accent} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{topic.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {topic.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* How to use */}
      <div className="card mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Clock size={16} className="text-slate-500" />
          <h3 className="font-semibold text-white">How to Use This Guide</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <div className="text-cyan-400 font-medium">1. Learn the Concepts</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Start from System Analysis and work through each section. Understand <em>why</em> each tool exists and
              what kernel subsystem it taps into.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-violet-400 font-medium">2. Practice the Commands</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Every code block is copy-ready. Run commands on a RHEL 9 VM. The exam is hands-on — muscle memory matters.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-amber-400 font-medium">3. Check Persistence</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              For every change you make, check the <span className="persist-badge">Persist</span> sections.
              Reboot your VM and verify changes survived.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
