import React from "react";
import imageURL from "../../assets/zomato_header";
import { AiOutlineSearch } from "react-icons/ai";
import OrderOnlineImage from "../../assets/order-online.jpg";
import DineInImage from "../../assets/dine-in.jpg";

const orderTypeCard = [
  {
    title: "Order Online",
    image: OrderOnlineImage,
    description: "Stay home and order to your doorstep",
  },
  {
    title: "Dine In",
    image: DineInImage,
    description: "View the cities favourite dining venues",
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
        <main className="mt-12  flex justify-center items-center gap-12 pb-20 mx-8 ">
          {orderTypeCard.map((card) => (
            <div className=" w-[13rem] md:w-[20rem] lg:w-[30rem] rounded-lg overflow-hidden shadow-lg  pb-3  md:pb-6 cursor-pointer transition-transform duration-200 hover:scale-110">
              <img
                src={card.image}
                className="w-[100%] lg:w-[30rem] lg:h-48 "
              />
              <p className="text-sm ml-2 md:text-lg font-bold mt-2">
                {card.title}
              </p>
              <p className="ml-2 mt-1 truncate text-xs md:text-sm lg:text-base lg:truncate-none mr-1 ">
                {card.description}
              </p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default HomePage;
