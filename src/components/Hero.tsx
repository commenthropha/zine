import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pomegranate from '../assets/pomegranate.png';
import heart from '../assets/heart.png';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen flex items-center bg-[#fef0f5] overflow-hidden">
      {/* Decorative hearts scattered around */}
      <img src={heart} alt="" className="z-40 absolute top-[15%] right-[12%] w-12 h-12 opacity-50 -rotate-12 animate-pulse" style={{ animationDuration: '3.5s' }} />
      <img src={heart} alt="" className="z-40 absolute bottom-[25%] right-[15%] w-16 h-16 opacity-60 rotate-6" />

      <div ref={ref} className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left lg:max-w-2xl flex-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl mt-30 mb-20 sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 tracking-tight leading-tight"
            >
              <span className='text-mauve' style={{ fontFamily: 'Parisienne, cursive' }}>I'd </span>
              <span className="text-rose-900">Peel A Pomegranate </span>
              <span className='text-mauve'style={{ fontFamily: 'Parisienne, cursive' }}>For You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper at odio quis lacinia. Proin iaculis, erat vitae hendrerit aliquet, ligula eros volutpat nibh, nec vulputate dolor felis at turpis. 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-row gap-4 items-center">
                <button className="z-30 px-10 py-5 bg-rose-900 hover:bg-rose-500 text-white font-serif font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl tracking-wide">
                  Start Reading
                </button>
                <button className="z-30 px-10 py-5 bg-rose-50 border-2 border-mauve hover:bg-mauve hover:text-white text-mauve font-serif font-medium rounded-full transition-all duration-300 transform hover:scale-105 tracking-wide">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Pomegranate image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-auto flex-1 max-w-2xl flex justify-center relative"
          >
            <img 
              src={pomegranate} 
              alt="Pomegranate" 
              className="w-[400px] lg:w-full h-auto object-contain relative z-10"
            />
            
            {/* Animated heart outline */}
            <svg 
              className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-1/2 w-[480px] lg:w-[calc(100%+80px)] h-auto pointer-events-none z-20 rotate-20"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M100 170 C 60 140, 20 110, 20 70 C 20 40, 40 20, 65 20 C 80 20, 90 30, 100 45 C 110 30, 120 20, 135 20 C 160 20, 180 40, 180 70 C 180 110, 140 140, 100 170 Z"
                stroke="#f4acb7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ 
                  pathLength: { duration: 2, delay: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.3, delay: 0.8 }
                }}
              />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-mauve" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
