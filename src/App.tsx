import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./header";
import Banner from "./components/Home/banner";
import BannerTwo from "./components/Home/bannerTwo";
import Footer from "./footer.tsx";
import AboutPage from "./pages/about.tsx";
import Products from "./pages/products.tsx";
import MainBanner from "./components/Home/main-banner";
import SingleProducts from "./pages/productsdetails";
import ContactUs from "./pages/contact.tsx";
// import Sample from "./components/APIFrontPage.tsx"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <Banner />
              <BannerTwo />
              {/* <Sample /> */}
            </>
          }
        ></Route>

        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsdetails/:id" element={<SingleProducts />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
