import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuSection } from "./MenuSection";

export const RestaurantTabs = ({ restaurant }) => {
  return (
    <Tabs defaultValue="category" className="w-full mt-10 ">
      <TabsList>
        <TabsTrigger value="category">Menu</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
      </TabsList>
      <TabsContent value="category">
        <MenuSection restaurant={restaurant} />
      </TabsContent>
      <TabsContent value="about">
        <>
          <h2 className="font-bold text-lg my-5">About Us</h2>
          <h2>{restaurant?.aboutUs}</h2>
        </>
      </TabsContent>
    </Tabs>
  );
};
