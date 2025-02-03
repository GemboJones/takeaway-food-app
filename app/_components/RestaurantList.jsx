"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GetRestaurant } from "../_utils/GlobalApi";
import { RestaurantItem } from "./RestaurantItem";
import { RestaurantListSkeleton } from "./RestaurantListSkeleton";

export const RestaurantList = () => {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    params &&
      setCategory(params.get("category") ? params.get("category") : "all");
    params &&
      getRestaurantList(
        params.get("category") ? params.get("category") : "all"
      );
  }, [params]);

  const getRestaurantList = (selectedCategory) => {
    setLoading(true);
    GetRestaurant(selectedCategory).then((res) => {
      setRestaurants(res?.restaurants);
      setLoading(false);
    });
  };

  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl ">Popular restaurants</h2>
      <h2>
        {restaurants.length} results
        {category !== "all" && ` for "${category}"`}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 ">
        {!loading
          ? restaurants &&
            restaurants.map((restaurant, index) => {
              return <RestaurantItem key={index} restaurant={restaurant} />;
            })
          : [1, 2, 3, 4].map((_, index) => (
              <RestaurantListSkeleton key={index} />
            ))}
      </ul>
    </div>
  );
};
