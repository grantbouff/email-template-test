import React from "react";
import { CategoryItem } from "./CategoryItem";

export const CategorySummaries: React.FC = () => {
  const categories = [
    {
      count: 5,
      title: "Weekly Summaries",
      description:
        "From riseabove@mindful-institute.org summarizing email activity.",
    },
    {
      count: 4,
      title: "Security/Account Notifications",
      description:
        "From Google security alert, Google Cloud Organization, HubSpot account, Planable account.",
    },
    {
      count: 9,
      title: "Form Submissions/Spam",
      description:
        "Emails related to Webflow form submissions, including spam reports.",
    },
    {
      count: 3,
      title: "Updates/Newsletters",
      description:
        "From Headspace toolkit, Google Analytics personalized insights, Google Workspace Google Vids.",
    },
    {
      count: 1,
      title: "Login Codes",
      description: "Email from HubSpot with a login code.",
    },
    {
      count: 1,
      title: "Google Al Studio",
      description: "Welcome email from Google Al Studio.",
    },
  ];

  return (
    <section className="w-[560px] max-w-full text-[rgba(21,34,76,1)] mt-10 px-4">
      <h2 className="text-2xl font-bold leading-[1.2] max-md:max-w-full">
        Category Summaries
      </h2>
      <div className="w-full mt-4 max-md:max-w-full">
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </section>
  );
};
