import React from "react";
import { StatBoxProps } from "@/types/email";

export const StatBox: React.FC<StatBoxProps> = ({ value, label }) => {
  return (
    <div className="rounded bg-white border self-stretch flex flex-col items-center justify-center w-[72px] my-auto p-2 border-[rgba(182,189,214,1)] border-solid">
      <div className="text-[rgba(21,34,76,1)] text-[40px] font-bold leading-[1.2] tracking-[-0.94px] text-center">
        {value}
      </div>
      <div className="text-[rgba(65,75,109,1)] text-xs font-normal">
        {label}
      </div>
    </div>
  );
};
