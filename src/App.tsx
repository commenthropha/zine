import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedArticles from './components/FeaturedArticles';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FeaturedArticles />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
