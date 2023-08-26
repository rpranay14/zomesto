import React, { useState } from "react";
import { axiosapi } from "../../api/axiosapi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";

const addCuisine = (cuisine) => {
  return axiosapi.post("/cuisine", { cuisine });
};

const AddCategory = () => {
  const [cuisine, setCuisine] = useState("");

  const mutation = useMutation({
    mutationFn: addCuisine,
    onSuccess: (data, variables, context) => {
      showToast();
    },
    onError: (error, variables, context) => {
      console.log(error);
    },
  });
  const showToast = () => {
    setTimeout(() => {
      toast.success("🦄 Category Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 1000);
  };
  const handleSubmit = async () => {
    mutation.mutate(cuisine);
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <p className="font-semibold mb-4 text-xl">Add Cuisine Category</p>
      <div>
        <input
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="Enter cuisine Category Name "
          className="py-1 px-1  mr-3"
        ></input>
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="px-4 py-1 bg-red-400 text-white rounded-sm"
        >
          Add Category
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
