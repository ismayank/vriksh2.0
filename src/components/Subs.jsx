import card1 from "../assets/card1.png";
import card5 from "../assets/card5.png";
import leftEnd from "../resources/Ellipse2.svg";
import rightEnd from "../resources/Ellipse3.svg";

export const Subs = () => {
  return (
    <>
      <div className="mt-24 mb-28 md:mb-32 md:mt-44">
        <div className="text-center md:text-center font-jostBold6 text-2xl md:text-4xl my-10 md:my-24">
          <h1>Play your part in saving the environment</h1>
        </div>
        <div className="relative flex flex-wrap gap-6 justify-evenly">
          <div
            className="relative w-auto h-auto mb-8 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${card1})` }}
          >
            <div className="relative flex flex-col p-4 text-white items-center">
              <h1 className="text-4xl mt-10 text-black font-jostBold7">1 $</h1>
              <button className="mt-8 md:mt-12 px-10 py-1 md:px-16 md:py-2 bg-white font-jostBold7 text-xl text-customGreen rounded-lg">
                PLANT NOW
              </button>
              <div className="mt-3 mb-10 mx-2 md:mt-6 md:mb-16 md:mx-4">
                <ul className="mt-4 mx-2 md:mt-8 md:mx-4">
                  <li className="flex items-center font-jostBold7 text-black text-xl mt-6 md:text-2xl md:mt-10">
                    <span className="inline-block w-3 h-3 bg-customGreen rounded-full mr-6"></span>
                    One time purchase
                  </li>
                  <li className="flex items-center font-jostBold7 text-black text-xl mt-6 md:text-2xl md:mt-10">
                    <span className="inline-block w-3 h-3 bg-customGreen rounded-full mr-6"></span>
                    One dollar per tree
                  </li>
                  <li className="flex items-center font-jostBold7 text-black text-xl mt-6 md:text-2xl md:mt-10">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-6"></span>
                    doesn't calculate your <br></br> offset
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="relative w-fit h-fit bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${card5})` }}
          >
            <div className="relative flex flex-col p-4 text-white items-center">
              <h1 className="text-4xl mt-10 text-black font-jostBold7">1 $</h1>
              <button className="mt-8 md:mt-12 px-10 py-1 md:px-16 md:py-2 bg-white font-jostBold7 text-xl text-customGreen rounded-lg">
                PLANT NOW
              </button>
              <div className="mt-3 mb-10 mx-2 md:mt-6 md:mb-16 md:mx-4">
                <ul className="mt-4 mx-2 md:mt-8 md:mx-4">
                  <li className="flex items-center font-jostBold7 text-black text-xl mt-6 md:text-2xl md:mt-10">
                    <span className="inline-block w-3 h-3 bg-customGreen rounded-full mr-6"></span>
                    One time purchase
                  </li>
                  <li className="flex items-center font-jostBold7 text-black text-xl mt-6 md:text-2xl md:mt-10">
                    <span className="inline-block w-3 h-3 bg-customGreen rounded-full mr-6"></span>
                    One dollar per tree
                  </li>
                  <li className="flex items-center font-jostBold7 text-black text-xl mt-6 md:text-2xl md:mt-10">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-6"></span>
                    doesn't calculate your <br></br> offset
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
