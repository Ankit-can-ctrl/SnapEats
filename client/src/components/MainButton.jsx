function MainButton({ type, text }) {
  return (
    <div className="text-2xl font-semibold">
      {type === "primary" ? (
        <button className=" bg-secodary text-black py-3 px-6 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
          {text}
        </button>
      ) : (
        <button className=" bg-black text-white py-3 px-6 hover:bg-secodary hover:text-black transition-all duration-500 ease-in-out">
          {text}
        </button>
      )}
    </div>
  );
}

export default MainButton;
