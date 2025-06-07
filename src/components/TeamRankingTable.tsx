import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Users, ChevronUp, ChevronDown } from "lucide-react";

const initialTeams = [
  "Ironclad",
  "Sky gaiming",
  "Paurigon-Z Academy",
  "Paurigon-Z emea",
  "hQd academy",
  "Pon",
  "Natare six",
  "LCG",
  "F/A Crabs",
  "AGS Fantasy",
  "MBT Summit",
  "Pride",
  "Oguzki",
  "Quest gaiming",
  "ChurkaSquad",
  "Петухи",
  "F/A Peremoga",
  "Lunacy",
  "Brave Beavers",
  "Salad Drip",
  "RPG",
  "Глисты",
  "Timbaumba",
];

interface TeamRankingTableProps {
  isAdmin: boolean;
}

const TeamRankingTable = ({ isAdmin }: TeamRankingTableProps) => {
  const [teams, setTeams] = useState(initialTeams);

  const moveTeam = (index: number, direction: "up" | "down") => {
    const newTeams = [...teams];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex >= 0 && targetIndex < teams.length) {
      [newTeams[index], newTeams[targetIndex]] = [
        newTeams[targetIndex],
        newTeams[index],
      ];
      setTeams(newTeams);
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-purple-400" />
          Рейтинг Команд ({teams.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-750">
              <TableHead className="text-gray-300 w-20">Место</TableHead>
              <TableHead className="text-gray-300">Название команды</TableHead>
              {isAdmin && (
                <TableHead className="text-gray-300 w-32 text-center">
                  Действия
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team, index) => (
              <TableRow
                key={team}
                className="border-slate-700 hover:bg-slate-750 transition-colors"
              >
                <TableCell className="text-white font-mono">
                  <div
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                      index === 0
                        ? "bg-yellow-500 text-black"
                        : index === 1
                          ? "bg-gray-400 text-black"
                          : index === 2
                            ? "bg-amber-600 text-white"
                            : "bg-slate-600 text-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                </TableCell>
                <TableCell className="text-white font-medium">{team}</TableCell>
                {isAdmin && (
                  <TableCell>
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveTeam(index, "up")}
                        disabled={index === 0}
                        className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-slate-700"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveTeam(index, "down")}
                        disabled={index === teams.length - 1}
                        className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-slate-700"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TeamRankingTable;
