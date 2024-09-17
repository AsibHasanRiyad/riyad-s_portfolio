/* eslint-disable react/prop-types */

const Header = ({ header }) => {
  return (
    <h1 className="py-4 text-3xl font-bold text-center text-transparent md:text-4xl lg:text-5xl bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500 lg:py-10">
      {header}
    </h1>
  );
};

export default Header;
