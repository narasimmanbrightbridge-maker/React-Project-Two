import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./header";
import Banner from "./components/Home/banner";
import BannerTwo from "./components/Home/bannerTwo";
import Footer from "./footer.tsx";
import AboutPage from "./pages/about.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <BannerTwo />
            </>
          }
        ></Route>

        <Route path="/about" element={<AboutPage />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
