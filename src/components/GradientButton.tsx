"use client";
import React from "react";

type GradientButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function GradientButton({
  text,
  onClick,
  className = "",
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[155px] h-[54px] rounded-full text-black font-medium
      bg-[linear-gradient(63deg,_#E268BE_17%,_#FDC62F_59%)]
      hover:opacity-90 transition-all duration-300 font-clash ${className}`}
    >
      {text}
    </button>
  );
}
