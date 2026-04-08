import { motion } from 'framer-motion';

const sponsorsData = [
  {
    name: "Greenstar",
    tier: "Apparal Partner",
    logo: "https://cdn.svcehighways.in/assets/logos/green-star.png",
    desc: "Special Sponsor.",
    url: "https://applicationsolutions.com.au/environmental-sustainable-design/green-star/",
    scale: "scale-[1.25]",
  },
  {
    name: "Gameistry",
    tier: "Event Partner",
    logo: "https://cdn.svcehighways.in/assets/logos/gamistry.png",
    desc: "Powering the events.",
    url: "https://www.gameistry.in/",
    scale: "scale-[0.75]",
  },
  {
    name: "Think Music",
    tier: "Events & DJ Sponsor",
    logo: "https://cdn.svcehighways.in/assets/logos/think-music.jpg",
    desc: "Events & DJ Sponsor.",
    url: "https://www.thinkmusic.in/",
    scale: "scale-[1]",
  },
  {
    name: "Xmold Polymers",
    tier: "Events Sponsor",
    logo: "https://cdn.svcehighways.in/assets/logos/xmold.png",
    desc: "Proud sponsor of Highways'26.",
    url: "https://xmoldpolymers.com/",
    scale: "scale-[0.7]",
  },
  {
    name: "Zebronics",
    tier: "Audio Sponsor",
    logo: "https://cdn.svcehighways.in/assets/logos/zebronics.png",
    desc: "Premium audio experiences.",
    url: "https://zebronics.com/",
    scale: "scale-[0.95]",
  },  
  {
    name: "Naturals",
    tier: "Grooming Partner",
    logo: "https://cdn.svcehighways.in/assets/logos/naturals.png",
    desc: "",
    url: "https://zebronics.com/",
    scale: "scale-[0.95]",
  },
  {
    name: "Hoppio",
    tier: "Travel Partner",
    logo: "https://cdn.svcehighways.in/assets/logos/hoppio.png",
    desc: "",
    url: "https://hoppio.in/",
    scale: "scale-[1]",
  },  
  {
    name: "Veranda Race",
    tier: "Knowledge Partner",
    logo: "https://cdn.svcehighways.in/assets/logos/race.png",
    desc: "",
    url: "https://verandarace.com/",
    scale: "scale-[0.95]",
  },
  {
    name: "Chandra Group",
    tier: "Production Partner",
    logo: "https://cdn.svcehighways.in/assets/logos/chandra.avif",
    desc: "",
    url: "https://chandragroup.co/",
    scale: "scale-[0.95]",
  },
  // {
  //   name: "Lanson Toyota",
  //   tier: "Events Sponsor",
  //   logo: "https://cdn.svcehighways.in/assets/logos/lanson_toyota.jpeg",
  //   desc: " ",
  //   url: "https://lanson toyota.com/",
  //   scale: "scale-[1]",
  // },
];

const Sponsors = () => {
  return (
    <section className="min-h-screen pt-[120px] md:pt-[150px] pb-[80px] md:pb-[100px] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-[5%]">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="block text-[0.7rem] md:text-[0.8rem] tracking-[4px] md:tracking-[5px] text-[#ff0000] font-extrabold mb-3 md:mb-4"
          >
            THE PATRONS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[2.2rem] sm:text-[2.6rem] md:text-[4rem] font-black mb-4 md:mb-6 leading-tight"
          >
            THE PILLARS OF HIGHWAYS
          </motion.h1>

          <p className="text-white/40 text-[0.95rem] md:text-[1.1rem] max-w-[500px] md:max-w-[600px] mx-auto">
            Empowering the spirit of cultural fusion and artistic expression.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 sm:gap-6 md:gap-12">
          {sponsorsData.map((sponsor, idx) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex flex-col justify-between text-center bg-white/5 border border-white/10 rounded-[18px] md:rounded-[20px] px-5 py-6 md:px-8 md:pt-12 md:pb-8 backdrop-blur-[10px] transition-all duration-300 hover:bg-white/10 hover:border-[#ff0000] hover:shadow-[0_0_25px_rgba(255,0,0,0.4)] active:scale-[0.98]"
            >
              
              {/* Logo */}
              <div className="flex justify-center items-center mb-5 md:mb-8">
                <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] rounded-full bg-white flex items-center justify-center overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                  
                  <div className={`w-full h-full flex items-center justify-center ${sponsor.scale}`}>
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                </div>
              </div>

              {/* Bottom */}
              <div className="flex flex-col items-center">
                <div className="mb-3 md:mb-6 bg-[#ff0000] text-white px-3 py-[0.35rem] md:px-4 md:py-[0.4rem] rounded text-[0.55rem] md:text-[0.6rem] font-black tracking-[1px] uppercase">
                  {sponsor.tier}
                </div>

                <h3 className="text-[1.2rem] md:text-[1.5rem] font-extrabold mb-2 md:mb-3">
                  {sponsor.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;