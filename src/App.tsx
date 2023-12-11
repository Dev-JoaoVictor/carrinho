import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Details } from "./pages/details";

import { Layout } from "./components/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/details/:id", element: <Details /> }
    ]
  }
])
