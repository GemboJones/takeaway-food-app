import { Suspense } from "react";
import { CategoryList } from "./_components/CategoryList";
import { RestaurantList } from "./_components/RestaurantList";

export default function Home() {
  return (
    <div className="px-10 md:px-20">
      <Suspense>
        <CategoryList />
        <RestaurantList />
      </Suspense>
    </div>
  );
}
