import { useEffect, useRef, useState, useCallback } from 'react'

export function useHorizontalScroll() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [translateX, setTranslateX] = useState(0)
    const animFrameRef = useRef<number>(0)
    const currentX = useRef(0)
    const targetX = useRef(0)

    const lerp = useCallback((start: number, end: number, factor: number) => {
        return start + (end - start) * factor
    }, [])

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const onScroll = () => {
            const rect = section.getBoundingClientRect()
            const sectionHeight = section.offsetHeight
            const viewportHeight = window.innerHeight
            const scrollableDistance = sectionHeight - viewportHeight

            if (scrollableDistance <= 0) return

            const scrolled = -rect.top
            const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance))

            const contentWidth = 6100
            const maxTranslate = contentWidth - window.innerWidth + 100

            targetX.current = progress * maxTranslate
        }

        const animate = () => {
            const diff = Math.abs(targetX.current - currentX.current)
            const factor = diff > 50 ? 0.12 : 0.06
            currentX.current = lerp(currentX.current, targetX.current, factor)

            if (diff < 0.5) {
                currentX.current = targetX.current
            }

            setTranslateX(currentX.current)
            animFrameRef.current = requestAnimationFrame(animate)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        animFrameRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('scroll', onScroll)
            cancelAnimationFrame(animFrameRef.current)
        }
    }, [lerp])

    return { sectionRef, translateX }
}
