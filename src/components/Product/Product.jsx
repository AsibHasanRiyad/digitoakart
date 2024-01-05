// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GiCheckMark } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";

const Product = () => {
  const colors = ["#301933", "#205E7C", "#A50011", "#F9E5C9", "#5C5B56"];
  const models = ["Iphone 14", "Iphone 14 Pro Max"];
  const storages = ["128GB", "256GB", "512GB"];
  const [selectedColor, setSelectedColor] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [selectedStorage, setSelectedStorage] = useState();

  // Select color
  const handelColor = (color) => {
    setSelectedColor(color);
  };
  //select model
  const handelModel = (model) => {
    setSelectedModel(model);
  };
  //select model
  const handelStorage = (storage) => {
    setSelectedStorage(storage);
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
                  showIndicators={false}
                >
                  <div>
                    <img src="https://i.ibb.co/dcLQR7F/i-Phone-14-Pro-Space-Black-1138.jpg" />
                  </div>
                  <div>
                    <img src="https://i.ibb.co/377qnxT/i-Phone-14-Pro-Silver-1035.jpg" />
                  </div>
                  <div>
                    <img src="https://i.ibb.co/3ypf1wQ/i-Phone-14-Pro-Gold-7135.jpg" />
                  </div>
                  <div>
                    <img src="https://i.ibb.co/BqcLqck/i-Phone-14-Pro-Deep-Purple-7300.jpg" />
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

                  <div className=" flex gap-20 items-center">
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

                {/* select  color */}
                <div className=" flex gap-20 items-center py-5">
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

                {/* select storage */}
                <div className=" flex gap-16 items-center">
                  <p className=" text-lg"> Storage:</p>
                  <div className=" flex gap-2">
                    {storages?.map((storage, index) => (
                      <button
                        onClick={() => handelStorage(storage)}
                        className={`px-6 py-2.5 border border-gray-700 ${
                          storage === selectedStorage &&
                          "bg-[#0D9488] border-none text-white"
                        } `}
                        key={index}
                      >
                        {storage}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* date of birth */}
              <div className=" flex gap-7 items-center py-5">
                <p className=" text-lg">Date of Birth:</p>
                <div>
                  <input
                    className="px-3 py-3 border border-gray-700 "
                    type="date"
                  />
                </div>
              </div>

              {/* Add to cart */}
              <div className=" my-7">
                <button className=" w-full py-2.5 bg-[#0D9488] text-white text-lg flex items-center gap-2 justify-center font-semibold">
                  Next
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Product;
