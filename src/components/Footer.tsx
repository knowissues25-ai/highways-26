import { Link, useLocation } from 'react-router-dom';

const HighwaysLogo = 'https://cdn.svcehighways.in/assets/logos/highways-logo.webp';

const Footer = () => {
  const location = useLocation();

  const handleNavNavigation = (targetPath: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === targetPath) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideUpFade {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>

      <footer className="bg-black text-white pt-20 pb-10 px-[6%] text-center">

        {/* Big Logo */}
       <div className="flex justify-center mb-8">
  <img
    src={HighwaysLogo}
    alt="Highways Logo"
    className="w-[75%] md:w-[60%] lg:w-[50%] h-auto mx-auto"
  />
</div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold tracking-wide mb-10">
          <Link to="/" onClick={handleNavNavigation('/')} className="text-white/60 hover:text-red-500 transition">Home</Link>
          <Link to="/events" onClick={handleNavNavigation('/events')} className="text-white/60 hover:text-red-500 transition">Events</Link>
          <Link to="/schedule" onClick={handleNavNavigation('/schedule')} className="text-white/60 hover:text-red-500 transition">Schedule</Link>
          <Link to="/passes" onClick={handleNavNavigation('/passes')} className="text-white/60 hover:text-red-500 transition">Get Passes</Link>
          <Link to="/sponsors" onClick={handleNavNavigation('/sponsors')} className="text-white/60 hover:text-red-500 transition">Sponsors</Link>
          <Link to="/team" onClick={handleNavNavigation('/team')} className="text-white/60 hover:text-red-500 transition">Team</Link>
          <Link to="/faq" onClick={handleNavNavigation('/faq')} className="text-white/60 hover:text-red-500 transition">FAQ</Link>
        </div>

        {/* Social + Contact */}
        <div className="flex justify-center gap-8 mb-10 text-xs font-bold tracking-[2px] uppercase">
          <a
            href="https://www.instagram.com/svce_highways"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-red-500 transition"
          >
            Instagram
          </a>

          <a
            href="mailto:highways@svce.ac.in"
            className="text-white/50 hover:text-red-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] tracking-[3px] opacity-30 font-bold uppercase">
          © 2026 Highways 
        </div>

      </footer>
    </>
  );
};

export default Footer;
