import React from "react";
import { Header } from "./_components/Header";

export const Provider = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
