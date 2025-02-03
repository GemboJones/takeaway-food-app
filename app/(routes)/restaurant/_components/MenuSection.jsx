import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const MenuSection = ({ restaurant }) => {
  const [menuItemList, setMenuItemList] = useState([]);

  useEffect(() => {
    restaurant?.menu && FilterMenu(restaurant?.menu[0]?.category);
  }, [restaurant]);

  const FilterMenu = (category) => {
    const result = restaurant?.menu?.filter(
      (item) => item.category === category
    );
    console.log(restaurant?.menu);
    setMenuItemList(result[0]);
  };
  return (
    <div className="grid grid-cols-4 mt-2">
      <div className="hidden md:flex flex-col mr-10 gap-2">
        {restaurant?.menu?.map((item, index) => (
          <Button
            variant="ghost"
            key={index}
            className="flex justify-start"
            onClick={() => FilterMenu(item.category)}
          >
            {item.category}
          </Button>
        ))}
      </div>
      <div className="md:col-span-3 col-span-4">
        <h2 className="font-bold text-lg">{menuItemList?.category}</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          {menuItemList?.menuItem?.map((item, index) => (
            <li
              key={index}
              className="p-3 flex gap-3 border rounded-xl
                        hover:border-primary cursor-pointer
                        "
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">{item.name}</h2>
                <h2>{item.price}</h2>
                <h2 className="text-sm text-gray-400 line-clamp-2">
                  {item.description}
                </h2>
                <SquarePlus
                  className="cursor-pointer"
                  onClick={() =>
                    alert(`"Add to cart" functionality still to come!`)
                  }
                  // onClick={() => addToCartHandler(item)}
                />
              </div>
              {/* {item?.productImage?.url ? (
                <Image
                  src={item?.productImage?.url}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover w-[120px] h-[120px] rounded-xl"
                />
              ) : (
                <div className="w-[100px] h-[100px] bg-slate-200 rounded-xl"></div>
              )} */}
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};
