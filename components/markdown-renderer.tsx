import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn(
      "prose prose-invert max-w-none",
      // Typography styles for dark theme
      "prose-headings:text-white prose-headings:font-semibold",
      "prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg",
      "prose-p:text-gray-300 prose-p:leading-relaxed",
      "prose-strong:text-white prose-strong:font-semibold",
      "prose-em:text-gray-300",
      // List styles
      "prose-ul:text-gray-300 prose-ol:text-gray-300",
      "prose-li:text-gray-300 prose-li:marker:text-green-400",
      // Link styles
      "prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline",
      // Code styles
      "prose-code:text-green-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm",
      "prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700",
      // Blockquote styles
      "prose-blockquote:border-l-green-500 prose-blockquote:bg-gray-800/50 prose-blockquote:text-gray-300",
      // Table styles
      "prose-table:text-gray-300",
      "prose-thead:border-gray-600",
      "prose-th:text-white prose-th:border-gray-600",
      "prose-td:border-gray-600",
      // HR styles
      "prose-hr:border-gray-600",
      className
    )}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom components for better styling
          h1: ({ children }) => (
            <h1 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-green-400">🤖</span>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold text-white mb-3 mt-6 flex items-center gap-2">
              <span className="text-blue-400">💡</span>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold text-white mb-2 mt-4 flex items-center gap-2">
              <span className="text-purple-400">✨</span>
              {children}
            </h3>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 my-4">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span className="text-gray-300">{children}</span>
            </li>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 my-4 list-decimal list-inside">
              {children}
            </ol>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-4">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="text-white font-semibold">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="text-gray-300 italic">
              {children}
            </em>
          ),
          code: ({ children }) => (
            <code className="text-green-300 bg-gray-800 px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-x-auto my-4">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-green-500 bg-gray-800/50 pl-4 py-2 my-4 rounded-r">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-gray-600 rounded-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-800">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left text-white font-semibold border-b border-gray-600">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-gray-300 border-b border-gray-600">
              {children}
            </td>
          ),
          hr: ({ children }) => (
            <hr className="border-gray-600 my-6" />
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-green-400 hover:text-green-300 hover:underline transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
