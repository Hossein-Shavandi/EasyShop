const Alerts = () => {
  return (
    <div
      className="
        flex items-center justify-center
        w-10 h-10
        bg-[#f0f0f1]
        ml-4
        rounded-md
        border border-gray-300
        cursor-pointer
      "
    >
      <svg className="w-6 h-6">
        <use href="#alerts"></use>
      </svg>
    </div>
  );
};

export default Alerts;
