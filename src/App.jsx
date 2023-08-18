import React from "react"
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import MyUser from "./pages/myUser/MyUser";
import Order from "./pages/order/Order";
import Add from "./pages/add/Add";
import Message from "./pages/message/Message";
import Login from "./pages/login/Login";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/user/:id',
          element: <User />
        },
        {
          path: '/myUser',
          element: <MyUser />
        },
        {
          path: '/order',
          element: <Order />
        },
        {
          path: '/message',
          element: <Message />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
