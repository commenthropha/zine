import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-cream"
    >
      <nav className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-playfair font-bold italic text-rose-900"
          >
            Pomegranate
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#" className="text-sand font-lora hover:text-rose-900 transition-colors duration-300">Articles</a>
            <a href="#" className="text-sand font-lora hover:text-rose-900 transition-colors duration-300">About</a>
            <a href="#" className="text-sand font-lora hover:text-rose-900 transition-colors duration-300">Subscribe</a>
            <a href="#" className="text-sand font-lora hover:text-rose-900 transition-colors duration-300">Contact</a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-6 py-3 bg-rose-900 hover:bg-rose-500 text-white font-lora text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
              Sign In
            </button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
