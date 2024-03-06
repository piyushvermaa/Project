import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="ForgeNet-Labs" className="h-[70px]" />

      {/* Navbar links for larger screens */}
      <ul className="hidden sm:flex list-none pl-6 pr-6 p-3 m-2 rounded-lg bg-[#5b5b5b44] justify-center items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Menu button for smaller screens */}
      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Sidebar for smaller screens */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } absolute top-[80px] right-0 bg-[#5b5b5b] mx-4 my-2 min-w-[140px] rounded-xl p-6 sidebar`}
      >
        <ul className="list-none flex flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => {
                setActive(nav.title);
                setToggle(false);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Login button */}
      <button className="hidden sm:block bg-[#5b5b5b44] text-white rounded-lg px-4 py-2 hover:bg-[#15121244]">Login</button>
    </nav>
  );
};

export default Navbar;
