import React from "react";

export const RestaurantListSkeleton = () => {
  return (
    <div>
      <div className="h-[130px] w-full bg-slate-200 rounded-xl animate-pulse"></div>
      <div className="h-11 w-full bg-slate-200 rounded-xl animate-pulse mt-3"></div>
    </div>
  );
};
