import React, { useState } from "react";
import MenuComponent from "../../Components/AddRestaurantPage/MenuComponent";
import { axiosapi } from "../../api/axiosapi";
import CuisineModal from "../../Components/AddRestaurantPage/CuisineModal";

const AddRestaurantPage = () => {
  const [showModal, setShowModal] = useState();
  const [formData, setFormData] = useState({
    name: "",
    restaurantType: "",
    deliveryAvailable: false,
    dineIn: false,
    description: "",
    address: "",
    city: "",
    state: "",
    rating: "",
    photos: [],
  });
  const [selectedCuisine, setSelectedCuisine] = useState([]);

  const [menuList, setmenuList] = useState([
    {
      dishCategory: "",
      dishes: [
        {
          dishName: "",
          dishType: "veg",
          dishPrice: "",
          dishPhoto: "",
          dishDescription: "",
        },
      ],
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here

    const restaurantData = new FormData();
    restaurantData.append("name", formData.name);
    restaurantData.append("restaurantType", formData.restaurantType);
    restaurantData.append("deliveryAvailable", formData.deliveryAvailable);
    restaurantData.append("dineIn", formData.dineIn);
    restaurantData.append("description", formData.description);
    restaurantData.append("address", formData.address);
    restaurantData.append("city", formData.city);
    restaurantData.append("state", formData.state);
    restaurantData.append("rating", formData.rating);
    for (const photo of formData.photos) {
      restaurantData.append("photos", photo);
    }
    selectedCuisine.forEach((cuisine, cuisineIndex) => {
      restaurantData.append("cuisine[]", cuisine);
    });
    menuList.forEach((menu, menuIndex) => {
      restaurantData.append(
        `menu[${menuIndex}][dishCategory]`,
        menu.dishCategory
      );
      menu.dishes.forEach((dish, dishIndex) => {
        restaurantData.append(
          `menu[${menuIndex}][dishes][${dishIndex}][dishName]`,
          dish.dishName
        );
        restaurantData.append(
          `menu[${menuIndex}][dishes][${dishIndex}][dishType]`,
          dish.dishType
        );
        restaurantData.append(
          `menu[${menuIndex}][dishes][${dishIndex}][dishPrice]`,
          dish.dishPrice
        );
        restaurantData.append(
          `menu[${menuIndex}][dishes][${dishIndex}][dishDescription]`,
          dish.dishDescription
        );
      });
    });
    menuList.forEach((menu) => {
      menu.dishes.forEach((dish, index) => {
        restaurantData.append(`dishPhotos-${dish.dishName}`, dish.dishPhoto);
      });
    });

    const response = await axiosapi.post("restaurant", restaurantData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="overflow-y-scroll w-[100%] pr-7">
      <p className="text-xl mt-4 mb-4 font-semibold ">Add Restaurant Details</p>
      <form
        className=" mt-12"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="flex mb-4 gap-16">
          <div className="w-[45%]">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-[45%]">
            <label htmlFor="restaurantType" className="block mb-2">
              Restaurant Type (Veg/Non-Veg):
            </label>
            <select
              id="restaurantType"
              name="restaurantType"
              value={formData.restaurantType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
        </div>

        <div className="mb-4 flex gap-12">
          <div>
            <label
              htmlFor="deliveryAvailable"
              className="flex items-center mb-2"
            >
              <input
                type="checkbox"
                id="deliveryAvailable"
                name="deliveryAvailable"
                checked={formData.deliveryAvailable}
                onChange={handleInputChange}
                className="mr-2"
              />
              Delivery Available
            </label>
          </div>
          <div>
            <label htmlFor="dineIn" className="flex items-center mb-2">
              <input
                type="checkbox"
                id="dineIn"
                name="dineIn"
                checked={formData.dineIn}
                onChange={handleInputChange}
                className="mr-2"
              />
              Dine-in
            </label>
          </div>
        </div>

        <div className="mb-4 w-[95%]">
          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4 w-[95%]">
          <label htmlFor="address" className="block mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex gap-16 mb-4">
          <div className="w-[45%]">
            <label htmlFor="city" className="block mb-2">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-[45%]">
            <label htmlFor="state" className="block mb-2">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex gap-16 mb-4">
          <div className="w-[45%]">
            <button
              onClick={(e) => toggleModal(e)}
              className={
                !selectedCuisine.length > 0
                  ? "border border-gray-500 py-1 px-4 text-gray-500 hover:bg-gray-200"
                  : "border border-red-400 py-1 px-4 text-white bg-red-400"
              }
            >
              {!selectedCuisine.length > 0 ? "Add Cuisine" : "Cuisine Added"}
            </button>
          </div>
          <div className="w-[45%]">
            <label htmlFor="rating" className="block mb-2">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="photos" className="block mb-2">
            Photos:
          </label>
          <input
            type="file"
            id="photos"
            name="photos"
            multiple
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, photos: e.target.files }))
            }
            className="w-full"
          />
        </div>
        <MenuComponent
          menuList={menuList}
          setmenuList={(value) => setmenuList(value)}
        />

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      {showModal ? (
        <CuisineModal
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={(value) => setSelectedCuisine(value)}
          toggleModal={(value) => setShowModal(value)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddRestaurantPage;
