import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqBackground = 'https://cdn.svcehighways.in/background.jpg';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "What is Highways '26?", a: "Highways '26 is the premier intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE), celebrating creativity, talent, and diversity across a 3-day saga." },
        { q: "Who is eligible to participate?", a: "Students currently enrolled in any recognized undergraduate or postgraduate program across the country are welcome to participate." },
        { q: "How do I secure my festival pass?", a: "You can purchase your passes directly through our 'Passes' page. We offer day-specific passes and a full-access combo pass." },
        { q: "Are the passes refundable?", a: "All pass sales are final. Refund or switching of tickets is strictly prohibited." },
        { q: "What should I bring for registration?", a: "Please carry your college ID card and the digital QR code of your festival pass for verification at the entrance." },
        { q: "Will there be professional performances?", a: "Absolutely! Each night concludes with a high-energy pro-show featuring top-tier artists. Check the Celebrity Reveal section for updates." },
        { q: "Is on-spot registration available?", a: "We strongly recommend online booking as passes are limited and usually sell out before the event. On-spot registration depends on availability." },
        { q: "Is there a specific dress code?", a: "There's no strict dress code, but we encourage participants to dress comfortably. Some special events might have thematic guidelines mentioned in their rules." },
        { q: "Where can I stay during the festival?", a: "While we don't provide on-campus accommodation, there are several hotels and guest houses available in the Sriperumbudur area." },
        { q: "Who can I contact for event-related queries?", a: "You can reach out to our event coordinators through the contact details provided in each event's description or via our social media handles." },
        { q: "Is food available on campus?", a: "Yes, we will have a dedicated food zone with a variety of stalls catering to different tastes throughout the festival." },
        { q: "Can alumni attend Highways '26?", a: "Yes, we have a special 'Alumni Pass' designed for our former students to join the celebration." }
    ];

    return (
        <section
            id="faq"
            className="faq-page-v3"
            style={{
                paddingTop: '150px',
                minHeight: '100vh',
                paddingBottom: '100px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                backgroundImage: `url(${faqBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.72)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="faq-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: '#ff4d4d', letterSpacing: '5px', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.8rem' }}>INSIGHTS</span>
                    <h2 style={{ fontSize: '4rem', fontWeight: 950, marginTop: '1rem' }}>COMMON QUESTIONS</h2>
                </div>

                <div className="faq-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {faqs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className={`faq-card ${openIndex === i ? 'active' : ''}`}
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '20px',
                                marginBottom: '1.5rem',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                style={{
                                    width: '100%',
                                    padding: '2rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{item.q}</span>
                                <span style={{
                                    width: '30px',
                                    height: '30px',
                                    background: openIndex === i ? '#ff4d4d' : 'rgba(255,255,255,0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)'
                                }}>+</span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ padding: '0 2rem 2rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '1rem' }}>
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .faq-card:hover {
                    background: rgba(255,255,255,0.05) !important;
                    border-color: rgba(255, 77, 77, 0.3) !important;
                }
                .faq-card.active {
                    background: rgba(255,255,255,0.04) !important;
                    border-color: rgba(255, 77, 77, 0.5) !important;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }
            `}</style>
        </section>
    );
};

export default FAQ;
