import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-rose-900 overflow-hidden paper-texture">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 italic"
          >
            Stay in the Loop
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-balance font-light"
          >
            Get our weekly newsletter delivered to your inbox. Fresh stories, 
            exclusive interviews, and curated reads just for you.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-8 py-6 rounded-full bg-cream text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-cream-warm transition-all duration-300 shadow-2xl font-medium text-lg"
            />
            <button
              type="submit"
              className="px-10 py-6 bg-white text-rose-900 font-serif font-bold rounded-full hover:bg-cream hover:text-rose-900 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl whitespace-nowrap tracking-wide text-lg"
            >
              Subscribe Now
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-sm text-white/80 font-light"
          >
            No spam, ever. Unsubscribe at any time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-12 text-white"
          >
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 italic">50k+</div>
              <div className="text-sm sm:text-base text-white/80 font-light">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 italic">100+</div>
              <div className="text-sm sm:text-base text-white/80 font-light">Articles Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 italic">98%</div>
              <div className="text-sm sm:text-base text-white/80 font-light">Satisfaction Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
