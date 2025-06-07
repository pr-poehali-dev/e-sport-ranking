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
import { GripVertical, ChevronUp, ChevronDown } from "lucide-react";

const initialPlayers = [
  "Fade",
  "Xenoxz",
  "Dani",
  "Madper",
  "Flim",
  "Zandor",
  "Wewevof",
  "bleaff",
  "hedwig",
  "zaiko",
  "Mikus",
  "Yoshimura",
  "Danone",
  "Chieva",
  "Sankidd",
  "Mabo",
  "Jyro",
  "Silent",
  "Shafir",
  "Bloody",
  "Lucas",
  "Lorex",
  "Campion",
  "Frank",
  "Xineos",
  "Rashen",
  "Уго",
  "Amka",
  "Yarch",
  "Switch",
  "Zink",
  "Xazz",
  "Clash",
  "Hatacke",
  "Zeleek",
  "Nobita",
  "Outplayer",
  "Dezeent",
  "Ratik",
  "Саньок",
  "Retka",
  "Sadeo",
  "Sentinel",
  "Maz Bez",
  "Snow",
  "Пингвин",
  "Timoxa",
  "Ronax",
  "Lewry",
  "Кирилл",
  "Chiru",
  "Perfection",
  "DarkMaster",
  "Zmexcix",
  "Zak",
  "Maksimka",
  "Kyami",
  "Jesse pinkman",
  "Makaron",
  "Gotteally",
  "Готтеали",
  "Fayger",
  "Wolfor",
  "Dragon",
  "Astit",
  "lostee",
  "Weox",
  "Beliver",
  "Undertaker",
  "Evilboy",
  "Zobik",
  "Gargadan",
  "Leon",
  "KsiRix",
  "Forever",
  "Kurami",
  "Cloudy",
  "Exciting",
  "Owen",
  "An1sh",
  "Zaktempo",
  "Meloyy",
  "Decruel",
  "Simple kay",
  "Егорка Прайм",
  "slite",
  "patriot",
  "calvin klein",
  "Forever",
  "Warent",
  "Tasherka",
  "Heltoxx",
  "Goodmart",
  "Hope",
  "Skrill",
];

const PlayerRankingTable = () => {
  const [players, setPlayers] = useState(initialPlayers);

  const movePlayer = (index: number, direction: "up" | "down") => {
    const newPlayers = [...players];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex >= 0 && targetIndex < players.length) {
      [newPlayers[index], newPlayers[targetIndex]] = [
        newPlayers[targetIndex],
        newPlayers[index],
      ];
      setPlayers(newPlayers);
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <GripVertical className="w-5 h-5 text-purple-400" />
          Рейтинг Игроков ({players.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-750">
              <TableHead className="text-gray-300 w-20">Место</TableHead>
              <TableHead className="text-gray-300">Никнейм</TableHead>
              <TableHead className="text-gray-300 w-32 text-center">
                Действия
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player, index) => (
              <TableRow
                key={player}
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
                <TableCell className="text-white font-medium">
                  {player}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => movePlayer(index, "up")}
                      disabled={index === 0}
                      className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-slate-700"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => movePlayer(index, "down")}
                      disabled={index === players.length - 1}
                      className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-slate-700"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PlayerRankingTable;
