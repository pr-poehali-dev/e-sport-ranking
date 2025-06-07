import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlayerRankingTable from "@/components/PlayerRankingTable";
import TeamRankingTable from "@/components/TeamRankingTable";
import { User, Users } from "lucide-react";

interface RankingTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const RankingTabs = ({ activeTab, onTabChange }: RankingTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-slate-800 border border-slate-700">
          <TabsTrigger
            value="players"
            className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            <User className="w-4 h-4" />
            Игроки
          </TabsTrigger>
          <TabsTrigger
            value="teams"
            className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            <Users className="w-4 h-4" />
            Команды
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="players" className="animate-fade-in">
        <PlayerRankingTable />
      </TabsContent>

      <TabsContent value="teams" className="animate-fade-in">
        <TeamRankingTable />
      </TabsContent>
    </Tabs>
  );
};

export default RankingTabs;
