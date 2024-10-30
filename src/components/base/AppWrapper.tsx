import React from "react";

interface Props {
  children: React.ReactNode;
  padding?: boolean;
}
const AppWrapper = ({ children, padding }: Props) => {
  return (
    <div className={`w-[90%] mx-auto ${padding ? "py-5" : ""}`}>{children}</div>
  );
};

export default AppWrapper;
