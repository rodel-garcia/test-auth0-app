import { RouteObject } from "react-router-dom";

import Contact from "./app/pages/Contact";
import About from "./app/pages/About";
import NotFound from "./app/pages/NotFound";

import App from "./app/App";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

export default Routes;
