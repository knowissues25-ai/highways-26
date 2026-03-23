import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="event-detail-page world-neon" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <div className="container">
                <Link to="/events" className="back-link">
                    <i className="fas fa-arrow-left"></i> Back to Domains
                </Link>

                <div className="event-detail-container reveal">
                    <div className="event-header-visual">
                        <div className="event-image-placeholder">
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="event-title-overlay">
                            <span className="event-category-tag">Domain {id}</span>
                            <h1>Placeholder Event Name</h1>
                        </div>
                    </div>

                    <div className="event-main-content">
                        <div className="event-description-card">
                            <h2>About the Event</h2>
                            <p>
                                This is a placeholder for the event description. It will contain details about the competition,
                                themes, and what participants can expect. Highways 2026 brings you the most exciting
                                platforms to showcase your talent!
                            </p>

                            <div className="event-rules">
                                <h3>General Rules</h3>
                                <ul>
                                    <li>Placeholder Rule 1: Respect the schedule and coordinators.</li>
                                    <li>Placeholder Rule 2: Valid ID proof is mandatory.</li>
                                    <li>Placeholder Rule 3: Decisions of the judges are final.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="event-sidebar">
                            <div className="info-card">
                                <div className="info-item">
                                    <i className="fas fa-calendar-day"></i>
                                    <div>
                                        <strong>Date</strong>
                                        <p>APRIL 09 - 11, 2026</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-clock"></i>
                                    <div>
                                        <strong>Time</strong>
                                        <p>TBD</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <strong>Venue</strong>
                                        <p>SVCE Campus</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-users"></i>
                                    <div>
                                        <strong>Team Size</strong>
                                        <p>Placeholder</p>
                                    </div>
                                </div>
                            </div>

                            <a href="https://www.acesvce.in/" target="_blank" rel="noopener noreferrer" className="btn-matsuri register-btn">
                                Register Now
                            </a>

                            <div className="coordinators-card">
                                <h3>Coordinators</h3>
                                <div className="coordinator">
                                    <strong>Name Placeholder</strong>
                                    <p>+91 00000 00000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
