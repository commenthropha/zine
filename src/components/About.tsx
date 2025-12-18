import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';
import flower from '../assets/flower.webp';
import flowerA from '../assets/flower_a.png';
import flowerB from '../assets/flower_b.png';
import flowerC from '../assets/flower_c.webp';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      title: 'Example',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.',
      icon: flowerA,
    },
    {
      title: 'Example',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.',
      icon: flowerB,
    },
    {
      title: 'Example',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.',
      icon: flowerC,
    },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-[#fff0db] paper-texture overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-12 bg-[#fef0f5]" style={{ 
        clipPath: 'polygon(0 0, 2% 80%, 4% 20%, 6% 60%, 8% 40%, 10% 70%, 12% 30%, 14% 50%, 16% 80%, 18% 40%, 20% 60%, 22% 20%, 24% 70%, 26% 50%, 28% 30%, 30% 80%, 32% 40%, 34% 60%, 36% 30%, 38% 70%, 40% 50%, 42% 20%, 44% 60%, 46% 80%, 48% 40%, 50% 70%, 52% 30%, 54% 60%, 56% 50%, 58% 80%, 60% 40%, 62% 20%, 64% 60%, 66% 70%, 68% 30%, 70% 50%, 72% 80%, 74% 40%, 76% 60%, 78% 20%, 80% 70%, 82% 50%, 84% 30%, 86% 80%, 88% 40%, 90% 60%, 92% 30%, 94% 70%, 96% 50%, 98% 20%, 100% 60%, 100% 0)',
      }} />
      
      {/* Decorative flower on left side */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[600px] pointer-events-none" style={{ zIndex: 0 }}>
        <img 
          src={flower} 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 italic">
            About <span className="text-rose-900">Our Magazine</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, velit at aliquet tempus, erat enim tristique mauris, a vestibulum. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} style={{ position: 'relative', zIndex: 100 }}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
                inView={inView}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
