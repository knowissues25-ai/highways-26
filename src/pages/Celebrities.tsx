const Celebrities = () => {
    return (
        <section id="celebrity" className="celebrity-section" style={{ paddingTop: '150px' }}>
            <div className="container">
                <h2 className="section-title center">CELEBRITY GUESTS</h2>
                <div className="celebrity-grid">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="celebrity-card">
                            <div className="celeb-image-placeholder">
                                <span className="mystery-mark">?</span>
                            </div>
                            <div className="celeb-info">
                                <h3>Mystery Guest {i}</h3>
                                <p>To be revealed soon!</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Celebrities;
