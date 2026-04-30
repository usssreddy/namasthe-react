import  React from "react" ;
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestarentMenuItem from "./components/RestarentMenuItem";

// import { createBrowserRouter,  } from "react-router";
import { createBrowserRouter, RouterProvider, Outlet  } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Error from "./utils/Error";
import RestarentMenu from "./components/RestarentMenu";


const AppLayout = () => (
    <div className="app" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <Outlet />
            <Footer />
    </div>

);


const appRouter =  createBrowserRouter([

    {
    path: "/",
    element: <AppLayout/>,
    children : [
        {
            path:"/",
            element: <Body/>
        },
        {
            path:  "/aboutUs",
            element: <AboutUs/>
        }
        ,
        {
            path:  "/cart",
            element: <Cart/>
        }
        ,
        {
            path:  "/home",
            element: <Home/>
        }
        ,
        {
            path:  "/contactUs",
            element: <ContactUs/>
        },

        {
            path:  "/restarnetmenu/:resId",
            element: <RestarentMenuItem/>
        }

    ],
    errorElement: <Error/>
    },
   

]);





// const heading =  React.createElement("h1", {id: "heading"} ,  "hello world form react!");

   const root =  ReactDOM.createRoot(document.getElementById("root"));

   root.render(<RouterProvider router={appRouter}/>);