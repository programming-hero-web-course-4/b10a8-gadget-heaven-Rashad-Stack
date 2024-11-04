import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStateProvider from "./context/GlobalStateProvider";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/RootLayout";
import Statistics from "./pages/Statistics";
import { getProducts } from "./utils/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    loader: getProducts,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  );
}

export default App;
