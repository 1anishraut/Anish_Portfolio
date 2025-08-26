
import NavBar from "./Components/NavBar";
import {  Outlet,  } from "react-router-dom";




const Layout = () => {
 

  return (
    <div
      className=""
    >
      <div className="">
        <NavBar />
      </div>

      <div className="">
        <Outlet />
      </div>

      {/* <div
        className={`${userData ? "fixed" : "hidden"} relative h-[10%] lg:hidden`}
      >
        <NavBar />
      </div> */}
    </div>
  );
};

export default Layout;
