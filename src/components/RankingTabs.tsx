import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlayerRankingTable from "./PlayerRankingTable";
import TeamRankingTable from "./TeamRankingTable";

interface RankingTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  isAdmin: boolean;
}

const RankingTabs = ({ activeTab, onTabChange, isAdmin }: RankingTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700">
        <TabsTrigger
          value="players"
          className="text-gray-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
        >
          Игроки
        </TabsTrigger>
        <TabsTrigger
          value="teams"
          className="text-gray-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
        >
          Команды
        </TabsTrigger>
      </TabsList>
      <TabsContent value="players" className="mt-6">
        <PlayerRankingTable isAdmin={isAdmin} />
      </TabsContent>
      <TabsContent value="teams" className="mt-6">
        <TeamRankingTable isAdmin={isAdmin} />
      </TabsContent>
    </Tabs>
  );
};

export default RankingTabs;
