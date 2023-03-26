import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Register from './components/Pages/Register/Register';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/register" element={<Register /> }/>
          <Route path="/about" element={<About /> }/>
        </Routes>

      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
