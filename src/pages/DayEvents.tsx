import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const dayThemes = {
    day1: {
        name: "Day 01",
        subName: "AWAKENING",
        color: "#ffb7c5",
        bg: "rgba(255, 183, 197, 0.05)",
        kanji: "覚醒"
    },
    day2: {
        name: "Day 02",
        subName: "ASCENSION",
        color: "#ffffff",
        bg: "rgba(255, 255, 255, 0.05)",
        kanji: "上昇"
    },
    day3: {
        name: "Day 03",
        subName: "LEGACY",
        color: "#ff0000",
        bg: "rgba(255, 0, 0, 0.05)",
        kanji: "遺産"
    }
};

const DayEvents = () => {
    const { dayId } = useParams<{ dayId: string }>();
    const isLocked = true; // Still locked as per requirement

    // Support both day1/day2/day3 and IGNITION/OVERDRIVE/DESTINY
    const getTheme = () => {
        const id = dayId?.toUpperCase();
        if (id === 'IGNITION' || id === 'DAY1' || id === '1') return dayThemes.day1;
        if (id === 'OVERDRIVE' || id === 'DAY2' || id === '2') return dayThemes.day2;
        if (id === 'DESTINY' || id === 'DAY3' || id === '3') return dayThemes.day3;
        return dayThemes.day1;
    };

    const theme = getTheme();

    return (
        <section className="day-events-page" style={{ 
            paddingTop: '150px', 
            minHeight: '100vh', 
            background: theme.color === "#ff0000" ? '#080000' : (theme.color === "#ffffff" ? '#000810' : '#030303'),
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="back-link" style={{ marginBottom: '2rem' }}>
                    <Link to="/events" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', letterSpacing: '2px' }}>
                        <i className="fas fa-arrow-left"></i> BACK TO DOMAINS
                    </Link>
                </div>

                <div className="day-hero" style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        className="day-kanji" 
                        style={{ fontSize: 'min(30vw, 20rem)', color: theme.color, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 900, pointerEvents: 'none', fontFamily: '"Noto Sans JP", sans-serif' }}
                    >
                        {theme.kanji}
                    </motion.span>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <h2 style={{ color: theme.color, fontSize: '1rem', fontWeight: 900, letterSpacing: '8px', marginBottom: '1rem', textTransform: 'uppercase' }}>{theme.name}</h2>
                        <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 950, letterSpacing: '4px', textTransform: 'uppercase' }}>{theme.subName}</h1>
                    </motion.div>
                </div>

                <div style={{ position: 'relative', marginTop: '4rem' }}>
                    {isLocked && (
                        <div style={{
                            position: 'relative',
                            zIndex: 500,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(80px)',
                            textAlign: 'center',
                            padding: '10rem 2rem',
                            borderRadius: '50px',
                            minHeight: '700px',
                            border: '1px solid rgba(255,255,255,0.02)',
                            overflow: 'hidden',
                            boxShadow: `0 0 100px ${theme.color}05`
                        }}>
                             {/* Abstract Cyber Lock */}
                             <div style={{ position: 'relative', width: '280px', height: '280px' }}>
                                 {/* Rotating Hexagon Frame */}
                                 <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{ 
                                        position: 'absolute', 
                                        inset: 0, 
                                        border: `1px solid ${theme.color}22`,
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                    }}
                                 />
                                 
                                 {/* Inner Core Pulsing Signal */}
                                 <motion.div
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{ 
                                        position: 'absolute', 
                                        inset: '80px', 
                                        background: theme.color,
                                        borderRadius: '10px',
                                        transform: 'rotate(45deg)',
                                        filter: `blur(20px) drop-shadow(0 0 30px ${theme.color})`
                                    }}
                                 />

                                 {/* Data Stream Indicators */}
                                 {[...Array(4)].map((_, i) => (
                                     <motion.div
                                        key={i}
                                        animate={{ height: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                                        style={{ 
                                            position: 'absolute', 
                                            left: `${20 + i * 20}%`, 
                                            top: '10%', 
                                            width: '2px', 
                                            background: theme.color,
                                            opacity: 0.1
                                        }}
                                     />
                                 ))}
                             </div>

                             {/* Symbolic System Status */}
                             <div style={{ marginTop: '5rem', display: 'flex', gap: '3rem', opacity: 0.15 }}>
                                 <i className="fas fa-eye-slash" style={{ fontSize: '2rem', color: theme.color }}></i>
                                 <div style={{ height: '40px', width: '1px', background: 'white' }}></div>
                                 <i className="fas fa-lock" style={{ fontSize: '2rem', color: theme.color }}></i>
                             </div>

                             {/* Scanning Interference */}
                             <motion.div 
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
                                style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }}
                             />
                        </div>
                    )}
                </div>
            </div>

            {/* Background Decorations */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '20%', left: '10%', width: '400px', height: '400px', background: `radial-gradient(circle, ${theme.color}11 0%, transparent 70%)`, filter: 'blur(80px)' }} />
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', background: `radial-gradient(circle, ${theme.color}08 0%, transparent 70%)`, filter: 'blur(100px)' }} />
            </div>

            <style>
                {`
                    .container { max-width: 1400px; margin: 0 auto; padding: 0 5%; }
                    @media (max-width: 768px) {
                        .day-events-page { padding-top: 100px !important; }
                        .day-hero { margin-bottom: 3rem !important; }
                        .day-kanji { font-size: 50vw !important; opacity: 0.03 !important; }
                        
                        div[style*="minHeight: '700px'"] { 
                            min-height: 500px !important; 
                            padding: 4rem 1.5rem !important; 
                            border-radius: 30px !important;
                        }
                        div[style*="width: '280px'"] { width: 180px !important; height: 180px !important; }
                        div[style*="inset: '80px'"] { inset: 50px !important; }
                    }
                `}
            </style>
        </section>
    );
};

export default DayEvents;
