import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Navbar.css";
const Navbar = () => {
  const navItems = (
    <>
      <li className="transform hover:scale-125 transition duration-500 ease-out ">
        <NavLink
          to={"/"}
          class="nav"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="transform hover:scale-125 transition duration-500 ease-out">
        <NavLink
          to={"/skills"}
          class="nav"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Skills
        </NavLink>
      </li>
      <li className="transform hover:scale-125 transition duration-500 ease-out">
        <NavLink
          to={"/experience"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Experience
        </NavLink>
      </li>
      <li className="transform hover:scale-125 transition duration-500 ease-out">
        <NavLink
          to={"/projects"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="transform hover:scale-125 transition duration-500 ease-out">
        <NavLink
          to={"/education"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Education
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer z-20 bg-black py-2">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className=" px-4 lg:px-20">
          <div className="w-full navbar text-gray-200 font-bold text-xl">
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
            <div className=" navbar-start text-[#3ba461] text-3xl ">Riyad </div>
            <div className=" navbar-center hidden lg:block">
              <ul className="flex gap-7 text-xl">
                {/* Navbar menu content here */}
                {navItems}
              </ul>
            </div>
            <div className=" navbar-end flex justify-end ">
              <h1 className=" transform hover:scale-125 transition duration-500 ease-out  cursor-pointer   hover:text-gray-400 ">
                {" "}
                <Link target="blank" to="https://github.com/AsibHasanRiyad">
                  <FaGithub className=" text-4xl"></FaGithub>
                </Link>
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
  );
};

export default Navbar;
