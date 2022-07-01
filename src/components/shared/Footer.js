import React from "react";
import FooterLogo from "../../images/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-8 bg-neutral text-base-100   md:h-[400px] h-auto ">
      <div className=" max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full px-2">
        <div className="footer-logo flex flex-col justify-between">
          <img src={FooterLogo} alt="footer-img" className="w-[150px]" />
          <p className="text-sm  font-light text-accent">
            Copyright &copy; {year} Red Onion
          </p>
        </div>
        <div className="website-details flex items-center flex-col justify-center text-sm font-light ">
          <div className=" flex justify-between w-full ">
            <div className="info">
              <ul>
                <li className="mb-2">About Online Food</li>
                <li className="mb-2">Read our blog</li>
                <li className="mb-2">Sign up to deliver</li>
                <li className="mb-2">Add your restaurant</li>
              </ul>
            </div>
            <div className="policy">
              <ul>
                <li className="mb-2">Get help</li>
                <li className="mb-2">Read FAQs</li>
                <li className="mb-2">View all cities</li>
                <li className="mb-2">Restaurants near me</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-end mt-16">
            <p className="mr-12">Terms of Use</p>
            <p className="mr-12">Privacy Policy.</p>
            <p className="mr-12">Pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
