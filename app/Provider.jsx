import React from "react";
import { Header } from "./_components/Header";

export const Provider = ({ children }) => {
  return (
    <div className="px-10 md:px-20">
      <Header />
      {children}
    </div>
  );
};
