import type { MovieItem } from '@/data/movieItems'

type MovieTileProps = {
    item: MovieItem
}

export default function MovieTile({ item }: MovieTileProps) {
    const isHorizontal = item.orientation === 'horizontal'

    return (
        <button
            type="button"
            aria-label={`View item ${item.id}`}
            style={{
                top: `${item.top}%`,
                left: `${item.left}px`,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}
            className={[
                'absolute cursor-pointer overflow-hidden rounded-[40px] bg-gray-900 border-2 border-white/5',
                'transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]',
                'lg:hover:scale-[1.08] lg:hover:border-white/20 lg:hover:z-50 lg:hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)]',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50',
                isHorizontal
                    ? 'h-[250px] w-[380px] lg:h-[320px] lg:w-[480px]'
                    : 'h-[400px] w-[260px] lg:h-[500px] lg:w-[340px]',
            ].join(' ')}
        >
            <img
                src={item.image}
                alt={`Highways Moment ${item.id}`}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </button>
    )
}
