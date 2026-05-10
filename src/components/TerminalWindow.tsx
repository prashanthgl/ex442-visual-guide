interface TerminalWindowProps {
  title?: string
  children: string | React.ReactNode
  prompt?: string
}

export default function TerminalWindow({ title = 'Terminal', children }: TerminalWindowProps) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/70" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-xs text-slate-400 ml-2 font-mono">{title}</span>
      </div>
      {/* Content */}
      <div className="bg-slate-950 p-4 font-mono text-sm text-slate-300 leading-relaxed overflow-x-auto">
        {typeof children === 'string' ? (
          <pre className="whitespace-pre text-slate-300 text-xs leading-6">{children}</pre>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
