import { Info, AlertTriangle, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react'

type CalloutType = 'info' | 'warning' | 'tip' | 'danger' | 'success' | 'exam'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}

const configs: Record<CalloutType, {
  icon: React.ReactNode
  borderColor: string
  bgColor: string
  titleColor: string
  iconColor: string
}> = {
  info: {
    icon: <Info size={16} />,
    borderColor: 'border-cyan-500/30',
    bgColor: 'bg-cyan-500/5',
    titleColor: 'text-cyan-400',
    iconColor: 'text-cyan-400',
  },
  warning: {
    icon: <AlertTriangle size={16} />,
    borderColor: 'border-amber-500/30',
    bgColor: 'bg-amber-500/5',
    titleColor: 'text-amber-400',
    iconColor: 'text-amber-400',
  },
  tip: {
    icon: <Lightbulb size={16} />,
    borderColor: 'border-violet-500/30',
    bgColor: 'bg-violet-500/5',
    titleColor: 'text-violet-400',
    iconColor: 'text-violet-400',
  },
  danger: {
    icon: <AlertCircle size={16} />,
    borderColor: 'border-rose-500/30',
    bgColor: 'bg-rose-500/5',
    titleColor: 'text-rose-400',
    iconColor: 'text-rose-400',
  },
  success: {
    icon: <CheckCircle size={16} />,
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/5',
    titleColor: 'text-emerald-400',
    iconColor: 'text-emerald-400',
  },
  exam: {
    icon: <CheckCircle size={16} />,
    borderColor: 'border-amber-400/40',
    bgColor: 'bg-amber-400/5',
    titleColor: 'text-amber-300',
    iconColor: 'text-amber-400',
  },
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const config = configs[type]
  const defaultTitles: Record<CalloutType, string> = {
    info: 'Note',
    warning: 'Warning',
    tip: 'Pro Tip',
    danger: 'Danger',
    success: 'Success',
    exam: 'Exam Focus',
  }

  return (
    <div className={`my-4 rounded-lg border ${config.borderColor} ${config.bgColor} p-4`}>
      <div className="flex items-start gap-3">
        <span className={`${config.iconColor} mt-0.5 flex-shrink-0`}>
          {config.icon}
        </span>
        <div className="min-w-0">
          <div className={`text-sm font-semibold ${config.titleColor} mb-1`}>
            {title || defaultTitles[type]}
          </div>
          <div className="text-sm text-slate-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
