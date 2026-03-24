import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Glimpses from './Glimpses';

const HighwaysLogo = 'https://cdn.svcehighways.in/assets/logos/highways-logo.webp';

const Home = () => {

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section id="hero" className="hero" style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#050505',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none'
            }}>
                {/* Background Video for Hero */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 0
                    }}
                >
                    <source src="https://cdn.svcehighways.in/videos/IMG_0151.MOV" type="video/mp4" />
                </video>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.4), rgba(5,5,5,0.8))', zIndex: 0 }}></div>

                <div className="hero-content home-hero-content animate-fade w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>

                    {/* FIXED LOGO CONTAINER */}
                    <div className="flex justify-center w-full mt-16 md:mt-20 mb-6 md:mb-8">
                        <div className="relative inline-block">
                            <motion.img
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                src={HighwaysLogo}
                                alt="Highways Logo"
                                className="w-auto h-auto max-w-[100%] md:max-w-[1200px] max-h-[250px] md:max-h-[400px] lg:max-h-[480px] object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                            />
                            <div className="mt-2 text-center text-xl md:text-5xl font-bold italic uppercase tracking-[10px] text-white drop-shadow-md font-sans">
                                APRIL 09, 10, 11
                            </div>
                        </div>
                    </div>

                    <div className="hero-btns flex justify-center mt-10 md:mt-16">
                        <Link
                            to="/passes"
                            className="inline-block text-[1.2rem] text-[#ef233c] font-black italic uppercase tracking-[4px] transition-all duration-300 pb-[5px] border-b-2 border-transparent shadow-[#ef233c]/40 drop-shadow-[0_0_20px_rgba(239,35,60,0.4)] hover:drop-shadow-[0_0_30px_rgba(239,35,60,0.8)] hover:border-[#ef233c] hover:-translate-y-0.5 font-sans"
                        >
                            Get Passes
                        </Link>
                    </div>
                </div>
            </section>

            {/* WRAPPER FOR ABOUT AND CELEBRITIES */}
            <div style={{
                background: 'linear-gradient(to bottom, #050505, #0a0a0a)',
                position: 'relative'
            }}>
                {/* ABOUT SECTION - Redesigned (Elegant, Typography Focused) */}
                <section id="about" className="about-section" style={{ padding: '150px 0', border: 'none', position: 'relative', overflow: 'hidden' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>

                        {/* Highways Block */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                marginBottom: '100px',
                                borderLeft: '4px solid #ef233c',
                                paddingLeft: 'clamp(1rem, 5vw, 3rem)'
                            }}
                        >
                            <h2 className="section-title left uppercase" style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: '1.5rem', fontFamily: '"Orbitron", sans-serif', letterSpacing: '2px' }}>ABOUT <span style={{ color: '#ef233c' }}>HIGHWAYS</span></h2>
                            <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
                                HIGHWAYS, the flagship fest of SVCE, continues to inspire, empower and entertain students with its showcase of cultural brilliance and artistic vitality. It offers a powerful stage for participants to express themselves, celebrate creativity and unveil their hidden talents.
                            </p>
                            <p style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>
                                Uniting students from diverse backgrounds and traditions, HIGHWAYS '26 promises an unforgettable experience with a spectacular lineup of culturally rich performances and vibrant non-technical showcases. It stands as a celebration of talent, unity and the true spirit of festivity.
                            </p>
                        </motion.div>

                        {/* SVCE Block */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                borderLeft: '4px solid #ffffff',
                                paddingLeft: 'clamp(1rem, 5vw, 3rem)'
                            }}
                        >
                            <h2 className="section-title left uppercase" style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: '1.5rem', fontFamily: '"Orbitron", sans-serif', letterSpacing: '2px' }}>ABOUT <span style={{ color: '#ffffff' }}>SVCE</span></h2>
                            <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
                                Sri Venkateswara College of Engineering (SVCE), established in 1985, is a leading engineering institution in Tamil Nadu. Guided by Dr. A.C. Muthiah, an industrialist and philanthropist, SVCE became the first private engineering college in Chennai to receive Autonomous status from UGC. Accredited by NAAC, its 12 B.E./B.Tech. and 9 M.E./M.Tech. programs are affiliated with Anna University.
                            </p>
                            <p style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>
                                The college maintains a stellar placement record, with over 96% of eligible students placed annually in 150+ companies. SVCE has a distinguished alumni network of over 22,000 professionals in top brands like Apple, Google, and Amazon, and has produced 100+ successful entrepreneurs. Situated in Sriperumbudur's industrial corridor, its 95-acre campus features cutting-edge infrastructure, ICT-enabled facilities, and lush greenery.
                            </p>
                        </motion.div>

                    </div>
                </section>

                {/* CELEBRITY GUESS SECTION */}
                <section id="celebrities" className="celebrity-section" style={{ padding: '100px 0 200px', border: 'none' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <span style={{ color: '#ff4d4d', fontSize: '1rem', fontWeight: 900, letterSpacing: '8px', display: 'block', marginBottom: '1rem' }}>LEGENDARY APPEARANCE</span>
                            <h2 className="section-title center mx-auto" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 950, lineHeight: 1.1 }}>CELEBRITY <span style={{ color: '#ff4d4d' }}>GUESTS</span></h2>
                        </div>
                        <div className="celebrity-grid w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
                            {[
                                { id: 1, type: "MAIN GUEST", hint: "" },
                                { id: 2, type: "SPECIAL GUEST", hint: "" },
                                { id: 3, type: "PERFORMER", hint: "" }
                            ].map(celeb => (
                                <motion.div
                                    key={celeb.id}
                                    whileHover={{ y: -10 }}
                                    className="celebrity-card-premium"
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        borderRadius: '30px',
                                        padding: '40px 20px',
                                        textAlign: 'center',
                                        border: '1px solid rgba(255,77,77,0.1)',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <div className="mystery-container" style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {celeb.id === 1 ? (
                                            <img src="https://cdn.svcehighways.in/celebrity/eternals%20psd%20FINAL.jpg" alt="Celebrity 1" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                        ) : (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '140px',
                                                        height: '140px',
                                                        borderRadius: '35px',
                                                        border: '2px dashed #ff4d4d',
                                                        opacity: 0.3
                                                    }}
                                                />
                                                <div style={{
                                                    width: '110px',
                                                    height: '110px',
                                                    background: 'rgba(255,77,77,0.1)',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '3.5rem',
                                                    fontWeight: 900,
                                                    color: '#ff4d4d',
                                                    textShadow: '0 0 20px rgba(255, 77, 77, 0.5)',
                                                    zIndex: 1
                                                }}>?</div>
                                            </>
                                        )}
                                    </div>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: 900, margin: '15px 0', color: 'white', minHeight: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{celeb.id === 1 ? 'THE ETERNALS' : 'REVEALING SOON'}</h3>
                                    {celeb.id === 1 ? (
                                        <a 
                                            href="https://www.instagram.com/reel/DWO0fRKE9wg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{
                                                marginTop: '20px',
                                                background: '#ff4d4d',
                                                color: 'white',
                                                padding: '10px 20px',
                                                borderRadius: '100px',
                                                fontSize: '0.8rem',
                                                fontWeight: 900,
                                                letterSpacing: '1px',
                                                textDecoration: 'none',
                                                display: 'inline-block'
                                            }}
                                        >
                                            WATCH TRAILER
                                        </a>
                                    ) : (
                                        <div style={{
                                            marginTop: '20px',
                                            background: '#ff4d4d',
                                            color: 'white',
                                            padding: '10px 20px',
                                            borderRadius: '100px',
                                            fontSize: '0.8rem',
                                            fontWeight: 900,
                                            letterSpacing: '1px'
                                        }}>EXPECT THE UNEXPECTED</div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* GLIMPSES SECTION */}
            <Glimpses />
        </div>
    );
};

export default Home;
