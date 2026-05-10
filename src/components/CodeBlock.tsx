import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check, Terminal } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
}

export default function CodeBlock({ code, language = 'bash', filename, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const langColors: Record<string, string> = {
    bash: 'text-amber-400',
    shell: 'text-amber-400',
    python: 'text-blue-400',
    c: 'text-violet-400',
    text: 'text-slate-400',
    ini: 'text-emerald-400',
    systemd: 'text-emerald-400',
  }

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-[#1e1e1e]">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Terminal size={13} className="text-slate-500" />
          {filename ? (
            <span className={`text-xs font-mono ${langColors[language] || 'text-slate-400'}`}>
              {filename}
            </span>
          ) : (
            <span className={`text-xs font-medium ${langColors[language] || 'text-slate-400'}`}>
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white
                     bg-slate-800 hover:bg-slate-700 rounded px-2 py-1 transition-all"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          background: '#1e1e1e',
          fontSize: '0.82rem',
          lineHeight: '1.6',
          padding: '1rem',
        }}
        codeTagProps={{
          style: { fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace" }
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
