"use client";
import React, { useEffect, useState } from "react";
import { GetCategory } from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CategoryListSkeleton } from "./CategoryListSkeleton";

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSelectedCategory(params.get("category"));
  }, [params]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    setLoading(true);
    GetCategory().then((res) => {
      setCategories(res.categories);
      setLoading(false);
    });
  };

  return (
    <div className="mt-8">
      <ul tabIndex="0" className="flex gap-4 overflow-auto">
        {!loading
          ? categories &&
            categories.map((category, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`?category=${category.slug}`}
                    className={`flex flex-col items-center gap-3 p-4 rounded-xl min-w-28 border cursor-pointer hover:bg-accent group ${
                      selectedCategory === category.slug &&
                      "border-gray-400 bg-accent "
                    }`}
                  >
                    <Image
                      src={category.icon?.url}
                      alt={category.name}
                      width={40}
                      height={40}
                      priority
                      className="group-hover:scale-125 transition-all duration-150 "
                    />
                    <h2
                      className={`text-sm font-medium ${
                        selectedCategory === category.slug &&
                        " text-orange-600 before:content-['✓_']"
                      }`}
                    >
                      {category.name}
                    </h2>
                  </Link>
                </li>
              );
            })
          : [1, 2, 3, 4, 5, 6].map((_, index) => (
              <CategoryListSkeleton key={index} />
            ))}
      </ul>
    </div>
  );
};
