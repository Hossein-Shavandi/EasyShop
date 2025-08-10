import { useState, useRef } from "react";

const Register = () => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer bg-white select-none">
        <i className="fa-regular fa-user text-black"></i>
        <span className=" text-sm">حساب کاربری</span>
      </div>

      {isHovered && (
        <div className="absolute top-full left-1/2 mt-1 w-44 bg-white border rounded shadow z-10 transform -translate-x-1/2 animate-dropdown">
          <ul className="text-sm  flex flex-col gap-y-2 p-3">
            <li className="flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-[#2664eb] hover:text-white rounded-md transition-colors">
              <i className="fa-solid fa-cart-shopping w-5 h-5"></i>
              سفارشات من
            </li>
            <li className="flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-[#2664eb] hover:text-white rounded-md transition-colors">
              <i className="fa-solid fa-comments w-5 h-5"></i>
              لیست پیام‌ها
            </li>
            <li className="flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-[#2664eb] hover:text-white rounded-md transition-colors">
              <i className="fa-regular fa-user w-5 h-5"></i>
              اطلاعات کاربری
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Register;
