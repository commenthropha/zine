import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  inView: boolean;
}

const FeatureCard = ({ title, description, icon, index, inView }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={inView ? { opacity: 1, y: 0, rotate: index % 2 === 0 ? -0.5 : 0.5 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
      className="bg-white z-10 p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-0 relative overflow-visible group"
      style={{
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.08), 8px 8px 16px rgba(0, 0, 0, 0.06), 12px 12px 24px rgba(0, 0, 0, 0.04)',
        borderRadius: '3px',
        backgroundColor: 'white',
      }}
    >
      
      {/* Realistic paper fold corner with shadow */}
      <div 
        className="absolute top-0 right-0 w-0 h-0 border-t-[35px] border-r-[35px] transition-all duration-300 group-hover:border-t-[40px] group-hover:border-r-[40px]"
        style={{
          borderTopColor: '#e8e8e8',
          borderRightColor: 'transparent',
          filter: 'drop-shadow(-2px 2px 3px rgba(0,0,0,0.15))',
        }}
      />
      <div 
        className="absolute top-0 right-0 w-0 h-0 border-t-[35px] border-r-[35px] transition-all duration-300 group-hover:border-t-[40px] group-hover:border-r-[40px]"
        style={{
          borderTopColor: '#f5f5f5',
          borderRightColor: 'transparent',
        }}
      />
      
      {/* Subtle paper edge texture */}
      <div className="absolute inset-0 rounded-sm pointer-events-none" 
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)',
        }}
      />
      
      {/* Flower overlay on corner - position varies by index */}
      <div 
        className={`absolute z-50 opacity-90 transition-transform duration-300 group-hover:scale-110 ${
          index === 0 ? '-bottom-8 -right-8 w-36 h-36 rotate-12 group-hover:rotate-6' :
          index === 1 ? '-top-8 -left-8 w-28 h-28 -rotate-12 group-hover:-rotate-6' :
          '-top-6 -right-6 w-24 h-24 rotate-45 group-hover:rotate-30'
        }`}
      >
        <img src={icon} alt="" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      <div className="relative pt-8">
        <h3 className="text-2xl font-playfair font-bold text-mauve mb-4 italic tracking-tight leading-tight">{title}</h3>
        <p className="text-gray-600 font-lora leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
