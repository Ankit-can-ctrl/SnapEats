const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative w-16 h-16">
        {/* Yellow spinning circle */}
        <div className="absolute inset-0 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Red spinning circle (slower) */}
        <div className="absolute inset-0 border-4 border-red-500 border-b-transparent rounded-full animate-[spin_1.5s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default Loader;
