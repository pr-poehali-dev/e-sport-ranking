import { useState } from "react";
import RankingHeader from "@/components/RankingHeader";
import RankingTabs from "@/components/RankingTabs";
import AdminLogin from "@/components/AdminLogin";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState("players");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = () => {
    setIsAdmin(true);
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <RankingHeader />

        <div className="flex justify-between items-center mb-6">
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            {isAdmin ? (
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm">👑 Администратор</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAdminLogout}
                  className="border-slate-600 text-gray-300 hover:bg-slate-700"
                >
                  Выйти
                </Button>
              </div>
            ) : (
              <AdminLogin onLogin={handleAdminLogin} />
            )}
          </div>
        </div>

        <RankingTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isAdmin={isAdmin}
        />
      </div>
    </div>
  );
};

export default Index;
