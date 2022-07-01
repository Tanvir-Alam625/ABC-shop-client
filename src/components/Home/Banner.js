import React from "react";
import Background from "../../images/bannerbackground.png";

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center flex-col lg:min-h-[500px] md:min-h-[400px] min-h-[300px] "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "100% 100%",
      }}
    >
      <h2 className="md:text-4xl text-2xl font-semibold text-neutral text-center lg:mb-8 md:mb-4 mb-2">
        Best food waiting for your belly
      </h2>
      <div className="search-field w-full flex justify-center">
        <input
          type="text"
          placeholder="Search food items"
          className="py-2 rounded-l-3xl pl-4 pr-[35px] md:w-1/3 w-2/3 outline-none text-accent  bg-base-100"
        />
        <button className="px-4 py-2 bg-primary rounded-3xl text-base-100 ml-[-30px] ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
