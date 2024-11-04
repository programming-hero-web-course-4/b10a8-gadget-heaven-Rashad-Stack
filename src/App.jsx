import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/RootLayout";
import Statistics from "./pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "statistics",
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
  return <RouterProvider router={router} />;
}

export default App;
