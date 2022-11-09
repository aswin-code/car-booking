import { useContext } from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./component/NavBar/Navbar";
import { authContext } from "./context/AuthContext";
import Booking from "./pages/booking/Booking";
import Cars from "./pages/Cars.jsx/Cars";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ThankYou from "./pages/ThankYou/ThankYou";


function App() {
  const { user } = useContext(authContext)
  console.log(user)
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to='/login' />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [{
        path: '/',
        element: <Home />
      }, {
        path: '/cars',
        element: <Cars />


      }, {
        path: '/booking',
        element: <Booking />
      }, {
        path: '/thankyou',
        element: <ThankYou />
      }]
    }, {
      path: '/login',
      element: <Login />
    }, {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
