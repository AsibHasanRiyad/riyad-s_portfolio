const Experience = () => {
  return (
    <div  className=" py-20">
      <h1 className=" text-center font-bold pb-2  text-5xl mb-20 text-transparent bg-gradient-to-br bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
        My Journey
      </h1>
      {/* Journey 1 */}
      <div className=" absolute left-1/2 transform -translate-x-1/2 -translate-y-[28px] z-10 flex items-center justify-center">
        <h1 className=" flex justify-center items-center bg-gray-700 p-1 rounded-full w-14 h-14 text-gray-200">
          2023
        </h1>
      </div>
      <div className="  py-3 px-2 max-w-2xl mx-auto md:px-0">
        <div className=" relative text-gray-200 antialiased text-sm font-bold">
          {/* vertical line */}
          <div className=" hidden absolute w-1 md:block bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>
          {/* left card */}

          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            className=" flex items-center flex-col md:flex-row"
          >
            <div className=" flex justify-start w-full mx-auto items-center">
              <div className=" w-full md:w-1/2 md:pr-8">
                <div className=" bg-slate-800 p-4 rounded shadow  ">
                  <h3 className=" text-lg">
                    Complete Web Development Course With Jhankar Mahbub
                  </h3>
                  <h1 className=" text-sm">Programming Hero</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute left-1/2 transform -translate-x-1/2 -translate-y-[28px] z-10 flex items-center justify-center">
        <h1 className=" flex justify-center items-center bg-gray-700 p-1 rounded-full w-14 h-14 text-gray-200">
          2023
        </h1>
      </div>
      {/* Journey 2 */}
      <div className="  py-3 px-2 max-w-2xl mx-auto md:px-0">
        <div className=" relative text-gray-200 antialiased text-sm font-bold">
          <div className=" hidden absolute w-1 md:block bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            className=" flex items-center flex-col md:flex-row"
          >
            <div className=" flex justify-end w-full mx-auto items-center">
              <div className=" w-full md:w-1/2 md:pl-8">
                <div className=" bg-slate-800 p-4 rounded shadow  ">
                  <h3 className=" text-lg">
                    Bachelor of Science in Electrical and Electronics
                    Engineering (EEE)
                  </h3>
                  <h1 className=" text-sm">
                    IUBAT— International University of Business Agriculture and
                    Technology
                  </h1>
                  <h1 className=" text-sm">Passing Year: 2023 </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute left-1/2 transform -translate-x-1/2 -translate-y-[28px] z-10 flex items-center justify-center">
        <h1 className=" flex justify-center items-center bg-gray-700 p-1 rounded-full w-14 h-14 text-gray-200">
          2017
        </h1>
      </div>
      {/* Journey 3 */}
      <div className="  py-3 px-2 max-w-2xl mx-auto md:px-0">
        <div className=" relative text-gray-200 antialiased text-sm font-bold">
          <div className=" hidden absolute w-1 md:block bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            className=" flex items-center flex-col md:flex-row"
          >
            <div className=" flex justify-start w-full mx-auto items-center">
              <div className=" w-full md:w-1/2 md:pr-8">
                <div className=" bg-slate-800 p-4 rounded shadow  ">
                  <h3 className=" text-lg">Higher Secondary Certificate</h3>
                  <h1 className=" text-sm">
                    Adamjee Cantonment College, Dhaka
                  </h1>
                  <h1 className=" text-sm">Passing Year: 2017 </h1>
                  <h1 className=" text-sm">Result: GPA 5.00 </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute left-1/2 transform -translate-x-1/2 -translate-y-[28px] z-10 flex items-center justify-center">
        <h1 className=" flex justify-center items-center bg-gray-700 p-1 rounded-full w-14 h-14 text-gray-200">
          2015
        </h1>
      </div>
      <div className="  py-3 px-2 max-w-2xl mx-auto md:px-0">
        <div className=" relative text-gray-200 antialiased text-sm font-bold">
          <div className=" hidden absolute w-1 md:block bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            className=" flex items-center flex-col md:flex-row"
          >
            <div className=" flex justify-end w-full mx-auto items-center">
              <div className=" w-full md:w-1/2 md:pl-8">
                <div className=" bg-slate-800 p-4 rounded shadow  ">
                  <h3 className=" text-lg">Secondary School Certificate</h3>
                  <h1 className=" text-sm">Sristy Academic School, Tangail</h1>
                  <h1 className=" text-sm">Passing Year: 2015 </h1>
                  <h1 className=" text-sm">Result: GPA 5.00 </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
