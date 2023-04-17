import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Pages/Home/Home";
import Data from "./components/Pages/Data/Data";
import Register from "./components/Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/data",
        element: <Data />,
      },

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const routes = ({ children }) => {
  return (
    <>
      <RouterProvider router={router}>
            {children}
      </RouterProvider>
    </>
  );
};

export default routes;
