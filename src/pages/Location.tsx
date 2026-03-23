const Location = () => {
    return (
        <section id="location" className="location-section world-pink" style={{ paddingTop: '150px', minHeight: '100vh' }}>
            <div className="container">
                <h2 className="section-title center">REACH US</h2>
                <div className="location-flex">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps?q=Sri+Venkateswara+College+of+Engineering,+Post+Bag+No.1,Pennalur+Village+Chennai+-+Bangaluru+High+Road+Sriperumbudur+Tk,+Tamil+Nadu+602117,+India&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="SVCE Location"
                        ></iframe>
                    </div>
                    <div className="address-info">
                        <h3>Sri Venkateswara College of Engineering</h3>
                        <a
                            href="https://maps.app.goo.gl/1vHZVM7RMqGM5TYA8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="address-link"
                        >
                            <p>
                                Sri Venkateswara College of Engineering,<br />
                                Post Bag No.1, Pennalur Village,<br />
                                Chennai - Bangaluru High Road,<br />
                                Sriperumbudur Tk, Tamil Nadu 602117, India
                            </p>
                            <span className="maps-link">View on Google Maps <i className="fas fa-external-link-alt"></i></span>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
