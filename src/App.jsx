import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './Components/Navbar/Navbar'; // Adjust path if needed
import Home from './Components/Home/Home';
import About from './Components/About/About'; // Ensure this component exists
import Portfolio from './Components/Portfolio/Portfolio'; // Ensure this component exists
import Contact from './Components/Contact/Contact'; // Ensure this component exists
import Second from './Components/SecondSection/Second';
import Footer from './Components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Second />
      <Footer />
    </Router>
  );
}

export default App;
