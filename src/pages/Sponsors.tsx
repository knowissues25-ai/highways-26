import { motion } from 'framer-motion';

const sponsorsData = [
    { name: "Greenstar", tier: "Special Sponsor", logo: "https://cdn.svcehighways.in/assets/logos/green star.png", desc: "Official Special Sponsor.", url: "https://applicationsolutions.com.au/environmental-sustainable-design/green-star/" },
    { name: "Gamistry", tier: "Events Sponsor", logo: "https://cdn.svcehighways.in/assets/logos/gamistry.png", desc: "Powering the events.", url: "https://www.gameistry.in/" },
    { name: "Think Music", tier: "Events & DJ Sponsor", logo: "https://cdn.svcehighways.in/assets/logos/think music.jpg", desc: "Events & DJ Sponsor.", url: "https://www.thinkmusic.in/" },
    { name: "Xmold Polymers", tier: "Events Sponsor", logo: "https://cdn.svcehighways.in/assets/logos/xmold.png", desc: "Proud sponsor of Highways'26.", url: "https://xmoldpolymers.com/" }
];

const Sponsors = () => {
    return (
        <section className="sponsors-page">
            <div className="sponsors-container">
                <div className="sponsors-header">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="sponsors-uptitle"
                    >
                        THE PATRONS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="sponsors-title"
                    >
                        THE PILLARS OF HIGHWAYS
                    </motion.h1>
                    <p className="sponsors-subtitle">Empowering the spirit of cultural fusion and artistic expression.</p>
                </div>

                <div className="sponsors-showcase">
                    {sponsorsData.map((sponsor, idx) => (
                        <motion.a
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={sponsor.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="sponsor-card"
                        >
                            <div className="sponsor-logo-wrap">
                                {/* The Circle Mask: This ensures NO squares or rectangles */}
                                <div 
                                    className="logo-circle-mask"
                                    style={{
                                        // Standardizing the circle size for all sponsors
                                        width: '180px',
                                        height: '180px',
                                        // Specific background fixes for transparent images
                                        background: sponsor.name === "Greenstar" ? '#ffffff' : 'transparent'
                                    }}
                                  >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="sponsor-logo"
                                        style={{
                                            // Manual scaling for specific sponsors
                                            ...(sponsor.name === "Greenstar" ? { transform: 'scale(0.9)' } : {}),
                                            ...(sponsor.name === "Xmold Polymers" ? { transform: 'scale(0.8)' } : {}),
                                            // Xmold fix: if it cuts off too much, we use contain for it, cover for others
                                            objectFit: sponsor.name === "Xmold Polymers" || sponsor.name === "Gamistry" ? 'contain' : 'cover'
                                        }}
                                    />
                                </div>
                            </div>
                            
                            <div className="sponsor-bottom-content">
                                <div className="sponsor-tier-badge">{sponsor.tier}</div>
                                <div className="sponsor-info">
                                    <h3>{sponsor.name}</h3>
                                    <p>{sponsor.desc}</p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>

            <style>{`
                .sponsors-page {
                    min-height: 100vh;
                    background: transparent;
                    padding: 150px 0 100px;
                    color: white;
                }

                .sponsors-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 5%;
                }

                .sponsors-header {
                    text-align: center;
                    margin-bottom: 6rem;
                }

                .sponsors-uptitle {
                    font-size: 0.8rem;
                    letter-spacing: 5px;
                    color: #ff0000;
                    font-weight: 800;
                    display: block;
                    margin-bottom: 1rem;
                }

                .sponsors-title {
                    font-size: 4rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                }

                .sponsors-subtitle {
                    color: rgba(255,255,255,0.4);
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .sponsors-showcase {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 3rem;
                    margin-bottom: 2rem;
                }

                .sponsor-card {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 420px;
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 20px;
                    padding: 3rem 2rem 2rem;
                    text-align: center;
                    transition: all 0.4s ease;
                    backdrop-filter: blur(10px);
                }

                .sponsor-card:hover {
                    background: rgba(255,255,255,0.08);
                    border-color: #ff0000;
                    border-width: 1px;
                    box-shadow: 0 0 25px rgba(255, 0, 0, 0.4);
                    transform: translateY(-10px);
                }

                .sponsor-logo-wrap {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2rem;
                    width: 100%;
                }

                /* THE CIRCULAR MASK */
                .logo-circle-mask {
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.4s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
                }

                .sponsor-logo {
                    width: 100%;
                    height: 100%;
                }

                .sponsor-card:hover .logo-circle-mask {
                    transform: scale(1.08);
                    box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
                }

                .sponsor-bottom-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .sponsor-tier-badge {
                    display: inline-block;
                    margin-bottom: 1.5rem;
                    background: #ff0000;
                    color: white;
                    padding: 0.4rem 1rem;
                    border-radius: 4px;
                    font-size: 0.6rem;
                    font-weight: 900;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .sponsor-info h3 {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-bottom: 0.8rem;
                }

                .sponsor-info p {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .sponsors-header {
                        margin-bottom: 2rem; 
                    }
                    
                    /* Keep your existing mobile styles below */
                    .sponsors-title { 
                        font-size: 2.5rem; 
                    }
                    .sponsors-showcase {
                        gap: 1.5rem; /* Reduce gap between cards on mobile */
                        margin-bottom: 3em; /* Reduce bottom margin on mobile */
                    }
                    .sponsor-card { 
                        min-height: auto; /* Removes the forced empty space */
                        padding: 2rem 1.5rem 1.5rem; /* Tightens the box padding */
                    }
                    .sponsor-logo-wrap {
                        margin-bottom: 1.5rem; /* Reduces gap between logo and text */
                    }
                    .logo-circle-mask {
                        width: 140px !important; /* Slightly larger than 130px to fill space better */
                        height: 140px !important;
                    }
                    .sponsor-tier-badge {
                        margin-bottom: 1rem; /* Tighter spacing above title */
                    }
                }
            `}</style>
        </section>
    );
};

export default Sponsors;
