import React from "react";
import { EmailSummary } from "@/components/email/EmailSummary";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <EmailSummary />
    </main>
  );
};

export default Index;
