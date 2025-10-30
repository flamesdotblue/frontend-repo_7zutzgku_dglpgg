import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div className="border-t border-neutral-900" />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

export default App;
