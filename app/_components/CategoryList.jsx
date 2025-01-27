"use client";
import React, { useEffect, useState } from "react";
import { GetCategory } from "../_utils/GlobalApi";
import Image from "next/image";

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GetCategory().then((res) => {
      setCategories(res.categories);
    });
  };

  return (
    <ul className="flex gap-4 md:px-20">
      {categories &&
        categories.map((category, index) => {
          return (
            <li
              key={index}
              className=" flex flex-col items-center gap-2 py-5 px-8 rounded-md bg-gray-200 border-solid border-2 border-gray-transparent"
            >
              <Image
                src={category.icon?.url}
                alt={category.name}
                width={40}
                height={40}
                priority
              />
              <p>{category.name}</p>
            </li>
          );
        })}
    </ul>
  );
};
