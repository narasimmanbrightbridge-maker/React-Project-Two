import { useState } from 'react';
import './App.css';
import Header from "./header";
import Banner from './components/Home/banner';
import BannerTwo from './components/Home/bannerTwo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header />
      <Banner />
      <BannerTwo />
    </>
  )
}

export default App
