import { motion } from 'framer-motion';

interface ArticleCardProps {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  index: number;
  inView: boolean;
}

const ArticleCard = ({ title, excerpt, image, readTime, date, index, inView }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-cream rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-sand-light/30"
      style={{
        boxShadow: '0 10px 30px 10px rgba(157, 129, 137, 0.3)',
      }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-95"
        />
        <div className="absolute inset-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>

      <div className="p-7">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 font-light tracking-wide">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-rose transition-colors duration-300 italic leading-snug">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-5 font-light">
          {excerpt}
        </p>

        <button className="inline-flex items-center text-rose font-serif font-medium hover:text-rose-coral transition-colors duration-300 text-sm tracking-wide">
          Read More
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
