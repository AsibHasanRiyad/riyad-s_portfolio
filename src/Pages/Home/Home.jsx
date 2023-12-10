

import Experience from "../../Components/Experience";
import Hero from "../../Components/Hero";
import Skills from "../../Components/Skills";




const Home = () => {
  return (

         <div>
          <Hero />
          <Experience />
          <div className=" grid grid-cols-2 items-center justify-between">
            <div >
              <img src="https://i.ibb.co/B32PZs1/c2c59f267df6e4f35fc630252dd2016d-sticker.png" alt="" />
            </div>
            <Skills />
          </div>
         </div>
  );
};

export default Home;
