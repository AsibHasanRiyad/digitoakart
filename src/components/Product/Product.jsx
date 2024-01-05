// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GiCheckMark } from "react-icons/gi";

const Product = () => {
  const colors = ["#301933", "#205E7C", "#A50011", "#F9E5C9", "#5C5B56"];
  const models = ["Iphone 14", "Iphone 14 Pro Max"];
  const [selectedColor, setSelectedColor] = useState();
  const [selectedModel, setSelectedModel] = useState();

  // Select color
  const handelColor = (color) => {
    setSelectedColor(color);
  };
  //select model
  const handelModel = (model) => {
    setSelectedModel(model);
  };
  return (
    <div>
      <div className=" py-5 overflow-hidden bg-white font-poppins ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                className="sticky top-0  overflow-hidden "
              >
                {/* product image */}
                <Carousel
                  showArrows={false}
                  showStatus={false}
                  dynamicHeight={false}
                >
                  <div>
                    <img src="https://i.ibb.co/VWRzgRg/i-Phone-14-Pro-Space-Black-1138.jpg" />
                  </div>
                  <div>
                    <img src="https://i.ibb.co/ng848bL/i-Phone-14-Pro-Silver-1035.jpg" />
                  </div>
                  <div>
                    <img src="https://i.ibb.co/Dz55gnW/i-Phone-14-Pro-Gold-7135.jpg" />
                  </div>
                  <div>
                    <img src="https://i.ibb.co/9GdcMy2/i-Phone-14-Pro-Deep-Purple-7300.jpg" />
                  </div>
                </Carousel>
              </div>
            </div>

            {/* Right side part */}
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="w-full px-4 md:w-1/2 "
            >
              <div>
                <div>
                  <h1 className=" text-[#0F5E59] text-2xl font-semibold">
                    Apple Iphones
                  </h1>
                </div>
                {/* model name */}
                <div>
                  <h1 className=" text-4xl py-7">
                    {selectedModel ? (
                      <h1>{selectedModel}</h1>
                    ) : (
                      <h1>Iphone 14 Pro Max</h1>
                    )}
                  </h1>
                  {/* model */}

                  <div className=" flex gap-16 items-center">
                    <p className=" text-lg"> Model:</p>
                    <div className=" flex gap-2">
                      {models?.map((model, index) => (
                        <button
                          onClick={() => handelModel(model)}
                          className={`px-6 py-2.5 border border-gray-700 ${
                            model === selectedModel &&
                            "bg-[#0D9488] border-none text-white"
                          } `}
                          key={index}
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* color */}
                <div className=" flex gap-16 items-center py-5">
                  <p className=" text-lg"> Color:</p>
                  <div className=" flex gap-2">
                    {colors?.map((color, index) => (
                      <button
                        onClick={() => handelColor(color)}
                        style={{ background: color }}
                        className=" h-12 w-12 rounded-full"
                        key={index}
                      >
                        {color === selectedColor && (
                          <h1 className=" flex justify-center items-center">
                            {" "}
                            <GiCheckMark className=" text-white text-2xl" />{" "}
                          </h1>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center ">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <button className="text-white w-fit bg-slate-800 flex justify-center items-center gap-2 cursor-pointer hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-3 py-2.5 text-center  hover:scale-110 transition duration-500 ease-out">
                      Add To Cart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
