import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const FooterComponent = () => {
  return (
    <>
      <footer className="bg-[#f8f8f8] px-5 md:px-10  lg:px-40 py-6">
        <p className="font-bold italic text-2xl md:text-xl lg:text-4xl  mb-4 md:mb-5 lg:mb-7">
          zomesto
        </p>
        <div className="flex flex-wrap gap-4 justify-between text-[#78909c]">
          <div className="">
            <p className="font-semibold  mb-1 text-gray-700">About</p>
            <p>Contact Us</p>
            <p>Who we are</p>
            <p>Blog</p>
            <p>Work with us</p>
          </div>
          <div>
            <p className="font-semibold  mb-1 text-gray-700">For Restaurants</p>
            <p>Partner With Us</p>
          </div>
          <div>
            <p className="font-semibold  mb-1 text-gray-700">Learn More</p>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
          </div>
          <div>
            <p className="font-semibold  mb-1 text-gray-700">We Delivers to</p>
            <p>Kota</p>
            <p>Jaipur</p>
          </div>
          <div>
            <p className="font-semibold  mb-1 text-gray-700">Social Links</p>
            <div className="flex gap-2">
              <AiFillLinkedin className="w-6 h-6" />
              <AiFillInstagram className="w-6 h-6" />
              <AiFillTwitterCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
