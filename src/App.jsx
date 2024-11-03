import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <div>home...</div>,
      },
      {
        path: "/statistics",
        element: <div>statistics...</div>,
      },
      {
        path: "/dashboard",
        element: <div>dashboard...</div>,
      },
      {
        path: "/contact-us",
        element: <div>contact us...</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
