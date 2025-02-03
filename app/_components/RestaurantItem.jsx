import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RestaurantItem = ({ restaurant }) => {
  return (
    <div>
      <li>
        <Link href={`/restaurant/${restaurant.slug}`}>
          <Image
            src={restaurant.banner?.url}
            alt={restaurant.name}
            width={600}
            height={160}
            className="h-[130px] rounded-xl object-cover "
            priority
          />
          <div className="mt-2">
            <h2 className="font-bold text-lg">{restaurant.name}</h2>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <p>⭐</p>
                <label className="text-gray-400 text-sm">4.5</label>
              </div>
              <h2 className="text-gray-400 text-sm">
                {restaurant?.category[0].name}
              </h2>
            </div>
          </div>
        </Link>
      </li>
    </div>
  );
};
