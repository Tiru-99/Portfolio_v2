'use client'

interface DiagonalPatternProps {
  side: 'left' | 'right'
  className?: string
  topOffset?: string
}

export default function DiagonalPattern({
  side,
  className = '',
  topOffset = '0',
}: DiagonalPatternProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ top: topOffset }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={`diagonal-stripes-${side}`}
            patternUnits="userSpaceOnUse"
            width="4"
            height="4"
            patternTransform={side === 'left' ? 'rotate(45)' : 'rotate(-45)'}
          >
            <rect width="4" height="4" fill="transparent" />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="4"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/12"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={`url(#diagonal-stripes-${side})`}
        />

        <line
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/8"
        />

        <line
          x1="100%"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/8"
        />
      </svg>
    </div>
  )
}