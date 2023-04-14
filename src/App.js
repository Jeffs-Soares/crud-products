import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DataApiProvider from "./context/DataApi";

function App() {
  return (
    <>
      <Header />

        <DataApiProvider>
        
        <Outlet />

        </DataApiProvider>

      <Footer />
    </>
  );
}

export default App;
