import React from "react";
import { CategoryItemProps } from "@/types/email";

export const CategoryItem: React.FC<CategoryItemProps> = ({
  count,
  title,
  description,
}) => {
  return (
    <div className="flex w-full items-stretch gap-4 flex-wrap mt-4 max-md:max-w-full">
      <div className="flex min-h-6 flex-col items-center text-sm font-bold whitespace-nowrap text-center leading-none w-6">
        <div className="self-stretch w-6 bg-[rgba(248,255,252,1)] border min-h-6 min-w-6 gap-2 h-6 px-1 rounded-[100px] border-[rgba(229,233,249,1)] border-solid">
          {count}
        </div>
        <div className="bg-[rgba(229,233,249,1)] flex min-h-[21px] w-px flex-1 rounded-lg" />
      </div>
      <div className="min-w-60 text-base flex-1 shrink basis-[0%] pt-0.5 max-md:max-w-full">
        <div className="font-bold leading-[1.2] max-md:max-w-full">{title}</div>
        <div className="font-normal leading-[19px] mt-1 max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );
};
