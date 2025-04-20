import React from "react";
import { ImportantCommunicationProps } from "@/types/email";

export const ImportantCommunications: React.FC = () => {
  const communications: ImportantCommunicationProps[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8eba6f032516d1223ee5f6cad3e4321c09a66434?placeholderIfAbsent=true",
      items: [
        "Security alert from Google regarding a new sign-in on a Mac.",
        "Google Workspace announcement about Google Vids becoming a core service.",
        "HubSpot and Planable free account deactivation notices.",
        "Google Cloud Organization now available for domain.",
      ],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/366e844d6d0941397c79917e5422681e92996a33?placeholderIfAbsent=true",
      items: ["Welcome to Google Al Studio."],
    },
  ];

  return (
    <section className="w-[560px] max-w-full text-[rgba(21,34,76,1)] leading-[1.2] mt-10 px-4">
      <h2 className="text-2xl font-bold max-md:max-w-full">
        Important Communications
      </h2>
      <div className="w-full text-base font-normal mt-4 max-md:max-w-full">
        {communications.map((comm, idx) => (
          <div
            key={idx}
            className="flex w-full items-stretch gap-4 flex-wrap mt-4 first:mt-0 max-md:max-w-full"
          >
            <img
              src={comm.icon}
              className="aspect-[0.18] object-contain w-6 shrink-0"
              alt="Communication icon"
            />
            <div className="min-w-60 flex-1 shrink basis-[0%] pt-0.5 max-md:max-w-full">
              {comm.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className={`${itemIdx > 0 ? "mt-3" : ""} max-md:max-w-full`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
