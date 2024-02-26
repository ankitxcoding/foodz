import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
