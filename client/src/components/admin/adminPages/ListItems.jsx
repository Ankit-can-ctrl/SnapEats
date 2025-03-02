import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ListItems = () => {
  const backendUrl = "http://localhost:5000";
  const [foodItems, setFoodItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
  });

  // Fetch all food items
  const fetchList = async () => {
    const response = await axios.get(`${backendUrl}/api/food/list`);

    if (response.status === 200) {
      setFoodItems(response.data.FoodList);
    } else {
      toast.error("Something went wrong while fetching food items");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // Delete food item
  const handleDelete = async (foodId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`${backendUrl}/api/food/remove`, {
          data: { foodId },
        });
        toast.success("Food item deleted successfully");
        setFoodItems(foodItems.filter((item) => item._id !== foodId));
      } catch (error) {
        console.error("Error deleting food item:", error);
        toast.error("Failed to delete food item");
      }
    }
  };

  // Start editing
  const handleEditClick = (item) => {
    setEditingItem(item._id);
    setFormData({
      name: item.name,
      desc: item.desc,
      price: item.price,
      category: item.category,
    });
  };

  // updating food item

  const updateFoodItem = async (updatedData) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/food/update`,
        {
          foodItemId: updatedData.foodItemId,
          name: updatedData.name,
          desc: updatedData.desc,
          price: updatedData.price,
          category: updatedData.category,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Food item updated successfully");
        fetchList();
        setEditingItem(null);
      }
    } catch (error) {
      console.log("Update Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Failed to update food item"
      );
    }
  };

  const handleUpdate = async () => {
    if (!editingItem) return;

    if (
      !formData.name ||
      !formData.desc ||
      !formData.price ||
      !formData.category
    ) {
      toast.error("All fields are required!");
      return;
    }

    if (isNaN(formData.price) || formData.price <= 0) {
      toast.error("Price must be a positive number!");
      return;
    }

    const updatedData = {
      foodItemId: editingItem,
      name: formData.name,
      desc: formData.desc,
      price: Number(formData.price),
      category: formData.category,
    };
    updateFoodItem(updatedData);
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-5">Manage Food Items</h2>

      {/* Responsive Table Wrapper */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodItems?.map((item) => (
              <tr key={item._id} className="text-center border-b">
                <td className="p-2">
                  <img
                    src={`http://localhost:5000/images/${item.image}`}
                    alt={item.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </td>
                <td className="p-2">
                  {editingItem === item._id ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border p-1 w-full"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="p-2">
                  {editingItem === item._id ? (
                    <input
                      type="text"
                      value={formData.desc}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          desc: e.target.value,
                        })
                      }
                      className="border p-1 w-full"
                    />
                  ) : (
                    item.desc
                  )}
                </td>
                <td className="p-2">
                  {editingItem === item._id ? (
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      className="border p-1 w-full"
                    />
                  ) : (
                    `$${item.price}`
                  )}
                </td>
                <td className="p-2">
                  {editingItem === item._id ? (
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="border p-1 w-full"
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td className="p-2">
                  {editingItem === item._id ? (
                    <button
                      onClick={() => handleUpdate()}
                      className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(item)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - List Format */}

      <div className="md:hidden">
        {foodItems.map((item) => (
          <div
            key={item._id}
            className="border p-3 mb-3 rounded-md bg-white shadow-md"
          >
            <div className="flex items-center space-x-3">
              <img
                src={`http://localhost:5000/images/${item.image}`}
                alt={item.name}
                className="h-16 w-16 rounded-md object-cover"
              />
              <div>
                {editingItem === item._id ? (
                  <>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border p-1 w-full mt-1"
                      placeholder="Food Name"
                    />
                    <input
                      type="text"
                      value={formData.desc}
                      onChange={(e) =>
                        setFormData({ ...formData, desc: e.target.value })
                      }
                      className="border p-1 w-full mt-1"
                      placeholder="Description"
                    />
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      className="border p-1 w-full mt-1"
                      placeholder="Price"
                    />
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="border p-1 w-full mt-1"
                      placeholder="Category"
                    />
                  </>
                ) : (
                  <>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">{item.desc}</p>
                    <p className="text-blue-500 font-bold">${item.price}</p>
                    <p className="text-sm text-gray-500">
                      Category: {item.category}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="mt-2 flex space-x-2">
              {editingItem === item._id ? (
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md w-full"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(item)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md w-full"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
