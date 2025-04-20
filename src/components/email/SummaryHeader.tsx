
import React from "react";
import { StatBox } from "./StatBox";

export const SummaryHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-start p-8 md:p-6 sm:p-4 rounded-lg border border-[#EAF6F4] bg-[radial-gradient(95.21%_60.16%_at_112.23%_91.41%,rgba(6,100,251,0.20)_0%,rgba(6,100,251,0.00)_100%),radial-gradient(111.89%_74.01%_at_3.75%_9.24%,rgba(46,255,171,0.25)_0%,rgba(46,255,171,0.03)_67.35%,rgba(46,255,171,0.00)_100%),rgba(255,255,255,0.95)] gap-8">
      <div className="flex flex-col items-start gap-1">
        <span className="font-arial font-bold text-[32px] md:text-[28px] sm:text-[24px] text-[rgba(21,34,76,1)]">
          Weekly Email Summary
        </span>
        <span className="font-arial font-normal text-base md:text-sm sm:text-xs text-[rgba(65,75,109,1)]">
          From Apr 12, 2025 to Apr 20, 2025
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center p-2 rounded border border-[#B6BDD6] bg-white">
          <span className="font-arial font-bold text-[40px] md:text-[36px] sm:text-[32px] text-[rgba(21,34,76,1)] text-center w-14">
            28
          </span>
          <span className="font-arial font-normal text-xs md:text-[11px] sm:text-[10px] text-[rgba(65,75,109,1)]">
            Total
          </span>
        </div>
        <div className="flex flex-col items-center p-2 rounded border border-[#B6BDD6] bg-white">
          <span className="font-arial font-bold text-[40px] md:text-[36px] sm:text-[32px] text-[rgba(21,34,76,1)] text-center w-14">
            21
          </span>
          <span className="font-arial font-normal text-xs md:text-[11px] sm:text-[10px] text-[rgba(65,75,109,1)]">
            Read
          </span>
        </div>
        <div className="flex flex-col items-center p-2 rounded border border-[#B6BDD6] bg-white">
          <span className="font-arial font-bold text-[40px] md:text-[36px] sm:text-[32px] text-[rgba(21,34,76,1)] text-center w-14">
            7
          </span>
          <span className="font-arial font-normal text-xs md:text-[11px] sm:text-[10px] text-[rgba(65,75,109,1)]">
            Unread
          </span>
        </div>
      </div>
    </div>
  );
};
