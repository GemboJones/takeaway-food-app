import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RestaurantItem = ({ restaurant }) => {
  return (
    <div>
      <li>
        <Link href={"/"}>
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
            <div>
              <div>⭐</div>
            </div>
          </div>
        </Link>
      </li>
    </div>
  );
};
