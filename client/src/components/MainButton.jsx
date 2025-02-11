function MainButton({ type, text, onClickHandler }) {
  return (
    <div className="text-2xl font-bold">
      {type === "primary" ? (
        <button
          onClick={onClickHandler}
          className=" bg-secodary text-black py-3 px-6 hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
        >
          {text}
        </button>
      ) : (
        <button
          onClick={onClickHandler}
          className=" bg-black text-white py-3 px-6 hover:bg-secodary hover:text-black transition-all duration-500 ease-in-out"
        >
          {text}
        </button>
      )}
    </div>
  );
}

export default MainButton;
