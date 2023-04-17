import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DataApiProvider from "./context/DataApi";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <DataApiProvider>
          <Outlet />
        </DataApiProvider>

        <Footer />
      </div>
    </>
  );
}

export default App;
