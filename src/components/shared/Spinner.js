import React from "react";
import LoaderImage from "../../images/loader/Loading-Image-1.gif";
const Spinner = () => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#FFFFFF]  flex justify-center items-center">
      <img src={LoaderImage} alt="loader-img" />
    </div>
  );
};

export default Spinner;
