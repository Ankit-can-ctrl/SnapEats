import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate("/menu");
  };
  return (
    <div className="bg-secodary min-h-screen flex flex-col items-center p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">
          About SnapEats
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-bold text-red-500">SnapEats</span>,
          your go-to destination for fast, delicious, and mouth-watering meals!
          We believe in delivering happiness, one bite at a time, with the
          freshest ingredients and quick service.
        </p>
      </div>

      <div className="mt-10 max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg"
          alt="SnapEats Chef"
          className="rounded-lg shadow-lg w-full max-h-96 object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-red-500 mb-3">Our Story</h2>
          <p className="text-gray-700 text-lg">
            Founded with a passion for great food and convenience, SnapEats was
            created to bring high-quality meals straight to your door. Whether
            you're craving a quick snack or a gourmet feast, we've got you
            covered!
          </p>
        </div>
      </div>

      <div className="mt-16 text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-red-500">
          Why Choose SnapEats?
        </h2>
        <ul className="mt-4 space-y-4 text-gray-700 text-lg">
          <li>✅ Fresh, high-quality ingredients</li>
          <li>✅ Fast and reliable delivery</li>
          <li>✅ Wide variety of delicious meals</li>
          <li>✅ Friendly customer service</li>
        </ul>
      </div>

      <div className="mt-16 bg-red-500 text-white p-6 rounded-lg shadow-lg text-center max-w-4xl">
        <h2 className="text-3xl font-bold">Order Now & Experience the Best!</h2>
        <p className="mt-2 text-lg">
          Join thousands of happy customers enjoying the best food delivery
          service.
        </p>
        <button
          onClick={handleExploreMenu}
          className="mt-4 bg-yellow-400 text-red-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          Explore Our Menu
        </button>
      </div>
    </div>
  );
}
