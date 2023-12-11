import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t-2 border-gray-500">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <h1 className=" text-4xl text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
          Riyad
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-300">
        © 2023. All Rights Reserved by <span className="text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">Riyad</span>
        </p>

        <div className="flex mt-4 -mx-1.5 text-3xl gap-2 ">
          <a
            className="mx-1.5  text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            href="https://github.com/AsibHasanRiyad"
          >
            <FaGithub />
          </a>
          <a
            className="mx-1.5  text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            href="https://twitter.com/AsibHasanRiyad"
          >
            <FaTwitter />
          </a>

          <a
            className="mx-1.5  text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.linkedin.com/in/asibhasan/"
          >
            <FaLinkedin />
          </a>

          <a
            className="mx-1.5  text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.facebook.com/syd.ryd"
          >
            <FaFacebook />
          </a>

          <a
            className="mx-1.5  text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.instagram.com/sayad.riyad/"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
