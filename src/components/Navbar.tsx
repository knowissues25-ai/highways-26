import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const svceLogo = 'https://cdn.svcehighways.in/assets/logos/svce-logo.webp';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        const newState = !mobileMenuOpen;
        setMobileMenuOpen(newState);
        if (newState) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    const handleNavNavigation = (targetPath: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        closeMobileMenu();

        if (location.pathname === targetPath) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo-container" style={{ textDecoration: 'none' }} onClick={handleNavNavigation('/')}>
                    <img src={svceLogo} alt="SVCE Logo" className="logo-img-svce" />
                </Link>

                <div className="mobile-toggle cursor-pointer" onClick={toggleMobileMenu}>
                    <div className={`bar ${mobileMenuOpen ? 'animate' : ''}`}></div>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                    <button
                        type="button"
                        className="mobile-nav-close cursor-pointer"
                        onClick={closeMobileMenu}
                        aria-label="Close navigation menu"
                    >
                        <span aria-hidden="true">×</span>
                    </button>

                    <Link to="/" className="nav-link" onClick={handleNavNavigation('/')}>
                        <span>Home</span>
                    </Link>

                    <Link to="/events" className="nav-link" onClick={handleNavNavigation('/events')}>
                        <span>Events</span>
                    </Link>

                    <Link to="/schedule" className="nav-link" onClick={handleNavNavigation('/schedule')}>
                        <span>Schedule</span>
                    </Link>

                    <Link to="/passes" className="nav-link" onClick={handleNavNavigation('/passes')}>
                        <span>Get Passes</span>
                    </Link>

                    <Link to="/sponsors" className="nav-link" onClick={handleNavNavigation('/sponsors')}>
                        <span>Sponsors</span>
                    </Link>

                    <Link to="/team" className="nav-link" onClick={handleNavNavigation('/team')}>
                        <span>Team</span>
                    </Link>

                    <Link to="/faq" className="nav-link" onClick={handleNavNavigation('/faq')}>
                        <span>FAQ</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
