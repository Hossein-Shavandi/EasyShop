import { Home, Grid, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50">
      <nav className="max-w-screen-lg mx-auto px-4">
        <ul className="flex justify-between items-center h-14">
          <li className="flex flex-col items-center text-gray-600 w-1/4">
            <Link to="/" className="flex flex-col items-center">
              <Home size={22} />
              <span className="text-xs mt-1">خانه</span>
            </Link>
          </li>

          <li className="flex flex-col items-center text-gray-600 w-1/4">
            <Link to="/categories" className="flex flex-col items-center">
              <Grid size={22} />
              <span className="text-xs mt-1">دسته بندی</span>
            </Link>
          </li>

          <li className="flex flex-col items-center text-gray-600 relative w-1/4">
            <Link to="/cart" className="flex flex-col items-center relative">
              <ShoppingCart size={22} />
              <span className="text-xs mt-1">سبد خرید</span>
            </Link>
          </li>

          <li className="flex flex-col items-center text-gray-600 w-1/4">
            <Link to="/account" className="flex flex-col items-center">
              <User size={22} />
              <span className="text-xs mt-1">حساب من</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
