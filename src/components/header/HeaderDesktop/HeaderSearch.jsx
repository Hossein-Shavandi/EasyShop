import { useState } from "react";

const topSearches = [
  "گوشی موبایل",
  "لباس مردانه",
  "کفش ورزشی",
  "هدفون بی‌سیم",
  "کتاب‌های جدید",
  "لوازم خانه",
  "ساعت مچی",
  "دوربین عکاسی",
];

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="جستجو"
        className="bg-[#f0f0f1] h-11 w-[460px] xl:w-[600px]  px-4 rounded-lg placeholder:text-xs placeholder:text-gray-500 leading-12 outline-0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
      />

      {isFocused && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 p-3">
          <div className="mb-4 mt-2">
            <img
              src="./public/img/an.gif"
              alt="بنر تبلیغاتی"
              className="w-full h-52 object-cover rounded-lg"
            />
          </div>

          <div className="flex items-center gap-2 my-4">
              <span><i className="fa-solid fa-fire"></i></span>
              <p>جستجو های پر طرفدار</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {topSearches.map((item, index) => (
              <button
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
