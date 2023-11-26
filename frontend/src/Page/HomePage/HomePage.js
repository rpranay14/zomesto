import React from "react";
import imageURL from "../../assets/zomato_header.webp";
import { AiOutlineSearch } from "react-icons/ai";
import OrderOnlineImageS from "../../assets/order-online640x423.jpg";
import OrderOnlineImageM from "../../assets/order-online1280x847.jpg";
import OrderOnlineImageL from "../../assets/order-online1920x1271.jpg";

import DineInImageS from "../../assets/dine-in640x423.jpg";
import DineInImageM from "../../assets/dine-in1280x847.jpg";
import DineInImageL from "../../assets/dine-in1920x1271.jpg";
import { Link } from "react-router-dom";

const orderTypeCard = [
  {
    title: "Order Online",
    images: {
      small: OrderOnlineImageS,
      medium: OrderOnlineImageM,
      large: OrderOnlineImageL,
    },
    description: "Stay home and order to your doorstep",
    route: "/delivery",
  },
  {
    title: "Dine In",
    images: {
      small: DineInImageS,
      medium: DineInImageM,
      large: DineInImageL,
    },
    description: "View the cities favourite dining venues",
    route: "/dine-out",
  },
];
const HomePage = () => {
  return (
    <>
      <div>
        <header
          className="py-2 lg:py-5 pb-12 lg:pb-16 px-5 lg:px-24 bg-cover bg-center h-[70%]  text-white "
          style={{ backgroundImage: `url(${imageURL})` }}
        >
          <nav className="flex justify-between">
            <p>Get the app</p>
            <div className="flex justify-between gap-5 font-semibold">
              <p>Login</p>
              <p>Signup</p>
            </div>
          </nav>
          <p className="text-center mt-8 lg:mt-5 text-4xl lg:text-8xl font-semibold italic">
            zomesto
          </p>
          <p className="text-center mt-6 text-md lg:text-3xl md:text-xl ">
            Explore the finest cuisine and beverages in Kota
          </p>
          <div className="flex flex-col  justify-center items-center mt-7">
            <div className="flex text-black bg-white w-[100%] md:w-[70%] lg:w-[60%] xl:w-[55%]  items-center gap-4 px-4 py-2 rounded-md">
              <AiOutlineSearch className="w-6 h-6" />
              <input
                className="w-[100%] outline-none text-lg"
                placeholder="Search for restaurant, cuisine or dish"
              ></input>
            </div>
          </div>
        </header>
        <main className="mt-12  flex justify-center items-center gap-6 md:gap-8  lg:gap-12 pb-20 mx-8 ">
          {orderTypeCard.map((card) => (
            <Link to={card.route}>
              <div className=" w-[10rem] md:w-[20rem] lg:w-[30rem] rounded-lg overflow-hidden shadow-lg  pb-3  md:pb-6 cursor-pointer transition-transform duration-200 hover:scale-110">
                <img
                  src={card.images.large}
                  sizes="(max-width: 768px) 160px,(max-width: 1024px) 320px,480px"
                  srcSet={`${card.images.small} 400w,${card.images.medium} 800w,${card.images.large} 1200w`}
                  className="w-[100%] lg:w-[30rem] lg:h-48 "
                />
                <p className="text-sm ml-2 md:text-lg font-bold mt-2">
                  {card.title}
                </p>
                <p className="ml-2 mt-1 truncate text-xs md:text-sm lg:text-base lg:truncate-none mr-1 ">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </>
  );
};

export default HomePage;
