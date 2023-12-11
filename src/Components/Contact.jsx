import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending....");

    emailjs
      .sendForm(
        "service_hbp47fl",
        "template_jb2jogd",
        form.current,
        "PR07K8CX4TXAFdHfO"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email Successfully Sent...', {id: toastId});
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="bg-transparent  py-20">
      <div className="container px-6 mx-auto">
        <div className="lg:flex lg:items-start lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500 text-5xl font-bold">
              Get In Touch
            </h1>
            <p className=" text-white py-6">
            Ready to discuss your project or have a question? I&apos;m here to help! Feel free to reach out via the provided contact form or email. Let&apos;s turn your ideas into reality.
            </p>

            <div className=" space-y-4">
              <p className="flex items-center gap-2 text-violet-500 -mx-2">
                <FaLocationArrow />

                <span className="mx-2 text-gray-200 truncate w-72 ">
                  Dhaka, Bangladesh
                </span>
              </p>

              <p className="flex items-center gap-2 text-violet-500 -mx-2">
                <FaPhone />
                <span className="mx-2 text-gray-200 truncate w-72 ">
                  +8801568260699
                </span>
              </p>

              <p className="flex items-center gap-2 text-violet-500 -mx-2">
                <HiMail />

                <span className="mx-2 text-gray-200 truncate w-72 ">
                  asibhasanriyad.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-200  ">Follow Me</h3>

              <div className="flex mt-4 -mx-1.5 text-3xl gap-2 ">
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
          </div>

          <div className=" lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 mx-auto overflow-hidden bg-transparent rounded-lg   lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 className="text-lg font-medium text-gray-200">
                What do you want to ask ?
              </h1>

              <form ref={form} onSubmit={sendEmail} className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-base text-gray-200 dark:text-gray-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-200 placeholder-gray-600  bg-[#1C1C22]  rounded-md     focus:-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-base text-gray-200 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    name="from_email"
                    placeholder="Enter your email"
                    className="block w-full px-5 py-3 mt-2 text-gray-200 placeholder-gray-600  bg-[#1C1C22]  rounded-md     focus:-violet-500  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-base text-gray-200 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-200 placeholder-gray-600  bg-[#1C1C22]  rounded-md focus:-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  value="Send"
                  className="w-full px-6 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize bg-gradient-to-r rounded-md from-indigo-700 via-purple-600 to-pink-700 cursor-pointer hover:bg-gradient-to-r  hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transform hover:scale-105 transition duration-500 ease-out "
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
