import { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { applyCursorTheme } from '../lib/cursorTheme';

import { allEvents } from '../data/eventsData';


const categoriesList = ["All", "Music and Dance", "Quizzing, Debate and Literary", "Performance Arts", "Cinematic and Visual Arts", "Quizzes and Entertainment", "Innovation, Tech and Gaming"];
const dayThemes = [
  {
    id: 1,
    name: "Peace",
    label: "THE SPARK",
    color: "#e8729a",
    kanji: "始",
    bgImage: "https://images.unsplash.com/photo-1522383225053-ed111181a951?q=80&w=2000&auto=format&fit=crop",
    tagline: "WHERE THE ROAD BEGINS",
    style: "cybernetic",
    displayFont: '"Orbitron", sans-serif',
    bodyFont: '"Rajdhani", sans-serif',
    buttonText: "#1c0f14"
  },
  {
    id: 2,
    name: "Balance",
    label: "THE VELOCITY",
    color: "#f5e6c8",
    kanji: "速",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    tagline: "RIDING THE LIGHTNING",
    style: "cybernetic",
    displayFont: '"Orbitron", sans-serif',
    bodyFont: '"Rajdhani", sans-serif',
    buttonText: "#1c0f14"
  },
  {
    id: 3,
    name: "Inversion",
    label: "THE LEGEND",
    color: "#ff0000",
    kanji: "終",
    bgImage: "https://images.unsplash.com/photo-1516280440623-df9cb83e4776?q=80&w=2000&auto=format&fit=crop",
    tagline: "BEYOND THE HORIZON",
    style: "cybernetic",
    displayFont: '"Orbitron", sans-serif',
    bodyFont: '"Rajdhani", sans-serif',
    buttonText: "#ffffff"
  }
];




const Events = () => {
  const isLocked = false;
  const [searchParams, setSearchParams] = useSearchParams();
  
  const filter = useMemo(() => {
    return {
      category: searchParams.get('category') || "All",
      day: parseInt(searchParams.get('day') || "1", 10)
    };
  }, [searchParams]);

  const setFilterState = (newFilter: { category?: string, day?: number }) => {
    setSearchParams(prev => {
        const next = new URLSearchParams(prev);
        if (newFilter.category !== undefined) next.set('category', newFilter.category);
        if (newFilter.day !== undefined) next.set('day', newFilter.day.toString());
        return next;
    }, { replace: true });
  };

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, -120]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);


  const springX = useSpring(0, { stiffness: 100, damping: 30 });
  const springY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX - 400);
      springY.set(e.clientY - 400);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  const activeTheme = useMemo(() => {
    return dayThemes.find(t => t.id === filter.day) || dayThemes[0];
  }, [filter.day]);

  useEffect(() => {
    applyCursorTheme({ accent: activeTheme.color });
  }, [activeTheme.color]);

  const filteredEvents = useMemo(() => {
    const categoryOrder = [
      "Music and Dance",
      "Quizzing, Debate and Literary",
      "Performance Arts",
      "Cinematic and Visual Arts",
      "Quizzes and Entertainment",
      "Innovation, Tech and Gaming"
    ];

    return allEvents
      .filter(event => {
        const categoryMatch = filter.category === "All" || event.category === filter.category;
        const dayMatch = filter.day === 0 || event.day === filter.day;
        return categoryMatch && dayMatch;
      })
      .sort((a, b) => {
        // 1. Sort by Day
        if (a.day !== b.day) return a.day - b.day;

        // 2. Sort by Category Order
        const orderA = categoryOrder.indexOf(a.category);
        const orderB = categoryOrder.indexOf(b.category);
        if (orderA !== orderB) return orderA - orderB;

        // 3. Sort by Title Alphabetically
        return a.title.localeCompare(b.title);
      });
  }, [filter]);


  return (
    <section className={`events-cinematic-page style-${activeTheme.style}`} style={{
      paddingTop: '180px',
      minHeight: '100vh',
      paddingBottom: '150px',
      backgroundImage: `url(https://cdn.svcehighways.in/background.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: activeTheme.bodyFont,
    }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <motion.div style={{ position: 'fixed', width: '800px', height: '800px', background: `radial-gradient(circle, ${activeTheme.color}10 0%, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)', x: springX, y: springY }} />

      <div className="container">
        <motion.div className="events-header-premium" style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative', y: yHero, opacity: opacityHero }}>
          <AnimatePresence mode="wait">
            <motion.div key={filter.day} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
              <span style={{ color: activeTheme.color, fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '1rem', letterSpacing: '8px' }}>{activeTheme.tagline}</span>
              <h1 style={{
                fontSize: 'clamp(5rem, 15vw, 10rem)',
                fontWeight: 950,
                textTransform: 'uppercase',
                letterSpacing: filter.day === 1 ? '10px' : (filter.day === 3 ? '-8px' : '-4px'),
                lineHeight: 0.8,
                transition: 'all 1s ease',
                fontFamily: activeTheme.displayFont
              }}>
                EVENT <span style={{ color: activeTheme.color, transition: 'all 1s ease' }}>SAGA</span>
              </h1>
            </motion.div>
          </AnimatePresence>

          <div style={{ position: 'absolute', width: '200%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1, opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
            <span style={{ fontSize: '20vw', fontWeight: 950, color: 'transparent', WebkitTextStroke: `2px ${activeTheme.color}`, opacity: 0.3, transition: 'all 1.5s ease' }}>{activeTheme.name}</span>
          </div>
        </motion.div>

        {/* Day Chapters (Restored) */}
        <div className="day-navigator" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '6rem', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
          {dayThemes.map((day) => (
            <motion.button key={day.id} onClick={() => setFilterState({ day: day.id })} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
              style={{
                background: filter.day === day.id ? day.color : 'rgba(255,255,255,0.02)',
                color: filter.day === day.id ? day.buttonText : 'rgba(255,255,255,0.55)',
                border: `1px solid ${filter.day === day.id ? day.color : 'rgba(255,255,255,0.05)'}`,
                padding: '1.5rem 2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '220px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)', backdropFilter: 'blur(20px)', boxShadow: filter.day === day.id ? `0 20px 40px ${day.color}44` : 'none', fontFamily: day.displayFont
              }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '3px', opacity: 0.6, marginBottom: '0.4rem' }}>{day.label}</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 950 }}>{day.name}</span>
            </motion.button>
          ))}
        </div>

        <div style={{ position: 'relative' }}>
          {isLocked && (
            <div style={{
              position: 'relative',
              zIndex: 500,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(60px) saturate(1.5)',
              textAlign: 'center',
              padding: '10rem 2.5rem',
              borderRadius: '80px',
              minHeight: '800px',
              border: '1px solid rgba(255,255,255,0.03)',
              overflow: 'hidden',
              boxShadow: `0 0 100px ${activeTheme.color}11`
            }}>
              {/* Dramatic Symbolic Lock - No Text UI */}
              <div style={{ position: 'relative', width: '300px', height: '300px', perspective: '1000px' }}>
                {/* Outer Rotating Rings */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', inset: 0, border: `2px solid ${activeTheme.color}22`, borderRadius: '50%', borderTopColor: activeTheme.color, filter: 'blur(1px)' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', inset: '20px', border: `1px dashed ${activeTheme.color}33`, borderRadius: '50%', filter: 'blur(2px)' }} />

                {/* Inner Orbitals */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotateX: [0, 360],
                      rotateY: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 10 + i * 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      inset: '60px',
                      border: `1px solid ${activeTheme.color}44`,
                      borderRadius: '50%',
                      opacity: 0.3
                    }}
                  />
                ))}

                {/* The Core Singularity */}
                <div style={{ position: 'absolute', inset: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.8, 0.4],
                      filter: [`blur(10px) drop-shadow(0 0 20px ${activeTheme.color})`, `blur(15px) drop-shadow(0 0 50px ${activeTheme.color})`, `blur(10px) drop-shadow(0 0 20px ${activeTheme.color})`]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: '60px',
                      height: '60px',
                      background: activeTheme.color,
                      borderRadius: '50%',
                      zIndex: 2
                    }}
                  />
                  {/* Glitch Overlay Over Core */}
                  <motion.div
                    animate={{
                      opacity: [0, 0.2, 0, 0.4, 0],
                      x: [-5, 5, -5, 10, -10, 0],
                      scaleX: [1, 2, 0.5, 1.5, 1]
                    }}
                    transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
                    style={{ position: 'absolute', width: '150px', height: '2px', background: 'white', filter: 'blur(10px)', zIndex: 3 }}
                  />
                </div>
              </div>

              {/* Coming Soon Text Element */}
              <div style={{ marginTop: '8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    color: activeTheme.color,
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: 950,
                    letterSpacing: '15px',
                    textTransform: 'uppercase',
                    textShadow: `0 0 30px ${activeTheme.color}88`
                  }}
                >
                  COMING SOON
                </motion.div>
              </div>

              {/* Minimal Symbolic Footer */}
              <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', opacity: 0.3 }}>
                <i className="fas fa-barcode" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
                <div style={{ height: '40px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                <i className="fas fa-microchip" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
                <div style={{ height: '40px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                <i className="fas fa-fingerprint" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
              </div>

              {/* Scanning Glitch Effect */}
              <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '300px',
                  background: `linear-gradient(transparent, ${activeTheme.color}05, transparent)`,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
            </div>
          )}

          <div style={{ opacity: isLocked ? 0 : 1, pointerEvents: isLocked ? 'none' : 'auto', visibility: isLocked ? 'hidden' : 'visible', height: isLocked ? '600px' : 'auto', overflow: 'hidden' }}>
            
            {/* Category Carousel (Restored) */}
            <div className="classification-carousel" style={{ marginBottom: '8rem', overflowX: 'auto', paddingBottom: '1.5rem', scrollbarWidth: 'none' }}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', minWidth: 'max-content', padding: '0 2rem' }}>
                {categoriesList.map(c => (
                  <motion.button key={c} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setFilterState({ category: c })}
                    style={{
                      background: filter.category === c ? `${activeTheme.color}` : 'rgba(255,255,255,0.03)',
                      color: filter.category === c ? activeTheme.buttonText : 'rgba(255,255,255,0.72)',
                      border: `1px solid ${filter.category === c ? activeTheme.color : 'rgba(255,255,255,0.1)'}`,
                      padding: '0.8rem 2.5rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer', transition: 'all 0.4s ease', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont
                    }}>{c}</motion.button>
                ))}
              </div>
            </div>


            <motion.div layout className="events-grid-system" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
              <AnimatePresence mode="popLayout">
                {filteredEvents.map((event, index) => (
                  <motion.div layout key={event.id} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, margin: "-20px" }} transition={{ duration: 0.6, delay: (index % 4) * 0.1 }} className="event-premium-card"
                    style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '30px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', border: `1px solid ${activeTheme.color}2f`, backdropFilter: 'blur(20px)' }}>
                    
                    {/* Poster Container */}
                    <div style={{ width: '100%', aspectRatio: '4/5', position: 'relative', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      {event.image ? (
                        <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <i className="fas fa-image" style={{ fontSize: '3rem', color: activeTheme.color, opacity: 0.1 }}></i>
                        </div>
                      )}
                    </div>

                    {/* View Details Box (1cm height below poster) */}
                    <div style={{ 
                      height: '45px', 
                      background: 'rgba(255,255,255,0.03)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      borderTop: `1px solid ${activeTheme.color}11`
                    }}>
                      <Link to={`/events/${event.slug}`} style={{ textDecoration: 'none', width: '100%', height: '100%' }}>
                        <motion.button 
                          whileHover={{ backgroundColor: `${activeTheme.color}22` }}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            background: 'transparent', 
                            color: activeTheme.color, 
                            border: 'none', 
                            fontWeight: 900, 
                            fontSize: '0.65rem', 
                            letterSpacing: '3px', 
                            textTransform: 'uppercase', 
                            fontFamily: activeTheme.displayFont,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                          }}>
                          VIEW DETAILS
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>


      <style>{`
                .container { max-width: 1700px !important; width: 95%; margin: 0 auto; }
                .event-premium-card:hover { border-color: ${activeTheme.color}66 !important; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 40px ${activeTheme.color}15; transform: translateY(-8px) !important; }

              .events-cinematic-page {
                font-family: ${activeTheme.bodyFont};
              }

              .events-cinematic-page h1,
              .events-cinematic-page h2,
              .events-cinematic-page h3,
              .events-cinematic-page h4,
              .events-cinematic-page .day-navigator button,
              .events-cinematic-page .classification-carousel button,
              .events-cinematic-page .card-content-body button,
              .events-cinematic-page .events-header-premium > div > span {
                font-family: ${activeTheme.displayFont};
              }
                
                /* Mobile Navigation Scrollbar Hiding */
                .day-navigator::-webkit-scrollbar, .classification-carousel::-webkit-scrollbar { display: none; }
                .day-navigator, .classification-carousel { -ms-overflow-style: none; scrollbar-width: none; }

                /* Global Cybernetic Typography */
                .style-cybernetic h1 { font-family: "Orbitron", sans-serif !important; font-weight: 900 !important; text-shadow: 0 0 15px ${activeTheme.color}88, 0 0 30px ${activeTheme.color}44; letter-spacing: 2px !important; }
                .style-cybernetic h2 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }
                .style-cybernetic h3 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }
                .style-cybernetic h4 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }

                @media (max-width: 1400px) { .events-grid-system { grid-template-columns: repeat(3, 1fr) !important; } }
                @media (max-width: 1024px) { .events-grid-system { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; } }
                
                @media (max-width: 768px) {
                    .events-cinematic-page { padding-top: 100px !important; padding-bottom: 80px !important; }
                    .events-header-premium { margin-bottom: 4rem !important; }
                    .events-header-premium h1 { font-size: 3rem !important; letter-spacing: 0 !important; }
                    .events-header-premium span { font-size: 0.6rem !important; letter-spacing: 4px !important; }
                    
                    .day-navigator { 
                        justify-content: flex-start !important; 
                        overflow-x: auto !important; 
                        padding: 0 1.5rem 1rem !important; 
                        gap: 1rem !important;
                    }
                    .day-navigator button { min-width: 160px !important; padding: 1rem !important; border-radius: 12px !important; }
                    .day-navigator button span:last-child { font-size: 1.1rem !important; }
                    
                    .classification-carousel { margin-bottom: 3rem !important; }
                    .classification-carousel > div { justify-content: flex-start !important; padding: 0 1rem !important; gap: 0.6rem !important; }
                    .classification-carousel button { padding: 0.6rem 1.5rem !important; font-size: 0.7rem !important; }

                    .events-grid-system { 
                        grid-template-columns: 1fr !important; 
                        gap: 1.5rem !important; 
                        padding: 0 1.5rem !important;
                    }
                    .event-premium-card { height: auto !important; min-height: 300px !important; border-radius: 20px !important; }
                    .card-visual-header { height: 40px !important; }
                    .card-content-body { padding: 1.5rem !important; }
                    .card-content-body h3 { font-size: 1.4rem !important; line-height: 1.2 !important; margin: 0.5rem 0 !important; }
                    .card-content-body span { font-size: 0.65rem !important; letter-spacing: 3px !important; }
                    
                    /* Lock Screen Mobile Adjustments */
                    div[style*="minHeight: '800px'"] { min-height: 600px !important; padding: 4rem 1.5rem !important; }
                    div[style*="width: '300px'"] { width: 200px !important; height: 200px !important; }
                    div[style*="inset: '100px'"] { inset: 60px !important; }
                    div[style*="marginTop: '5rem'"] { gap: 1.5rem !important; margin-top: 3rem !important; }
                }

                @media (max-width: 900px) {
                    .event-modal-container {
                        flex-direction: column !important;
                        overflow-y: auto !important;
                    }
                    .event-modal-image-panel {
                        width: 100% !important;
                        height: 250px !important;
                        flex-shrink: 0 !important;
                    }
                    .modal-gradient-overlay {
                        background: linear-gradient(to bottom, transparent, #0a0a0a) !important;
                    }
                    .event-modal-content-panel {
                        width: 100% !important;
                        padding: 2rem !important;
                        overflow-y: visible !important;
                    }
                }
            `}</style>
    </section>
  );
};

export default Events;
