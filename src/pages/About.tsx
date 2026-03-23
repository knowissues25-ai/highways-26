
const About = () => {
    return (
        <section id="about" className="about-section world-white" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="about-flex" style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                    
                    {/* --- LEFT SIDE: ABOUT HIGHWAYS --- */}
                    <div className="about-text" style={{ flex: '1', minWidth: '300px' }}>
                        <h2 className="section-title left">ABOUT HIGHWAYS</h2>
                        <p>Highways is the annual intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE). Known for its vibrant atmosphere and creative energy, Highways brings together students from across the states to celebrate art, talent, and expression.</p>
                        <p>This year, for <strong>Highways '26</strong>, we are embracing the spirit of the <em>Japanese Carnival</em>. Imagine the glow of a thousand lanterns, the rhythm of taiko drums, and the festive magic of a Matsuri night, all right here on our campus.</p>
                        
                        <div className="about-highlights" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
                            <div className="highlight"><i className="fas fa-drum"></i> Cultural Fusion</div>
                            <div className="highlight"><i className="fas fa-mask"></i> Artistic Expression</div>
                            <div className="highlight"><i className="fas fa-fire"></i> Infinite Energy</div>
                        </div>

                        {/* Highways Video Placeholder */}
                        <div className="video-frame" style={{ width: '100%', height: '280px', borderRadius: '10px', overflow: 'hidden', border: '5px solid var(--murasaki)', boxShadow: '10px 10px 0 var(--kin)', position: 'relative', backgroundColor: '#1a1a1a' }}>
                            <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.7' }}>
                                {/* Replace src with your actual video path */}
                                <source src="https://cdn.svcehighways.in/videos/IMG_0151.MOV" type="video/mp4" />
                            </video>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', letterSpacing: '2px', fontWeight: 'bold' }}>
                                [ HIGHWAYS GLIMPSE ]
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: ABOUT SVCE --- */}
                    <div className="about-svce" style={{ flex: '1', minWidth: '300px' }}>
                        <h2 className="section-title left">ABOUT SVCE</h2>
                        <p>Sri Venkateswara College of Engineering (SVCE), established in 1985, is a leading engineering institution in Tamil Nadu. Guided by Dr. A.C. Muthiah, an industrialist and philanthropist, SVCE became the first private engineering college in Chennai to receive Autonomous status from UGC.</p>
                        <p>Accredited by NAAC, its 12 B.E./B.Tech. and 9 M.E./M.Tech. programs are affiliated with Anna University. The college maintains a stellar placement record, with over 96% of eligible students placed annually in 150+ companies.</p>
                        <p>Situated in Sriperumbudur's industrial corridor, its 95-acre campus features cutting-edge infrastructure, ICT-enabled facilities, and lush greenery, along with a distinguished alumni network of over 22,000 professionals.</p>

                        {/* SVCE Video Placeholder */}
                        <div className="video-frame" style={{ width: '100%', height: '280px', borderRadius: '10px', overflow: 'hidden', border: '5px solid var(--kin)', boxShadow: '10px 10px 0 var(--murasaki)', position: 'relative', backgroundColor: '#1a1a1a', marginTop: '20px' }}>
                            <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.7' }}>
                                {/* Replace src with your actual video path */}
                                <source src="https://cdn.svcehighways.in/videos/IMG_0151.MOV" type="video/mp4" />
                            </video>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', letterSpacing: '2px', fontWeight: 'bold' }}>
                                [ SVCE GLIMPSE ]
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
