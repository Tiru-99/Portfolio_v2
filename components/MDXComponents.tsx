import Link from 'next/link'

export const components = {
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
    p: (props: any) => <p className="mb-4 leading-relaxed opacity-90" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside mb-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside mb-4" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 opacity-80" {...props} />
    ),
    code: ({ children, className, ...props }: any) => {
        const isInline = !className;
        return (
            <code
                className={`${isInline ? 'inline-code' : 'block-code'} font-mono`}
                {...props}
            >
                {children}
            </code>
        )
    },
    pre: ({ children, ...props }: any) => (
        <pre className="relative code-block group" {...props}>
            <div className="absolute top-3 right-4 flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            {children}
        </pre>
    ),
    a: ({ href, ...props }: any) => (
        <Link href={href} className="text-blue-400 hover:underline underline-offset-4" {...props} />
    ),
}
