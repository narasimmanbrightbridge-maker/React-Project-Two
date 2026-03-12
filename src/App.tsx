import { useState } from 'react';
import './App.css';
import Header from "./header";
import Banner from './components/Home/banner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header />
      <Banner />
    </>
  )
}

export default App
