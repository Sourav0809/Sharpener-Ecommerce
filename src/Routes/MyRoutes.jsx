import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";
import ContactUs from "../Pages/ContactUs";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<ProductPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default MyRoutes;
