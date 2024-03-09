import React from "react";
import Header from "../modules/Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <div></div>
    </>
  );
}
