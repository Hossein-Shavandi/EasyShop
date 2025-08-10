import { Home, Search, ShoppingCart, User, Grid } from "lucide-react";
import { Link } from "react-router-dom";

const Grids = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50 lg:hidden overflow-x-hidden">
      <ul className="flex justify-around items-center h-14 w-full px-0">
        <li className="flex flex-col items-center text-gray-600 transition">
          <Link to="/" className="flex flex-col items-center px-2">
            <Home size={22} />
            <span className="text-xs mt-1">خانه</span>
          </Link>
        </li>

        <li className="flex flex-col items-center text-gray-600 transition">
          <Link to="/categories" className="flex flex-col items-center px-2">
            <Grid size={22} />
            <span className="text-xs mt-1">دسته بندی</span>
          </Link>
        </li>

        <li className="flex flex-col items-center text-gray-600 transition relative">
          <Link to="/cart" className="flex flex-col items-center relative px-2">
            <ShoppingCart size={22} />
            <span className="text-xs mt-1">سبد خرید</span>
            <span className="absolute -top-1 -right-3 bg-blue-500 text-white text-[10px] px-1 rounded-full min-w-[16px] text-center">
              3
            </span>
          </Link>
        </li>

        <li className="flex flex-col items-center text-gray-600 transition">
          <Link to="/account" className="flex flex-col items-center px-2">
            <User size={22} />
            <span className="text-xs mt-1">حساب من</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Grids;
