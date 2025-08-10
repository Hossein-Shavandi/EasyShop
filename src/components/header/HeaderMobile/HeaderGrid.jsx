import { Home, Search, ShoppingCart, User, Grid } from "lucide-react";
import { Link } from "react-router-dom";

const Grids = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50 lg:hidden">
      <ul className="flex justify-around items-center h-14">
        <Link>
          <li className="flex flex-col items-center text-gray-600  transition">
            <Home size={22} />
            <span className="text-xs">خانه</span>
          </li>
        </Link>

        <Link>
          <li className="flex flex-col items-center text-gray-600  transition">
            <Grid size={22} />
            <span className="text-xs">دسته بندی</span>
          </li>
        </Link>

        <Link>
          <li className="flex flex-col items-center text-gray-600  transition relative">
            <ShoppingCart size={22} />
            <span className="text-xs">سبد خرید</span>
            <span className="absolute text-center -top-1 -right-2 bg-bg-blue-sky text-white text-[10px] px-1 rounded-full">
              3
            </span>
          </li>
        </Link>

        <Link>
          <li className="flex flex-col items-center text-gray-600  transition">
            <User size={22} />
            <span className="text-xs">حساب من</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}


export default Grids