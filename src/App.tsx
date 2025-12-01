import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
// import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import FAQ from "./pages/FAQ";
import Review from "./pages/Review";
import Blogs from "./pages/Blogs";
import WhyUs from "./pages/WhyUs";
import NavBar from "./components/Nav";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
