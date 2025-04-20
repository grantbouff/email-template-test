import React from "react";
import { ActionItemProps } from "@/types/email";

export const ActionItems: React.FC = () => {
  const actionItems = [
    "Review the Google security alert for the new sign-in.",
    "Decide whether to upgrade HubSpot and Planable accounts or let them deactivate.",
    "Address the unread welcome email from Google Al Studio.",
    "Investigate the Webflow form spam submissions and consider implementing spam prevention measures.",
  ];

  return (
    <section className="w-[560px] max-w-full text-[rgba(21,34,76,1)] leading-[1.2] mt-10 px-4">
      <h2 className="text-2xl font-bold max-md:max-w-full">Action Items</h2>
      <div className="w-full text-base font-normal mt-4 pl-2 max-md:max-w-full">
        {actionItems.map((item, index) => (
          <div
            key={index}
            className="flex w-full gap-4 mt-4 first:mt-0 max-md:max-w-full"
          >
            <div className="min-w-60 w-full flex-1 shrink basis-[0%] pt-0.5 max-md:max-w-full">
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
