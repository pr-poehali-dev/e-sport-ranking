import { useState } from "react";
import RankingHeader from "@/components/RankingHeader";
import RankingTabs from "@/components/RankingTabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("players");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <RankingHeader />
        <RankingTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Index;
