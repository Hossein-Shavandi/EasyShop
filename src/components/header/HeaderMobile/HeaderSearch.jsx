import { Search as SearchIcon } from "lucide-react";
import Alerts from "./Headeralert";

const Search = () => {
  return (
    <div className="flex items-center gap-x-2 mt-3 w-full max-w-full md:max-w-screen-lg">
      <div className="relative flex-1 min-w-0">
        <SearchIcon
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
        <input
          className="w-full h-10 pr-9 outline-0 pl-3 rounded-md bg-[#f0f0f1] text-sm placeholder:text-xs placeholder:text-gray-500"
          type="text"
          placeholder="جستجو کنید..."
        />
      </div>

      <Alerts />
    </div>
  );
};

export default Search;
