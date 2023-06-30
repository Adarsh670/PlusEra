import Navbar from "./components/Navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./pages/Products/SingleProduct";
import HomeSection from "./pages/homesection/HomeSection";
import Collaboration from "./pages/collaboration/Collaboration";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Products />} />
        <Route path="singleproduct/:id" element={<SingleProduct />} />
        <Route path="contact" element={<Contact />} />
        <Route path="collaboration" element={<Collaboration />} />
        <Route path="adi" element={<HomeSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
