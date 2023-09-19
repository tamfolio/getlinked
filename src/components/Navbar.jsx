import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLinkClick = () => {
    setActiveLink("Contact");
  };

  console.log("activeLink", activeLink);
  return (
    <div className="w-[100%] lg:h-[20vh] h-[10vh] flex items-center justify-between px-[48px] md:px-[128px] relative">
      <Link to='/' className="text-[#fff]  text-md lg:text-4xl font-bold font-clash">
        get<span className="text-[#D434FE]">linked</span>
      </Link>
      <div className="gap-[56px] hidden lg:flex">
        <p className="font-monts text-base text-[#fff]">Timeline</p>
        <p className="font-monts text-base text-[#fff]">Overview</p>
        <p className="font-monts text-base text-[#fff]">FAQs</p>
        <Link
          to="/contact"
          onClick={handleLinkClick}
          className={
            activeLink === "Contact"
              ? "active-link"
              : "font-monts text-base text-[#fff]"
          }
        >
          Contact
        </Link>
      </div>
      <Link to="/register" className="hidden lg:block">
        <Button text="Register" />
      </Link>
      <img
        src="./assets/menu.png"
        alt=""
        className="w-[19px] h-[14px] lg:hidden"
        onClick={toggleMenu}
      />
      {openMenu && (
        <div className="w-[348px] h-[492px] bg-blue absolute top-0 right-0 z-10 flex flex-col items-start justify-center lg:hidden">
          <img
            src="./assets/close.png"
            alt=""
            onClick={toggleMenu}
            className="absolute right-[60px] top-0 mt-[50px] border-solid border-[1px] p-[10px] rounded-[50%] border-[gradient]"
          />
          <div className="flex flex-col gap-[20px] px-[20px]">
            <p className="font-monts text-base text-[#fff] font-semibold">
              Timeline
            </p>
            <p className="font-monts text-base text-[#fff] font-semibold">
              Overview
            </p>
            <p className="font-monts text-base text-[#fff] font-semibold">
              FAQs
            </p>
            <Link
              to="/contact"
              className="font-monts text-base text-[#fff] font-semibold"
            >
              Contact
            </Link>
          </div>
          <Link to="/register" className="mt-[50px]">
            <Button text="Register" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
