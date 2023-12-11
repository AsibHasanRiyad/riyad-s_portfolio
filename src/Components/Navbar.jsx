import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import "./CSS/Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 90) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const navItems = (
    <>
      <li className="transform cursor-pointer ">
        <Link
          to={"home"}
          class="nav"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"journey"}
          class="nav"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Journey
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"about"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"services"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Services
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"projects"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Projects
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"contact"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div
    className={
      navBar
        ? " bg-[#100f0fe4] z-10 w-full sticky top-0 transform"
        : "bg-transparent z-10 w-full sticky top-0 transition duration-500"
    }
    >
      <div className="drawer z-20 ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className=" px-4 lg:px-20">
            <div className="w-full navbar text-[#F1F2F5]  text-xl">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="navbar-start">
                <h1 className=" text-4xl text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
                  Riyad
                </h1>
              </div>
              <div className=" navbar-end flex justify-end ">
                <div className=" hidden lg:block mr-6">
                  <ul className="flex gap-7 text-xl">{navItems}</ul>
                </div>
                <h1 className=" transform   cursor-pointer   hover:text-gray-200 ">
                  {" "}
                  <a target="blank" href="https://github.com/AsibHasanRiyad">
                    <FaGithub className=" transform cursor-pointer hover:scale-125 transition duration-500 ease-out text-4xl"></FaGithub>
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-black text-gray-200 text-xl gap-5">
            {/* Sidebar content here */}
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
