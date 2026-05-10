import { useState } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import {
  Home, Activity, Cpu, Settings, HardDrive, Network,
  Database, Terminal, BarChart2, Layers, Menu, X, BookOpen,
  Gauge, Zap, Server, ChevronRight, FileText
} from 'lucide-react'

interface NavItem {
  to: string
  label: string
  icon: React.ReactNode
  shortLabel?: string
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { to: '/', label: 'Home & Dashboard', icon: <Home size={16} /> },
    ]
  },
  {
    title: 'Monitoring & Analysis',
    items: [
      { to: '/system-analysis', label: 'System Analysis Tools', icon: <Activity size={16} />, shortLabel: 'System Analysis' },
      { to: '/pcp', label: 'Performance Co-Pilot', icon: <BarChart2 size={16} />, shortLabel: 'PCP' },
      { to: '/hardware-profiling', label: 'Hardware Profiling', icon: <Server size={16} />, shortLabel: 'Hardware' },
    ]
  },
  {
    title: 'Kernel & OS',
    items: [
      { to: '/kernel-behavior', label: 'Kernel Behavior', icon: <Cpu size={16} />, shortLabel: 'Kernel' },
    ]
  },
  {
    title: 'Performance Analysis',
    items: [
      { to: '/app-performance', label: 'App Performance', icon: <Gauge size={16} />, shortLabel: 'App Perf' },
    ]
  },
  {
    title: 'Tuning',
    items: [
      { to: '/tuning-running', label: 'Tuning Running Systems', icon: <Settings size={16} />, shortLabel: 'Running Systems' },
      { to: '/memory-tuning', label: 'Memory Tuning', icon: <Database size={16} />, shortLabel: 'Memory' },
      { to: '/disk-filesystems', label: 'Disk & File Systems', icon: <HardDrive size={16} />, shortLabel: 'Disk & FS' },
      { to: '/network-performance', label: 'Network Performance', icon: <Network size={16} />, shortLabel: 'Network' },
    ]
  },
  {
    title: 'Reference',
    items: [
      { to: '/quick-reference', label: 'Quick Reference', icon: <FileText size={16} />, shortLabel: 'Quick Ref' },
    ]
  }
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 z-30
          flex flex-col transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center flex-shrink-0">
            <Zap size={16} className="text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-white leading-tight">EX442 Guide</div>
            <div className="text-xs text-slate-500 truncate">Performance Tuning</div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto lg:hidden text-slate-500 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navSections.map((section) => (
            <div key={section.title} className="mb-5">
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider px-3 mb-2">
                {section.title}
              </div>
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) =>
                        `sidebar-link ${isActive ? 'active' : ''}`
                      }
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="truncate">{item.shortLabel || item.label}</span>
                      {location.pathname === item.to && (
                        <ChevronRight size={14} className="ml-auto text-cyan-500 flex-shrink-0" />
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <BookOpen size={12} />
            <span>Based on official exam objectives</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-xs text-slate-600">
            <Layers size={12} />
            <span>RHEL 9 / Kernel 5.14+</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        {/* Top navbar */}
        <header className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-4 px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-400 hover:text-white p-1 rounded"
            >
              <Menu size={20} />
            </button>

            {/* Breadcrumb */}
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 min-w-0">
              <Terminal size={14} className="text-cyan-500 flex-shrink-0" />
              <span className="text-slate-400 truncate">
                {navSections
                  .flatMap(s => s.items)
                  .find(i => i.to === location.pathname || (i.to === '/' && location.pathname === '/'))
                  ?.label || 'EX442 Performance Tuning'}
              </span>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <span className="hidden md:flex items-center gap-2 text-xs text-slate-500 bg-slate-900 border border-slate-800 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                RHEL 9 · EX442
              </span>
              <a
                href="https://github.com/prashanthgl/ex442-visual-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white text-xs border border-slate-800 rounded px-2 py-1 hidden sm:block hover:border-slate-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 animate-fade-in">
          <Outlet />
        </main>

        <footer className="border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-600">
          EX442 Visual Guide · Built for exam prep · Not affiliated with Red Hat
        </footer>
      </div>
    </div>
  )
}
