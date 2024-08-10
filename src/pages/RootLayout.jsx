import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function RootLayout() {
  return (
    <>
      <Header />
      <div className="container">
        <Navigation />
        <Outlet />
      </div>
    </>
  );
}
