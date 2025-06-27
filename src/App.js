import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Donate from './components/Donate';
import Contact from './components/Contact';
import COVID from './components/COVID';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/covid" element={<COVID />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;