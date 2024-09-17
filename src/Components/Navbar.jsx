import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import "./CSS/Navbar.css";

const Navbar = () => {
  const navItems = (
    <>
      <li className="transform cursor-pointer ">
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={500}
          className="nav"
        >
          Home
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"journey"}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-50}
          duration={500}
          className="nav"
        >
          Journey
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"about"}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-50}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"services"}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-50}
          duration={500}
        >
          Services
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"projects"}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-50}
          duration={500}
        >
          Projects
        </Link>
      </li>
      <li className="transform cursor-pointer ">
        <Link
          to={"contact"}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div
      className={
        "bg-transparent z-10 w-full container mx-auto  transition duration-500"
      }
    >
      <div className="z-20 drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          {/* Navbar */}
          <div className="px-4 lg:px-20">
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
                <h1 className="text-4xl text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
                  Riyad
                </h1>
              </div>
              <div className="flex justify-end navbar-end">
                <div className="hidden mr-6 lg:block">
                  <ul className="flex text-xl gap-7">{navItems}</ul>
                </div>
                <h1 className="transform cursor-pointer hover:text-gray-200">
                  {" "}
                  <a target="blank" href="https://github.com/AsibHasanRiyad">
                    <FaGithub className="text-4xl transition duration-500 ease-out transform cursor-pointer hover:scale-125"></FaGithub>
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
          <ul className="min-h-full gap-5 p-4 text-xl text-gray-200 bg-black menu w-60">
            {/* Sidebar content here */}
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
