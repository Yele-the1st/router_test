import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./screens/Error";

import HomePage from "./screens/Home";
import ProductDetailPage from "./screens/ProductDetail";
import ProductsPage from "./screens/Products";
import RootLayout from "./screens/Root";
// import MainHeader from "./components/MainHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
