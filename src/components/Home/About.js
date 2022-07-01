import React from "react";
import FastDelivery from "../../images/adult-blur-blurred-background-687824.png";
import GoodResponder from "../../images/chef-cook-food-33614.png";
import Architecture from "../../images/architecture-building-city-2047397.png";
import FastDeliveryIcon from "../../images/icons/Group 204.png";
import GoodResponderIcon from "../../images/icons/Group 1133.png";
import ArchitectureIcon from "../../images/icons/Group 245.png";

const About = () => {
  return (
    <div className="max-w-[1100px] mx-auto my-12">
      <h1 className="md:text-4xl text-2xl font-normal text-neutral md:mb-8 mb-2 ">
        Why you choose us
      </h1>
      <p className="md:mb-4 mb-2 text-accent">
        Barton waited twenty always repair in within we do. An delighted
        offending <br /> curiosity my is dashwoods at. Boy prosperous increasing
        surrounded.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-12 mt-8 ">
        {/* items one  */}
        <div className="fastDelivery  rounded-3xl hover:shadow-2xl hover:translate-y-[-10px]  ease-in-out duration-300 ">
          <img src={FastDelivery} alt="about-img" />
          <div className="items lg:p-4 p-2">
            <div className="foodTitle flex my-4 items-center">
              <img src={FastDeliveryIcon} alt="icon" />
              <h3 className="text-2xl ml-2">Fast Delivery</h3>
            </div>
            <p className="text-accent md:mb-4 mb-2">
              Keep your system in sync with automated web hook based
              notifications each time link is paid and how we dream about out
              future.
            </p>
            <button className="my-2 py-2 flex  text-secondary font-semibold ">
              See more{" "}
              <div className="bg-secondary rounded-full flex justify-center items-center h-6  w-6  ml-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-base-100 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        {/* items tow  */}
        <div className="GoodResponder rounded-3xl hover:shadow-2xl hover:translate-y-[-10px]  ease-in-out duration-300 ">
          <img src={GoodResponder} alt="about-img" />
          <div className="items lg:p-4 p-2">
            <div className="foodTitle flex my-4 items-center">
              <img src={GoodResponderIcon} alt="icon" />
              <h3 className="text-2xl ml-2">A Good Auto Responder</h3>
            </div>
            <p className="text-accent md:mb-4 mb-2">
              Keep your system in sync with automated web hook based
              notifications each time link is paid and how we dream about out
              future.
            </p>
            <button className="my-2 py-2 flex  text-secondary font-semibold ">
              See more{" "}
              <div className="bg-secondary rounded-full flex justify-center items-center h-6  w-6  ml-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-base-100 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        {/* items three  */}
        <div className="Architecture  rounded-3xl hover:shadow-2xl hover:translate-y-[-10px]  ease-in-out duration-300 ">
          <img src={Architecture} alt="about-img" />
          <div className="items lg:p-4 p-2">
            <div className="foodTitle flex my-4 items-center">
              <img src={ArchitectureIcon} alt="icon" />
              <h3 className="text-2xl ml-2">Home Delivery</h3>
            </div>
            <p className="text-accent md:mb-4 mb-2">
              Keep your system in sync with automated web hook based
              notifications each time link is paid and how we dream about out
              future.
            </p>
            <button className="my-2 py-2 flex  text-secondary font-semibold ">
              See more{" "}
              <div className="bg-secondary rounded-full flex justify-center items-center h-6  w-6  ml-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-base-100 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
