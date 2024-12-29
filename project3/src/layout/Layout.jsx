import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>Navbar</nav>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </>
  );
}

export default Layout;
