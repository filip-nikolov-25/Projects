import React from "react";

interface Props {
  children: React.ReactNode;
  padding: boolean;
}
const SectionContainer = ({ children, padding }: Props) => {
  return <div className={`${padding ? "pt-5 pb-5" : ""}`}>{children}</div>;
};

export default SectionContainer;
