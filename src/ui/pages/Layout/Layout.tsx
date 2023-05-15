//react-router
import { Outlet } from "react-router-dom";
//components
import Navbar from "../../components/navbar/navbar";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
