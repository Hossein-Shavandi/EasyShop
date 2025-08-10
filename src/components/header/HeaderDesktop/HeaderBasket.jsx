import { useState } from "react";

const HeaderBasket = () => {
  const basket = [
    {
      img: "product1.jpg",
      name: "محصول تستی",
      discount: "10% تخفیف",
      price: "100000 تومان",
    },
  ];

  return (
    <>
      <div className="relative group cursor-pointer h-20 flex items-center">
        <div className="py-4">
          <svg className="w-6 h-6">
            <use href="#cart"></use>
          </svg>
        </div>

        <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[340px] bg-white child:text-text-n rounded-lg border-t-[3px] border-t-text-reds p-4 space-y-3 child:transition-colors tracking-normal shadow-md text-base dark:bg-zinc-800 dark:text-white z-20">
          <div className="flex items-center justify-between tracking-tighter text-gray-800 text-xs">
            <span>1 مورد</span>
            <a className="flex items-center text-text-reds" href="">
              مشاهده سبد خرید
              <svg className="w-4 h-4">
                <use href="#arrow-right"></use>
              </svg>
            </a>
          </div>

          {basket.map((item, index) => (
            <div
              key={index}
              className="pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 child:py-5"
            >
              <div className="flex gap-x-2.5">
                <img src={`/${item.img}`} className="w-[120px] h-[120px]" alt="" />
                <div className="flex flex-col justify-between h-24">
                  <h4 className="text-zinc-700 dark:text-white text-base line-clamp-2">
                    {item.name}
                  </h4>
                  <div>
                    <span className="text-teal-800 dark:text-emerald-500 text-xs tracking-tighter">
                      {item.discount}
                    </span>
                    <div className="text-zinc-700 dark:text-white">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-5">
            <div>
              <span className="text-teal-800 dark:text-emerald-500 text-xs tracking-tighter">
                مبلغ قابل پرداخت
              </span>
              <div className="text-zinc-700 dark:text-white">
                12000 <span className="text-sm">تومان</span>
              </div>
            </div>
            <a
              className="flex items-center justify-center text-white bg-red-700 dark:text-emerald-500 w-[100px] h-12 tracking-tighter rounded-lg hover:bg-teal-700 transition-colors opacity-75"
              href="#"
            >
              ثبت سفارش
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBasket;
