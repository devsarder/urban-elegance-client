import { Outlet } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Home/Footer";

const Layout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
