import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Home />

      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
