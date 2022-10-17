import Navbar from "components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function SharedLayot() {
  return (
    <>
        <Navbar />
            <Outlet />
    </>
  )
}
