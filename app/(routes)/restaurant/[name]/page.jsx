"use client";
import { GetRestaurantDetail } from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Intro } from "../_components/Intro";
import { RestaurantTabs } from "../_components/RestaurantTabs";

export default function RestaurantMenu() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const pathArr = pathname.split("/");
    const slug = pathArr[pathArr.length - 1];
    getRestaurantDetail(slug);
  }, []);

  const getRestaurantDetail = (restaurantSlug) => {
    setLoading(true);
    GetRestaurantDetail(restaurantSlug).then((res) => {
      setRestaurant(res.restaurant);
      setLoading(false);
    });
  };

  return (
    <div className="px-10 md:px-20 mt-8">
      <Intro restaurant={restaurant} />
      <RestaurantTabs restaurant={restaurant} />
    </div>
  );
}
