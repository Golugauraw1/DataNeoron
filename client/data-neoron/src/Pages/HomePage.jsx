import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddDetailForm from "../Component/AddDetailForm/AddDetailForm";
import DetailTable from "../Component/DetailTable/DetailTable.js";
import UpdateDetailsModal from "../Component/Model/UpdateDetailsModal.jsx";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../Redux/Product/product.action.js";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    // Fetch all products when component mounts
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleAddDetails = async (Data) => {
    try {
      // Dispatch action to add product
      await dispatch(addProduct(Data));
      // Show toast message on successful addition of product
      dispatch(getAllProducts());
      toast.success("Data added successfully!");
    } catch (error) {
      // Show toast message on error
      toast.error("Failed to add data!");
    }
  };

  const handleUpdate = async (el) => {
    setIsOpen(true);
    setInitialValues(el);
  };

  const handleProductUpdate = async (el) => {
    try {
      dispatch(updateProduct(initialValues?._id, el))
        .then((res) => {
          toast.success(res?.data?.message);
          dispatch(getAllProducts());
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      toast.error("Failed to update data!");
    }
  };

  const handleDelete = async (el) => {
    try {
      dispatch(deleteProduct(el?._id))
        .then((res) => {
          toast.success(res?.data?.message);
          dispatch(getAllProducts());
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      toast.error("Failed to delete data!");
    }
  };

  useEffect(() => {
    if (products) {
      setData(products);
    }
  }, [products]);

  return (
    <div className="w-full text-center py-4">
      <div>
        <h1 className="text-3xl font-bold mb-4">Welcome to Neuron Form Data </h1>
      </div>
      <div>
        <AddDetailForm onSubmit={handleAddDetails} />
      </div>
      <div>
        <DetailTable
          data={data}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
      <div className="w-full h-full">
        <UpdateDetailsModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          initialValues={initialValues}
          onSubmit={handleProductUpdate}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
