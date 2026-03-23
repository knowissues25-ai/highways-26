import { useMemo } from 'react';
import { glimpsesImages } from '../data/glimpsesData';

const Glimpses = () => {
    // Split images into 3 groups for the 3 rows
    const rowCount = 3;
    
    // Create 3 varied rows with shuffled images
    const rows = useMemo(() => {
        const shuffled = [...glimpsesImages].sort(() => Math.random() - 0.5);
        const imagesPerRow = Math.ceil(shuffled.length / rowCount);
        
        return [
            shuffled.slice(0, imagesPerRow),
            shuffled.slice(imagesPerRow, imagesPerRow * 2),
            shuffled.slice(imagesPerRow * 2)
        ];
    }, []);

    return (
        <section id="glimpses" className="glimpses-section" style={{ paddingTop: '180px', paddingBottom: '150px', background: '#030303', position: 'relative', overflow: 'hidden' }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '100px', position: 'relative', zIndex: 10 }}>
                <span style={{ color: '#ffb7c5', fontSize: '1rem', fontWeight: 900, letterSpacing: '12px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>THE RECOLLECTIONS</span>
                <h2 className="section-title center" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 950, color: 'white', letterSpacing: '-5px', textTransform: 'uppercase', lineHeight: 0.8 }}>PAST <span style={{ color: '#ffb7c5' }}>GLIMPSES</span></h2>
            </div>
            
            <div className="glimpses-rows-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {rows.map((rowImages, index) => {
                    // For first (index 0) and third (index 2) lines: move left to right (ltr)
                    // For second (index 1) line: move right to left (rtl)
                    const direction = index % 2 === 0 ? 'scroll-ltr' : 'scroll-rtl';
                    return (
                    <div key={index} className="glimpses-ticker" style={{ overflow: 'hidden' }}>
                        <div className="ticker-track" style={{ 
                            display: 'flex', 
                            gap: '15px', 
                            width: 'max-content',
                            animation: `${direction} ${rowImages.length * 2.5}s linear infinite`
                        }}>
                            {/* Duplicate images multiple times for seamless infinity */}
                            {[...rowImages, ...rowImages, ...rowImages, ...rowImages].map((img, i) => (
                                <div key={i} className="glimpse-card" style={{ 
                                    width: 'auto', 
                                    height: '266px', 
                                    borderRadius: '0', 
                                    overflow: 'hidden',
                                    flexShrink: 0,
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'border-color 0.4s ease',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    background: '#080808'
                                }}>
                                    <img src={`https://cdn.svcehighways.in/assets/glimpses/${img}`} alt="Highways Moment" loading="lazy" style={{ width: 'auto', height: '100%', objectFit: 'contain', display: 'block' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )})}
            </div>

            <style>{`
                @keyframes scroll-ltr {
                    0% { transform: translateX(calc(-25% - 3.75px)); }
                    100% { transform: translateX(0); }
                }
                @keyframes scroll-rtl {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-25% - 3.75px)); }
                }
                .glimpse-card:hover {
                    border-color: #ffb7c5;
                    z-index: 10;
                }
                
                @media (max-width: 768px) {
                    .glimpse-card { width: auto !important; height: 180px !important; }
                    .section-header h2 { font-size: 3rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Glimpses;
