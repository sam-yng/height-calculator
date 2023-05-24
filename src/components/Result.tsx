"use client";

import classNames from "classnames";
import React from "react";
import Image from "next/image";
import cross from "../../public/images/close.png";
import info from "../../public/images/Information_icon_flat.svg.png";
import { useWindow } from "@/utils/WindowContext";

export const Result: React.FC = () => {
  const { setResultOpen, height } = useWindow();

  return (
    <article
      className={classNames(
        "bg-white",
        "w-[22vw]",
        "border-2",
        "border-gray-400"
      )}
    >
      <div
        className={classNames(
          "flex",
          "flex-row",
          "w-full",
          "justify-between",
          "items-center",
          "px-2",
          "py-1"
        )}
      >
        <h1 className="text-xl">Result</h1>
        <button>
          <Image
            alt="x"
            className="h-4 w-4 hover:cursor-pointer"
            src={cross}
            onClick={() => setResultOpen(false)}
          />
        </button>
      </div>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "bg-gray-100",
          "text-lg",
          "px-4",
          "py-8",
          "items-center"
        )}
      >
        <Image alt="icon" className="h-10 w-10 mr-4" src={info} />
        <h2>Your height is {height}cm!</h2>
      </div>
      <div
        className={classNames(
          "bg-gray-100",
          "flex",
          "justify-end",
          "px-4",
          "pb-6"
        )}
      >
        <button
          onClick={() => setResultOpen(false)}
          className={classNames("border-2", "border-blue-800", "px-8")}
        >
          Ok
        </button>
      </div>
    </article>
  );
};

export default Result;
