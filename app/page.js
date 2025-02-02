import { Suspense } from "react";
import { CategoryList } from "./_components/CategoryList";
import { RestaurantList } from "./_components/RestaurantList";

export default function Home() {
  return (
    <div>
      <Suspense>
        <CategoryList />
        <RestaurantList />
      </Suspense>
    </div>
  );
}
