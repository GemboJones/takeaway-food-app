import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Intro = ({ restaurant }) => {
  return (
    <div>
      {restaurant?.banner?.url ? (
        <div>
          <Image
            src={restaurant?.banner?.url}
            width={1000}
            height={300}
            alt={restaurant.name}
            className="w-full h-[220px] object-cover rounded-xl"
          />
        </div>
      ) : (
        <div className="w-full h-[220px] bg-slate-200 rounded-xl animate-pulse"></div>
      )}

      <h2 className="text-3xl font-bold mt-2 ">{restaurant.name}</h2>
      <div className="flex items-center gap-2 mt-2">
        <div>⭐</div>
        <label className=" text-gray-500">4.5 (56)</label>
      </div>
      <h2 className="text-gray-500 mt-2 flex gap-2 items-center">
        <MapPin />
        {restaurant.address}
      </h2>
    </div>
  );
};
