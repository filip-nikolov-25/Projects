import React, { useState } from "react";

interface ButtonProps {
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const AppButton: React.FC<ButtonProps> = ({
  width = "auto",
  height = "auto",
  borderRadius = "4px",
  padding = "auto",
  fontSize = "14.5px",
  backgroundColor = "#fff", 
  color = "#000",
  onClick,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverBackgroundColor = "#fff";
  const hoverTextColor = "#000";
  const borderColor = "#E87B22";
  const defaultBoxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  const hoverBoxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";

  return (
    <button
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        color: isHovered ? hoverTextColor : color,
        border: `1px solid ${borderColor}`,
        cursor: "pointer",
        fontSize,
        transition: "background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s",
        padding,
        boxShadow: isHovered ? hoverBoxShadow : defaultBoxShadow,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default AppButton;
