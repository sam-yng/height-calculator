"use client";

import React from "react";
import { Calculator } from "@/components/Calculator";
import classNames from "classnames";
import icon from "../../public/images/icon.png";
import Image from "next/image";
import { useWindow } from "@/utils/WindowContext";

const Home: React.FC = () => {
  const { windowOpen, setWindowOpen } = useWindow();

  const doubleClick = (event: { detail: number }) => {
    if (event.detail === 2) {
      setWindowOpen(true);
    }
  };

  return (
    <main className="relative">
      <button onClick={doubleClick}>
        <Image
          alt="icon"
          className={classNames("h-28", "w-28", "absolute")}
          src={icon}
        />
      </button>
      {windowOpen && (
        <div className={classNames("absolute", "left-80", "top-60")}>
          <Calculator />
        </div>
      )}
    </main>
  );
};

export default Home;
