import { motion } from "framer-motion";

export default function Celebrities() {
  const celebrities = [
    {
      id: 1,
      name: "THE ETERNALS",
      type: "DAY 1",
      image: "https://cdn.svcehighways.in/celebrity/eternals.webp",
      reveal: true,
      watch: "",
    },
    { 
      id: 2, 
      name: "SANHOSH NARAYANAN",
      type: "DAY 2", 
      image: "https://cdn.svcehighways.in/celebrity/sana.webp", 
      reveal: true, 
      watch: "" 
    },
    { 
      id: 3, 
      name: "VISHNUPRIYA RAVI",
      type: "DAY 2", 
      image: "https://cdn.svcehighways.in/celebrity/vishnu_pri.webp", 
      reveal: true, 
      watch: "" 
    },
    { id: 4, type: "SPECIAL GUEST", image: "", reveal: false, watch: "" },
    { id: 5, type: "PERFORMER", image: "", reveal: false, watch: "" },
  ];

  return (
    <section className="py-24 px-5">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-red-500 text-xs font-extrabold tracking-[5px] block mb-3">
            LEGENDARY APPEARANCE
          </span>

          <h2 className="text-white font-black text-[clamp(2.2rem,6vw,4rem)]">
            CELEBRITY <span className="text-red-500">LINEUP</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {celebrities.map((celeb) => (
            <motion.div
              key={celeb.id}
              whileHover={{ y: -10 }}
              className="group"
            >

              {/* POSTER */}
              <div className="relative w-full aspect-[1/1.414] rounded-xl overflow-hidden border border-red-500/20 bg-white/5">

                {celeb.reveal ? (
                  <img
                    src={celeb.image}
                    alt={celeb.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-95"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-red-500/10 relative">

                    {/* rotating dashed border */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[80%] h-[80%] border-2 border-dashed border-red-500/30 rounded-xl"
                    />

                    <span className="text-red-500 text-5xl font-black z-10">
                      ?
                    </span>
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="text-center mt-4">
                <p className="text-[10px] tracking-[2px] text-red-500 font-bold mb-1">
                  {celeb.type}
                </p>

                <h3 className="text-white font-extrabold text-lg mb-2">
                  {celeb.reveal ? celeb.name : "REVEALING SOON"}
                </h3>

                {celeb.reveal ? (
                  <a
                    href={celeb.watch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full bg-red-500 text-white text-xs font-bold tracking-wide hover:bg-red-600 transition"
                  >
                    WATCH
                  </a>
                ) : (
                  <div className="inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-500 text-xs font-bold tracking-wide">
                    STAY TUNED
                  </div>
                )}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}