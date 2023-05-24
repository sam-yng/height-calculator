"use client";

import React from "react";
import classNames from "classnames";
import cross from "../../public/images/close.png";
import Image from "next/image";
import { useWindow } from "@/utils/WindowContext";

export const Calculator: React.FC = () => {
  const { setWindowOpen } = useWindow();

  return (
    <article
      className={classNames(
        "bg-white",
        "w-[30vw]",
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
        <h1 className="text-xl">Height calculator tool</h1>
        <button>
          <Image
            alt="x"
            onClick={() => setWindowOpen(false)}
            className="h-4 w-4 hover:cursor-pointer"
            src={cross}
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
          "justify-between",
          "py-8"
        )}
      >
        <h2>Input your height</h2>
        <input
          className={classNames(
            "border-2",
            "border-gray-300",
            "mx-2",
            "px-2",
            "focus:border-blue-800",
            "active:border-blue-800",
            "rounded-sm"
          )}
        />
        <h2>cm</h2>
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
        <button className={classNames("border-2", "border-blue-800", "px-8")}>
          Xem
        </button>
      </div>
    </article>
  );
};
