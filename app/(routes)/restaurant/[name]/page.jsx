"use client";
import { GetRestaurantDetail } from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Intro } from "../_components/Intro";

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
      console.log(res.restaurant);
      setRestaurant(res.restaurant);
      setLoading(false);
    });
  };

  return (
    <div>
      <Intro restaurant={restaurant} />
    </div>
  );
}
