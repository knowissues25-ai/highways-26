import { MOVIE_ITEMS } from '@/data/movieItems'
import MovieTile from './MovieTile'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

export default function MovieGallery() {
    const { sectionRef, translateX } = useHorizontalScroll()

    return (
        <>
            <div ref={sectionRef} className="relative h-[800vh]">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full will-change-transform"
                        style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
                    >
                        <div className="relative h-full w-[11000px] pt-20 lg:pt-24 flex items-center">
                            {MOVIE_ITEMS.map((item) => (
                                <MovieTile key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
