import { motion } from 'framer-motion';

const Passes = () => {
    const passLinks = {
        svcepass: 'https://forms.gle/nUzSptwM5RNpFYXy6',
        eventpass: 'https://forms.gle/TDXv1XiWrGnnxQJY9',
        nonsvcepass: 'https://forms.gle/8d8GqA8sWnBMgZuQ7',
        svcegrp: 'https://forms.gle/RJjoH3FZN7iLpJpu7',
        nonsvcegrp: 'https://forms.gle/JE7QUP5VDComKwU89',
        svcealumni: 'https://forms.gle/1o2A5ckyPYpVMZ7TA',
        daypass: 'https://forms.gle/e8Z7QCQVUWWQMbtb6'
    } as const;

    const handlePassClick = (passKey: keyof typeof passLinks) => {
        const url = passLinks[passKey];
        if (!url) {
            return;
        }
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) {
            newWindow.opener = null;
        }
    };

    return (
        <section className="passes-page" style={{ paddingTop: '150px', minHeight: '100vh', paddingBottom: '100px', color: '#fff' }}>
            {/* Background Aesthetic Elements */}
            <div style={{ position: 'fixed', top: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(239, 35, 60, 0.08) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />
            <div style={{ position: 'fixed', bottom: '10%', left: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
                
                <div className="passes-header" style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 950, letterSpacing: '-2px', textTransform: 'uppercase', background: 'linear-gradient(to bottom, #fff 0%, #ef233c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: '"Orbitron", sans-serif' }}>
                        HIGHWAYS '26
                    </h1>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '2.5rem',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>


                    {/* DAY PASS */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 1
                        }}
                    >
                        <div style={{ opacity: 1 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>
                                Day Pass</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>
                                SVCE and External entry
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                <br />
                                This pass can only be used for single day entry.
                                <br /> <br />
                            </p>
                            <p style={{ marginBottom: '2rem', lineHeight: 1.6, fontSize: '1.5rem' }} className='text-white font-bold'>
                                DAY 1 - <span className='text-[#ef233c]'>₹</span> 499 <br />
                                DAY 2 - <span className='text-[#ef233c]'>₹</span> 699 <br />
                                DAY 3 - <span className='text-[#ef233c]'>₹</span> 499 <br />
                            </p>
                            <button onClick={() => handlePassClick('daypass')} style={{ width: '100%', padding: '1.2rem', background: '#ef233c', border: 'none', color: 'white', borderRadius: '24px', fontWeight: 950, letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem' }}>GET PASS NOW</button>
                        </div>
                    </motion.div>

                    
                    {/* EVENT PASS */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 1
                        }}
                    >
                        <div style={{ opacity: 1 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>EVENT PASS</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>SVCE Students Only</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Exclusive access to fun and standard events<br/>
                                
                    
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>200
                            </div>
                            <button onClick={() => handlePassClick('eventpass')} style={{ width: '100%', padding: '1.2rem', background: '#ef233c', border: 'none', color: 'white', borderRadius: '24px', fontWeight: 950, letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem' }}>GET PASS NOW</button>
                        </div>
                    </motion.div>



                    {/* SVCE ALUMNI PASS */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 1
                        }}
                    >
                        <div style={{ opacity: 1 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>ALUMNI / FAMILY</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>Alumni Access</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Exclusive pass for SVCE Alumni & Family<br/>
                                Access to all Pro Shows<br/>
                                Access to all free and standard events<br/>
                                *1 day pass / 3 day pass
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>500/899
                            </div>
                            <button onClick={() => handlePassClick('svcealumni')} style={{ width: '100%', padding: '1.2rem', background: '#ef233c', border: 'none', color: 'white', borderRadius: '24px', fontWeight: 950, letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem' }}>GET PASS NOW</button>
                        </div>
                    </motion.div>

                    {/* SVCE NORMAL PASS */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 1
                        }}
                        className='cursor-blocked'
                    >
                        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'all', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(45deg)' }}></div>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(-45deg)' }}></div>
                           <div style={{ background: '#0a0a0a', padding: '10px 25px', borderRadius: '15px', border: '1px solid #ef233c', color: '#ef233c', fontWeight: 950, zIndex: 11, fontSize: '1rem', letterSpacing: '3px' }}>EXPIRED</div>
                        </div>
                        <div style={{ opacity: 0.15 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>SVCE PASS</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>SVCE Students Only</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                <br />Access to all Pro Shows<br/>
                                Access to all free and standard events <br />
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>1099
                            </div>
                            <button onClick={() => handlePassClick('svcepass')} style={{ width: '100%', padding: '1.2rem', background: '#ef233c', border: 'none', color: 'white', borderRadius: '24px', fontWeight: 950, letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem' }}>GET PASS NOW</button>
                        </div>
                    </motion.div>

                    {/* SVCE GROUP PASS */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 1
                        }}
                    >
                        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'all', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(45deg)' }}></div>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(-45deg)' }}></div>
                           <div style={{ background: '#0a0a0a', padding: '10px 25px', borderRadius: '15px', border: '1px solid #ef233c', color: '#ef233c', fontWeight: 950, zIndex: 11, fontSize: '1rem', letterSpacing: '3px' }}>EXPIRED</div>
                        </div>
                        <div style={{ opacity: 0.15 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>SVCE GROUP</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>10 People · SVCE Only</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Group pass for 10 SVCE students<br/>
                                Access to all Pro Shows<br/>
                                Access to all free and standard events
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>999<span style={{ fontSize: '2.0rem', color: '#fff' }}>/head</span>
                            </div>
                            <button onClick={() => handlePassClick('svcegrp')} style={{ width: '100%', padding: '1.2rem', background: '#ef233c', border: 'none', color: 'white', borderRadius: '24px', fontWeight: 950, letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem' }}>GET PASS NOW</button>
                        </div>
                    </motion.div>

                    {/* NON-SVCE PASS */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 1
                        }}
                    >
                        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'all', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(45deg)' }}></div>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(-45deg)' }}></div>
                           <div style={{ background: '#0a0a0a', padding: '10px 25px', borderRadius: '15px', border: '1px solid #ef233c', color: '#ef233c', fontWeight: 950, zIndex: 11, fontSize: '1rem', letterSpacing: '3px' }}>EXPIRED</div>
                        </div>
                        <div style={{ opacity: 0.15 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>NON-SVCE</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>External Entry</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Access to all Pro Shows<br/>
                                Access to all free and standard events
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>1199
                            </div>
                            <button onClick={() => handlePassClick('nonsvcepass')} style={{ width: '100%', padding: '1.2rem', background: '#ef233c', border: 'none', color: 'white', borderRadius: '24px', fontWeight: 950, letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem' }}>GET PASS NOW</button>
                        </div>
                    </motion.div>

                    {/* NON-SVCE GROUP PASS */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 1
                        }}
                    >
                        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'all', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(45deg)' }}></div>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(-45deg)' }}></div>
                           <div style={{ background: '#0a0a0a', padding: '10px 25px', borderRadius: '15px', border: '1px solid #ef233c', color: '#ef233c', fontWeight: 950, zIndex: 11, fontSize: '1rem', letterSpacing: '3px' }}>EXPIRED</div>
                        </div>
                        <div style={{ opacity: 0.15 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>NON-SVCE GROUP</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>5 People · External</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Group pass for 5 non-SVCE participants<br/>
                                Access to all Pro Shows<br/>
                                Access to all free and standard events
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>1099<span style={{ fontSize: '2.0rem', color: '#fff' }}>/head</span>
                            </div>
                            <button onClick={() => handlePassClick('nonsvcegrp')} style={{ width: '100%', padding: '1.2rem', background: '#ef233c', border: 'none', color: 'white', borderRadius: '24px', fontWeight: 950, letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem' }}>GET PASS NOW</button>
                        </div>
                    </motion.div>

                    {/* EARLY BIRD - EXPIRED */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 0.8
                        }}
                    >
                        {/* THE X DESIGN */}
                        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'all', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(45deg)' }}></div>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(-45deg)' }}></div>
                           <div style={{ background: '#0a0a0a', padding: '10px 25px', borderRadius: '15px', border: '1px solid #ef233c', color: '#ef233c', fontWeight: 950, zIndex: 11, fontSize: '1rem', letterSpacing: '3px' }}>EXPIRED</div>
                        </div>

                        <div style={{ opacity: 0.15 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>EARLY BIRD</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>All-In-One Experience</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Early bird discount<br/>
                                Access to all Pro Shows<br/>
                                Access to all free and standard events
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>899
                            </div>
                            <button disabled style={{
                                width: '100%',
                                padding: '1.2rem',
                                background: '#ef233c',
                                border: 'none',
                                color: 'white',
                                borderRadius: '24px',
                                fontWeight: 950,
                                letterSpacing: '2px',
                                cursor: 'not-allowed',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem'
                            }}>EXPIRED</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Passes;
