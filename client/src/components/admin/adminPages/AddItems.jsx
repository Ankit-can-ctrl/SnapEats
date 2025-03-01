import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddItems = () => {
  const backendUrl = "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
    imagePreview: "",
  });

  const categories = ["Pizza", "Burger", "Pasta", "Drinks", "Desserts"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // Limit to 2MB
        alert("File size should be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("desc", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("category", formData.category);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    } else {
      alert("Please select an image");
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/food/add`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          image: null,
          imagePreview: "",
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong while adding the food item please check!");
    }
  };

  return (
    <div className=" w-full h-full flex items-center justify-center pt-20 ">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Add New Food Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Upload */}
          <label className="block">
            <span className="text-gray-700">Product Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </label>
          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="mt-2 h-full w-full object-cover rounded-md"
            />
          )}

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Item Name"
            required
            className="w-full p-2 border rounded-md"
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-2 border rounded-md"
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price ($)"
            required
            className="w-full p-2 border rounded-md"
          />

          {/* Category Selection */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
