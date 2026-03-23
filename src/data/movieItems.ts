export type MovieItem = {
    id: string
    orientation: 'horizontal' | 'vertical'
    top: number   // percentage from top of container
    left: number  // px offset from left
    image: string
    themeColor?: string
}

export const MOVIE_ITEMS: MovieItem[] = [
    { id: '01', orientation: 'horizontal', top: 52, left: 100, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 24/1.webp' },
    { id: '02', orientation: 'horizontal', top: 8, left: 260, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/2.webp' },
    { id: '03', orientation: 'horizontal', top: 48, left: 620, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 24/3.webp' },
    { id: '04', orientation: 'vertical', top: 2, left: 900, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/4.webp' },
    { id: '05', orientation: 'horizontal', top: 30, left: 1080, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 24/5.webp' },
    { id: '06', orientation: 'vertical', top: 5, left: 1550, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/6.webp' },
    { id: '07', orientation: 'horizontal', top: 50, left: 1700, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 24/7.webp' },
    { id: '08', orientation: 'horizontal', top: 25, left: 2080, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/8.webp' },
    { id: '09', orientation: 'vertical', top: 42, left: 2380, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/9.webp' },
    { id: '10', orientation: 'horizontal', top: 8, left: 2560, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/10.webp' },
    { id: '11', orientation: 'horizontal', top: 50, left: 2920, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/11.webp' },
    { id: '12', orientation: 'vertical', top: 4, left: 3260, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/12.webp' },
    { id: '13', orientation: 'horizontal', top: 35, left: 3425, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/13.webp' },
    { id: '14', orientation: 'horizontal', top: 5, left: 3820, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/14.webp' },
    { id: '15', orientation: 'vertical', top: 38, left: 4080, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/15.webp' },
    { id: '16', orientation: 'horizontal', top: 8, left: 4320, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/16.webp' },
    { id: '17', orientation: 'horizontal', top: 52, left: 4700, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/17.webp' },
    { id: '18', orientation: 'vertical', top: 2, left: 5050, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/18.webp' },
    { id: '19', orientation: 'horizontal', top: 43, left: 5220, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 23/19.webp' },
    { id: '20', orientation: 'horizontal', top: 20, left: 5620, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/20.webp' },
    { id: '21', orientation: 'vertical', top: 55, left: 5950, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/21.webp' },
    { id: '22', orientation: 'horizontal', top: 10, left: 6250, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/22.webp' },
    { id: '23', orientation: 'horizontal', top: 40, left: 6650, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/23.webp' },
    { id: '24', orientation: 'vertical', top: 5, left: 7000, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/24.webp' },
    { id: '25', orientation: 'horizontal', top: 52, left: 7300, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/25.webp' },
    { id: '26', orientation: 'horizontal', top: 15, left: 7700, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/26.webp' },
    { id: '27', orientation: 'vertical', top: 35, left: 8100, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/27.webp' },
    { id: '28', orientation: 'horizontal', top: 8, left: 8400, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/28.webp' },
    { id: '29', orientation: 'horizontal', top: 50, left: 8800, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/29.webp' },
    { id: '30', orientation: 'vertical', top: 2, left: 9150, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/30.webp' },
    { id: '31', orientation: 'horizontal', top: 45, left: 9450, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/31.webp' },
    { id: '32', orientation: 'horizontal', top: 12, left: 9850, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/32.webp' },
    { id: '33', orientation: 'horizontal', top: 35, left: 10250, image: 'https://cdn.svcehighways.in/assets/glimpses/Highways 25/33.webp' },
]
