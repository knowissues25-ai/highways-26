import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Glimpses from './Glimpses';
import Celebrities from './Celebrities';

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

            {/* ABOUT SVCE AND CELEBRITIES */}
            <div>
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
                    </div>
                </section>

                <Celebrities />
            </div>

            {/* GLIMPSES SECTION */}
            <Glimpses />

            
            {/* ABOUT SVCE */}
            <div>
                {/* ABOUT SECTION - Redesigned (Elegant, Typography Focused) */}
                <section id="about" className="about-section" style={{ padding: '150px 0', border: 'none', position: 'relative', overflow: 'hidden' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>

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
            </div>
        </div>
    );
};

export default Home;
