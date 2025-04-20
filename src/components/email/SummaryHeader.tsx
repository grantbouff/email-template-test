import React from "react";
import { StatBox } from "./StatBox";

export const SummaryHeader: React.FC = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] border self-stretch w-full overflow-hidden pt-8 pb-4 px-4 rounded-lg border-[rgba(234,246,244,1)] border-solid max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <h1 className="text-[rgba(21,34,76,1)] text-[32px] font-bold leading-[1.2] max-md:max-w-full">
          Weekly Email Summary
        </h1>
        <div className="text-[rgba(65,75,109,1)] text-base font-normal mt-1 max-md:max-w-full">
          From Apr 12, 2025 to Apr 20, 2025
        </div>
      </div>
      <div className="flex w-full items-center gap-3 overflow-hidden whitespace-nowrap flex-wrap mt-8 max-md:max-w-full">
        <StatBox value={28} label="Total" />
        <StatBox value={21} label="Read" />
        <StatBox value={7} label="Unread" />
      </div>
    </div>
  );
};
