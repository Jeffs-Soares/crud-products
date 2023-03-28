import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Register from './components/Pages/Register/Register';
import FormClient from './components/Pages/Register/FormClient/FormClient';
import FormProduct from './components/Pages/Register/FormProduct/FormProduct';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home /> }/>
          <Route path="/about" element={<About /> }/>
          <Route path="/register" element={<Register />}>

          </Route>
          
        </Routes>

      </BrowserRouter>
    {/*   <Footer /> */}

    </>
  );
}

export default App;
