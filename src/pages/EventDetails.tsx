import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { allEvents } from '../data/eventsData';
import { applyCursorTheme } from '../lib/cursorTheme';

const EventDetails = () => {
    const { eventSlug } = useParams<{ eventSlug: string }>();
    const navigate = useNavigate();

    const event = useMemo(() => {
        return allEvents.find(e => e.slug === eventSlug || (e.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') === eventSlug));
    }, [eventSlug]);

    useEffect(() => {
        if (event) {
            applyCursorTheme({ accent: event.color || '#ff4d4d' });
        }
    }, [event]);

    if (!event) {
        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: 'white' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>EVENT NOT FOUND</h1>
                <button onClick={() => navigate('/events')} style={{ background: 'transparent', color: '#ff4d4d', cursor: 'pointer', textDecoration: 'none', border: '1px solid #ff4d4d', padding: '1rem 2rem', borderRadius: '50px', fontFamily: '"Orbitron", sans-serif' }}>BACK TO EVENTS</button>
            </div>
        );
    }

    const dayThemes = [
        { id: 1, color: "#e8729a", displayFont: '"Orbitron", sans-serif', bodyFont: '"Rajdhani", sans-serif', buttonText: "#1c0f14" },
        { id: 2, color: "#f5e6c8", displayFont: '"Orbitron", sans-serif', bodyFont: '"Rajdhani", sans-serif', buttonText: "#1c0f14" },
        { id: 3, color: "#ff0000", displayFont: '"Orbitron", sans-serif', bodyFont: '"Rajdhani", sans-serif', buttonText: "#ffffff" }
    ];

    const activeTheme = dayThemes.find(t => t.id === event.day) || dayThemes[0];

    return (
        <section className="event-details-page" style={{
            paddingTop: '120px',
            minHeight: '100vh',
            paddingBottom: '100px',
            backgroundImage: `url(https://cdn.svcehighways.in/background.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            position: 'relative',
            fontFamily: activeTheme.bodyFont,
            color: 'white'
        }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <button 
                    onClick={() => navigate(-1)} 
                    aria-label="Back to events"
                    style={{ 
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        background: 'rgba(0,0,0,0.72)',
                        border: `1px solid ${activeTheme.color}66`,
                        color: activeTheme.color,
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 100,
                        backdropFilter: 'blur(10px)',
                        boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${activeTheme.color}33`,
                        fontSize: '2.5rem',
                        fontWeight: 950,
                        lineHeight: 1,
                        fontFamily: activeTheme.displayFont,
                        transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)'
                    }}
                >
                    <span style={{ marginTop: '-4px' }}>×</span>
                </button>

                <div style={{ marginBottom: '3rem' }}>
                    <span style={{ color: activeTheme.color, fontSize: '0.9rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont }}>{event.category}</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 950, margin: '1rem 0', lineHeight: 1.1, fontFamily: activeTheme.displayFont }}>{event.title}</h1>

                    {/* Top Hero: Registration & Prize Pool */}
                    <div className="top-hero-actions" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2.5rem', alignItems: 'stretch' }}>
                        <motion.button 
                            whileHover={{ scale: 1.05, backgroundColor: activeTheme.color, color: activeTheme.buttonText, boxShadow: `0 30px 60px ${activeTheme.color}55` }} 
                            whileTap={{ scale: 0.95 }}
                            onClick={() => event.regLink && window.open(event.regLink, '_blank')}
                            className={event.regLink ? 'cursor-pointer' : 'cursor-not-allowed'}
                            style={{ 
                                flex: '2', 
                                minWidth: '280px',
                                padding: '1.5rem',
                                borderRadius: '24px',
                                background: event.regLink ? activeTheme.color : 'rgba(255,255,255,0.05)', 
                                border: 'none',
                                color: event.regLink ? activeTheme.buttonText : 'rgba(255,255,255,0.3)',
                                fontWeight: 950,
                                fontSize: '1.2rem',
                                letterSpacing: '3px',
                                transition: 'all 0.3s ease',
                                fontFamily: activeTheme.displayFont,
                                textTransform: 'uppercase',
                                boxShadow: event.regLink ? `0 20px 40px ${activeTheme.color}33` : 'none'
                            }}
                        >
                            {event.regLink ? "REGISTER NOW" : "REGISTRATION SOON"}
                        </motion.button>
                        {event.prizePool && (
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem 2.5rem', borderRadius: '24px', border: `2px solid ${activeTheme.color}33`, flex: '1', minWidth: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Prize Pool</p>
                                <p style={{ color: activeTheme.color, fontWeight: 950, fontSize: '1.6rem', lineHeight: 1 }}>{event.prizePool}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="event-details-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem' }}>
                    {/* Left Column: Info */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '3rem' }}>
                            <h3 style={{ color: activeTheme.color, fontSize: '1rem', fontWeight: 900, letterSpacing: '3px', marginBottom: '1.2rem', fontFamily: activeTheme.displayFont }}>DESCRIPTION</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{event.description}</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                            {event.rules && event.rules.length > 0 && (
                                <div>
                                    <h3 style={{ 
                                        color: activeTheme.color, 
                                        fontSize: '1rem', 
                                        fontWeight: 900, 
                                        letterSpacing: '3px', 
                                        marginBottom: '1.2rem', 
                                        fontFamily: activeTheme.displayFont 
                                    }}>
                                        RULES & GUIDELINES
                                    </h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {event.rules.map((rule, i) => (
                                            <div 
                                                key={i} 
                                                style={{ 
                                                    display: 'flex', 
                                                    gap: '1.2rem', 
                                                    color: 'rgba(255,255,255,0.6)', 
                                                    fontSize: '1rem', 
                                                    lineHeight: 1.6 
                                                }}
                                            >
                                                <span style={{ 
                                                    color: activeTheme.color, 
                                                    fontWeight: 900, 
                                                    fontSize: '0.8rem', 
                                                    minWidth: '25px', 
                                                    paddingTop: '4px' 
                                                }}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>

                                                <span>{rule}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div>
                                <h3 style={{ color: activeTheme.color, fontSize: '1rem', fontWeight: 900, letterSpacing: '3px', marginBottom: '1.2rem', fontFamily: activeTheme.displayFont }}>CONTACT ORGANIZERS</h3>
                                <div style={{ display: 'flex', gap: '2rem 4rem', flexWrap: 'wrap' }}>
                                    {event.pocs.map((poc, i) => (
                                        <div key={i}>
                                            <p style={{ color: 'white', fontWeight: 800, fontSize: '1rem', marginBottom: '0.2rem' }}>{poc.name}</p>
                                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>{poc.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Image and Logistics */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        {/* Image removed as per user request */}


                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ color: activeTheme.color, fontSize: '1rem', fontWeight: 900, letterSpacing: '3px', marginBottom: '1.5rem', fontFamily: activeTheme.displayFont }}>LOGISTICS</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Venue</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.location}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Time & Date</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.time} | {event.date}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Registration</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.regType} {event.regFee && `(${event.regFee})`}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Team Format</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.teamSize}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <style>{`
                .container { width: 95%; max-width: 1400px; margin: 0 auto; }
                @media (max-width: 1024px) {
                    .event-details-grid { 
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .event-details-grid > div:nth-child(2) { 
                        order: -1; 
                    }
                }
                @media (max-width: 768px) {
                    .event-details-page { padding-top: 80px !important; }
                    .top-hero-actions button { width: 100% !important; flex: none !important; }
                    .top-hero-actions div { width: 100% !important; flex: none !important; }
                    h1 { font-size: 2.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default EventDetails;
