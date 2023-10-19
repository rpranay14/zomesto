import React from "react";

const MenuComponent = ({ menuList, setmenuList }) => {
  const handledishCategoryChange = (e, index) => {
    const newMenuList = [...menuList];
    newMenuList[index].dishCategory = e.target.value;
    setmenuList(newMenuList);
  };
  const handleDishesChange = (e, index, dishIndex) => {
    const { name, value, type } = e.target;
    const fieldValue = type === "file" ? e.target.files[0] : value;
    const newMenuList = [...menuList];
    newMenuList[index].dishes[dishIndex][name] = fieldValue;
    setmenuList(newMenuList);
  };
  const addNewDishArray = (index, e) => {
    e.preventDefault();
    const newMenuList = [...menuList];
    newMenuList[index].dishes.push({
      dishName: "",
      dishType: "",
      dishPrice: "",
      dishPhoto: "",
      dishDescription: "",
    });

    setmenuList(newMenuList);
  };
  const addNewdishCategory = (e) => {
    e.preventDefault();
    const newMenuList = [
      ...menuList,
      {
        dishCategory: "",
        dishes: [
          {
            dishName: "",
            dishType: "",
            dishPrice: "",
            dishPhoto: "",
            dishDescription: "",
          },
        ],
      },
    ];

    setmenuList(newMenuList);
  };
  const handleRemoveDish = (e, index, dishIndex) => {
    e.preventDefault();

    const newMenuList = [...menuList];
    newMenuList[index].dishes.splice(dishIndex, 1);
    setmenuList(newMenuList);
  };
  const handleRemovedishCategory = (e, index) => {
    e.preventDefault();

    const newMenuList = [...menuList];
    newMenuList.splice(index, 1);
    setmenuList(newMenuList);
  };

  return (
    <div className="mt-2 mb-3">
      {menuList.map((menu, index) => (
        <div className="mb-4 border-2  p-2 shadow-2xl">
          <div>
            <label
              htmlFor="dishName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              dishCategory
            </label>
            <input
              type="text"
              id="Dish Name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={menu.dishCategory}
              onChange={(e) => handledishCategoryChange(e, index)}
              required
            />
          </div>
          <button
            className="bg-red-400 text-white px-2 py-1 rounded-sm m-2 mb-1"
            onClick={(e) => addNewDishArray(index, e)}
          >
            Add new Dish
          </button>
          <div className="flex gap-4 flex-wrap m-2">
            {menu.dishes.map((dish, dishIndex) => (
              <div className="w-[40%] bg-[#f5f5f5] p-2 rounded-sm">
                <div className="mb-4 flex gap-4 ">
                  <div className="">
                    <label
                      htmlFor="dishName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Dish Name
                    </label>
                    <input
                      name="dishName"
                      type="text"
                      id="Dish Name"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={dish.dishName}
                      onChange={(e) => handleDishesChange(e, index, dishIndex)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Price
                    </label>
                    <input
                      name="dishPrice"
                      type="number"
                      id="price"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={dish.dishPrice}
                      onChange={(e) => handleDishesChange(e, index, dishIndex)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 flex gap-4 ">
                  <div className="">
                    <label
                      htmlFor="type"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Type
                    </label>
                    <select
                      name="dishType"
                      id="type"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={dish.dishType}
                      onChange={(e) => handleDishesChange(e, index, dishIndex)}
                      required
                    >
                      <option value="veg">Veg</option>
                      <option value="non-veg">Non-Veg</option>
                    </select>
                  </div>
                  <div className="">
                    <label
                      htmlFor="photo"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Photo
                    </label>
                    <input
                      name="dishPhoto"
                      type="file"
                      id="dishPhoto"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => handleDishesChange(e, index, dishIndex)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    name="dishDescription"
                    id="description"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={dish.dishDescription}
                    onChange={(e) => handleDishesChange(e, index, dishIndex)}
                    required
                  />
                </div>

                <button
                  onClick={(e) => handleRemoveDish(e, index, dishIndex)}
                  className="border border-red-400 px-2 py-1 rounded-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={(e) => handleRemovedishCategory(e, index)}
            className="border border-red-400 px-2 py-1 rounded-sm mt-12"
          >
            Remove dishCategory
          </button>
        </div>
      ))}
      <button
        className="bg-red-400 text-white px-2 py-1 rounded-sm m-2 mb-1"
        onClick={(e) => addNewdishCategory(e)}
      >
        Add new dishCategory
      </button>
    </div>
  );
};

export default MenuComponent;
