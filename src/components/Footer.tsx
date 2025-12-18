import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '👤', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-rose-light to-rose-coral bg-clip-text text-transparent italic">
                The Magazine
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md font-light">
                Bringing you thoughtful stories and compelling narratives 
                from around the world. Join our community of curious minds.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose transition-colors duration-300 text-xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
      
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} The Magazine. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-coral transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-coral transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-coral transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
