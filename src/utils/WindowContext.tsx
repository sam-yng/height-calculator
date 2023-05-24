"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type WindowContextType = {
  windowOpen: boolean;
  setWindowOpen: (windowOpen: boolean) => void;
  height: string;
  setHeight: (height: string) => void;
};

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const WindowProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [windowOpen, setWindowOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("");

  const value = useMemo(
    () => ({ windowOpen, setWindowOpen, height, setHeight }),
    [windowOpen, setWindowOpen]
  );

  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  );
};

export const useWindow = (): WindowContextType => {
  const value = useContext(WindowContext);
  if (!value) {
    throw new Error(
      "useReminders can only be called from within a RemindersProvider"
    );
  }
  return value;
};
