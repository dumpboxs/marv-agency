import { useCallback, useEffect, useRef, useState } from 'react'

interface ScrollState {
  /** Current scroll Y position in pixels */
  scrollY: number
  /** Previous scroll Y position */
  previousScrollY: number
  /** Scroll direction: 'up', 'down', or null when not scrolled */
  direction: 'up' | 'down' | null
  /** Whether user has scrolled past the specified threshold */
  isScrolled: boolean
  /** Scroll progress as percentage (0-100) based on document height */
  progress: number
  /** Whether currently scrolling (with debounce) */
  isScrolling: boolean
}

interface UseScrollOptions {
  /** Threshold in pixels to consider "scrolled" (default: 0) */
  threshold?: number
  /** Debounce time in ms for isScrolling state (default: 150) */
  debounceMs?: number
}

// Safe check for browser environment
const isBrowser =
  typeof window !== 'undefined' && typeof document !== 'undefined'

/**
 * Hook for detecting scroll position, direction, and state.
 *
 * @example
 * // Basic usage
 * const { scrollY, isScrolled } = useScroll({ threshold: 50 })
 *
 * // Show/hide Navbar based on scroll direction
 * const { direction, isScrolled } = useScroll({ threshold: 100 })
 * const hideNavbar = direction === 'down' && isScrolled
 *
 * // Scroll progress for reading indicator
 * const { progress } = useScroll()
 */
export function useScroll(options: UseScrollOptions = {}): ScrollState {
  const { threshold = 0, debounceMs = 150 } = options

  const [scrollY, setScrollY] = useState(0)
  const [previousScrollY, setPreviousScrollY] = useState(0)
  const [direction, setDirection] = useState<'up' | 'down' | null>(null)
  const [progress, setProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const previousScrollYRef = useRef(0)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    if (!isBrowser) return
    if (rafRef.current !== null) return

    rafRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      const lastScrollY = previousScrollYRef.current
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress =
        docHeight <= 0
          ? 0
          : Math.min(100, Math.max(0, (currentScrollY / docHeight) * 100))

      setDirection(
        currentScrollY > lastScrollY
          ? 'down'
          : currentScrollY < lastScrollY
            ? 'up'
            : null
      )

      setScrollY(currentScrollY)
      setPreviousScrollY(lastScrollY)
      setProgress(nextProgress)
      previousScrollYRef.current = currentScrollY

      // Handle isScrolling debounce
      setIsScrolling(true)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, debounceMs)

      rafRef.current = null
    })
  }, [debounceMs])

  useEffect(() => {
    if (!isBrowser) return

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll])

  return {
    scrollY,
    previousScrollY,
    direction,
    isScrolled: scrollY > threshold,
    progress,
    isScrolling,
  }
}
