"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GetRestaurant } from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";

export const BusinessList = () => {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    params && setCategory(params.get("category"));
    params && getRestaurantList(params.get("category"));
  }, [params]);

  const getRestaurantList = (selectedCategory) => {
    GetRestaurant(selectedCategory).then((res) => {
      setRestaurants(res.restaurants);
      console.log(res);
    });
  };

  return (
    <div>
      <ul>
        {restaurants &&
          restaurants.map((restaurant, index) => {
            return (
              <li key={index}>
                <Link
                  href={"/"}
                  className="p-4"
                >
                <h2>{restaurant.name}</h2>
                <Image
                  src={restaurant.banner?.url}
                  alt={restaurant.name}
                  width={40}
                  height={40}
                  priority
                />
                </Link>
              </li>
            );
          })}{" "}
      </ul>
    </div>
  );
};
