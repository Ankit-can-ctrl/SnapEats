import { AiOutlineClose } from "react-icons/ai";

export default function AuthModal({
  isOpen = true,
  onClose,
  loginOn,
  setLoginOn,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[200]">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 transform transition-transform scale-100 opacity-100 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#E93037]">
            {loginOn ? "Login" : "Sign Up"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            className={`w-1/2 py-2 rounded-lg font-semibold transition-all ${
              loginOn ? "bg-[#E93037] text-white" : "bg-gray-200"
            }`}
            onClick={() => setLoginOn(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 rounded-lg font-semibold transition-all ${
              !loginOn ? "bg-[#E93037] text-white" : "bg-gray-200"
            }`}
            onClick={() => setLoginOn(false)}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-4">
          {!loginOn && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E93037]"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E93037]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#E93037]"
          />

          <button
            type="submit"
            className="w-full bg-[#E93037] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90"
          >
            {loginOn ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {loginOn ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-[#FFBC11] font-semibold cursor-pointer"
            onClick={() => setLoginOn(!loginOn)}
          >
            {loginOn ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
