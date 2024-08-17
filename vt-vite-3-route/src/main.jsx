import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Secret from './pages/Secret.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "secret",
    element: <Secret />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
