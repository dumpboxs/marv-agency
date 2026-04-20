import { useScroll } from '@/hooks/use-scroll'
import { cn } from '#/lib/utils'

interface ScrollProgressProps {
  className?: string
  color?: 'default' | 'gradient' | 'accent'
  height?: number
  position?: 'top' | 'bottom'
  showPercentage?: boolean
}

/**
 * A beautiful scroll progress indicator that shows reading progress.
 *
 * @example
 * // Basic top bar
 * <ScrollProgress />
 *
 * // Gradient with percentage
 * <ScrollProgress color="gradient" showPercentage />
 *
 * // Thicker bar at bottom
 * <ScrollProgress height={4} position="bottom" />
 */
export function ScrollProgress({
  className,
  color = 'gradient',
  height = 3,
  position = 'top',
  showPercentage = false,
}: ScrollProgressProps) {
  const { progress } = useScroll()

  const colorClasses = {
    default: 'bg-foreground',
    gradient:
      'bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-amber-500',
    accent: 'bg-primary',
  }

  const positionClasses = {
    top: 'top-0',
    bottom: 'bottom-0',
  }

  return (
    <div
      className={cn(
        'pointer-events-none fixed right-0 left-0 z-[100]',
        positionClasses[position],
        className
      )}
      style={{ height }}
    >
      {/* Track */}
      <div className="absolute inset-0 bg-border/30" />

      {/* Progress bar */}
      <div
        className={cn(
          'h-full transition-transform duration-100 ease-out will-change-transform',
          colorClasses[color]
        )}
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
        }}
      >
        {/* Glow effect at the tip */}
        <div
          className={cn(
            'absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
            'h-3 w-3 rounded-full blur-sm',
            color === 'gradient' ? 'bg-pink-400' : 'bg-foreground'
          )}
        />
      </div>

      {/* Percentage indicator */}
      {showPercentage && (
        <div
          className={cn(
            'absolute right-4 px-2 py-1 text-[10px] font-medium tracking-wider uppercase',
            'rounded-full border bg-background/90 backdrop-blur-sm',
            position === 'top' ? 'top-4' : 'bottom-4'
          )}
        >
          {Math.round(progress)}%
        </div>
      )}
    </div>
  )
}

/**
 * Circular scroll progress indicator for more compact layouts.
 */
export function CircularProgress({
  className,
  size = 48,
}: {
  className?: string
  size?: number
}) {
  const { progress } = useScroll()
  const strokeWidth = 3
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center',
        className
      )}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-border/50"
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-150 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-[10px] font-medium">
        {Math.round(progress)}
      </span>
    </div>
  )
}
