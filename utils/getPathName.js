"use client";
const { usePathname } = require("next/navigation");

export const getPathName = () => {
  const pathName = usePathname();
  console.log("====================================");
  console.log(pathName, "pathname");
  console.log("====================================");
  return pathName;
};
