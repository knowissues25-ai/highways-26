import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamData } from '../data/teamData';

const Team = () => {
    const [activeTab, setActiveTab] = useState(teamData[0].id);
    const activeGroup = teamData.find(t => t.id === activeTab) || teamData[0];

    return (
        <section className="team-page-v3" style={{ 
            paddingTop: 'clamp(100px, 15vh, 150px)', 
            background: 'transparent', 
            minHeight: '100vh', 
            color: 'white',
            overflowX: 'hidden',
            overflowY: 'hidden'
        }}>
            <div className="container" style={{ width: '90%', maxWidth: '1400px', margin: '0 auto' }}>
                <div className="team-header" style={{ marginBottom: 'clamp(3rem, 10vh, 5rem)', textAlign: 'center' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ color: '#ff4d4d', letterSpacing: '8px', fontWeight: 900, display: 'block', marginBottom: '1rem', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}
                    >
                        THE ARCHITECTS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.2rem, 8vw, 5rem)', fontWeight: 950, lineHeight: 1.1, textTransform: 'uppercase' }}
                    >
                        MEET THE <span style={{ color: '#ff4d4d' }}>FORCE</span> BEHIND HIGHWAYS
                    </motion.h1>
                </div>

                <div className="team-tabs" style={{ 
                    display: 'flex', 
                    gap: '0.8rem', 
                    marginBottom: 'clamp(3rem, 8vh, 5rem)', 
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {teamData.map(group => (
                        <button
                            key={group.id}
                            onClick={() => setActiveTab(group.id)}
                            style={{
                                background: activeTab === group.id ? 'white' : 'rgba(255,255,255,0.03)',
                                color: activeTab === group.id ? 'black' : 'rgba(255,255,255,0.6)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.2rem, 3vw, 2rem)',
                                borderRadius: '15px',
                                fontWeight: 900,
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                                letterSpacing: '1px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {group.name}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="members-grid"
                    >
                        {activeGroup.members.map((member, idx) => (
                            <motion.div
                                key={`${activeTab}-${member.name}-${idx}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className="member-card-new"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                                    borderRadius: 'clamp(20px, 5vw, 40px)',
                                    padding: 'clamp(1.5rem, 5vw, 3rem)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div className="member-image-wrap" style={{
                                    width: 'clamp(140px, 40vw, 180px)',
                                    height: 'clamp(140px, 40vw, 180px)',
                                    margin: '0 auto 2rem',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '4px solid rgba(255, 77, 77, 0.15)',
                                    position: 'relative',
                                    zIndex: 2,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                    background: 'rgba(255,255,255,0.02)'
                                }}>
                                    {(() => {
                                        const filename = member.image.replace('assets/members/', '').replace(' - ', '---').replace(/ /g, '-');
                                        return (
                                            <img 
                                                src={`https://cdn.svcehighways.in/members/${filename}`} 
                                                alt={member.name} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.imagePosition ?? 'center 15%' }}
                                                // onError={(e) => {
                                                //     (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`;
                                                // }}
                                            />
                                        );
                                    })()}
                                </div>
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 900, margin: '8px 0', letterSpacing: '-0.5px' }}>{member.name}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontWeight: 600 }}>{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <style>{`
                .members-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(clamp(250px, 100%, 350px), 1fr));
                    gap: clamp(1.5rem, 4vw, 3rem);
                }
                
                .members-grid > div {
                    width: 100%;
                }

                .member-card-new {
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .member-card-new::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: radial-gradient(circle at top right, rgba(255,77,77,0.05), transparent);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }

                .member-card-new:hover {
                    transform: translateY(-15px) scale(1.02);
                    border-color: rgba(255, 77, 77, 0.3);
                    background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.6);
                }

                .member-card-new:hover::before {
                    opacity: 1;
                }

                .member-card-new:hover .member-image-wrap {
                    border-color: #ff4d4d;
                    transform: scale(1.05) rotate(5deg);
                }

                .team-tabs button:hover {
                    border-color: rgba(255,255,255,0.3);
                    background: rgba(255,255,255,0.05);
                }

                @media (max-width: 600px) {
                    .members-grid {
                        grid-template-columns: 1fr !important;
                        padding: 0 10px;
                        gap: 1.5rem !important;
                    }
                    .team-tabs {
                        gap: 0.5rem !important;
                        padding: 0 10px;
                    }
                    .team-tabs button {
                        padding: 0.7rem 1rem !important;
                        flex: 1 1 auto;
                        min-width: calc(50% - 0.5rem);
                        font-size: 0.65rem !important;
                    }
                    .member-card-new {
                        padding: 1.5rem !important;
                    }
                    .member-image-wrap {
                        margin-bottom: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Team;
