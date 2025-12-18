import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArticleCard from './ArticleCard';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const FeaturedArticles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const articles = [
    {
      id: 1,
      category: 'Culture',
      title: 'The Renaissance of Urban Gardens',
      excerpt: 'How cities are transforming concrete jungles into green havens for community and sustainability.',
      image: image1,
      readTime: '8 min read',
      date: 'Dec 10, 2025',
    },
    {
      id: 2,
      category: 'Technology',
      title: 'AI and the Future of Creativity',
      excerpt: 'Exploring how artificial intelligence is reshaping the creative landscape and what it means for artists.',
      image: image2,
      readTime: '12 min read',
      date: 'Dec 8, 2025',
    },
    {
      id: 3,
      category: 'Travel',
      title: 'Hidden Gems of the Mediterranean',
      excerpt: 'Discover the untouched coastal villages that offer authentic experiences away from tourist crowds.',
      image: image3,
      readTime: '10 min read',
      date: 'Dec 5, 2025',
    },
    {
      id: 4,
      category: 'Lifestyle',
      title: 'Mindful Living in a Fast-Paced World',
      excerpt: 'Practical strategies for finding balance and presence in our always-connected modern lives.',
      image: image1,
      readTime: '6 min read',
      date: 'Dec 3, 2025',
    },
    {
      id: 5,
      category: 'Science',
      title: 'The Ocean\'s Hidden Symphony',
      excerpt: 'Marine biologists decode the complex communication systems of whales and dolphins.',
      image: image2,
      readTime: '15 min read',
      date: 'Dec 1, 2025',
    },
    {
      id: 6,
      category: 'Food',
      title: 'Farm to Table: A Culinary Revolution',
      excerpt: 'Meet the chefs and farmers reimagining local food systems for a sustainable future.',
      image: image3,
      readTime: '9 min read',
      date: 'Nov 28, 2025',
    },
  ];



  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-red-50 paper-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 italic">
            Featured <span className="text-rose-900">Articles</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance font-light">
            Dive into our latest stories and explore topics that matter most to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              readTime={article.readTime}
              date={article.date}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="px-10 py-5 bg-mauve hover:bg-rose text-white font-serif font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl tracking-wide">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
