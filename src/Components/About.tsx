import { motion } from "framer-motion";
import jake from "../assets/mvp.png";
import ruth from "../assets/reg.jpg";

const About = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#004d36] via-[#013d2d] to-[#003628] text-white font-lora min-h-screen overflow-hidden" id="about">
      
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-1/3 h-1/3 text-green-500/5"
          viewBox="0 0 200 200"
        >
          <path
            d="M 0,100 C 0,0 100,0 100,100 C 100,200 200,200 200,100"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-1/2 h-1/2 text-green-500/5"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-6xl font-bold mb-2 relative">
                  About <span className="text-[#4ade80]">VerdaSol</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-transparent"
                  />
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-gray-200">
                 
                  <span className="text-[#4ade80] font-semibold">VerdaSol</span>
                   {" "}is dedicated to enhancing solar energy efficiency with our innovative, water-free automated cleaning solution. By using electrostatic biasing, we lift dust from panels, ensuring peak performance with minimal energy consumption. Our technology is sustainable, cost-effective, and designed to revolutionize solar panel maintenance.
                </p>
                <p className="text-xl leading-relaxed text-gray-200">
                Verdasol offers a groundbreaking, water-free automated cleaning solution for solar panels. Our key features include electrostatic biasing for dust removal, low energy consumption (just 126 watt-hours), eco-friendly technology, and seamless automation, ensuring optimal panel performance while reducing maintenance costs.
                </p>
              </div>
            </div>

            <div className="relative h-[500px]">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-64 h-64"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-400 rounded-2xl blur-xl group-hover:blur-2xl opacity-20 transition-all duration-300" />
                  <img
                    src={jake}
                    alt="Farmer with produce"
                    className="w-full h-full object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: -50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 w-64 h-64"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-400 rounded-2xl blur-xl group-hover:blur-2xl opacity-20 transition-all duration-300" />
                  <img
                    src={ruth}
                    alt="Fresh produce"
                    className="w-full h-full object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

       
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <h2 className="text-5xl font-bold text-center mb-20 relative inline-block">
          Demo Recipient Reviews
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            />
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                name: "Elias KIMANA",
                role: "Home solar panel Owner",
                quote:
                  "I was truly impressed by Verdasol’s MVP! The water-free cleaning system is a game-changer, and the automated process is incredibly efficient. It’s exactly what the solar industry needs to improve performance and reduce costs. I’m excited to see how this evolves!",
                highlight: "",
              },
              {
                name: "Mireille Ngoma",
                role: "Worker at REG",
                quote:
                  "Verdasol’s MVP exceeded my expectations. The concept of using electrostatic biasing to clean solar panels is brilliant, and the low energy consumption is a major plus. This is a solution that has real potential to revolutionize solar panel maintenance!",
                highlight: "",
              },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-20" />
                      <img
                        src={jake}
                        alt={review.name}
                        className="relative w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {review.name}
                      </h3>
                      <p className="text-green-400">{review.role}</p>
                    </div>
                  </div>
                  <blockquote className="space-y-4">
                    <p className="text-xl font-semibold text-green-400">
                      {review.highlight}
                    </p>
                    <p className="text-lg text-gray-200">{review.quote}</p>
                  </blockquote>
                  <div className="mt-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                        className="text-yellow-400 text-2xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
