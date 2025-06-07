import { Trophy, Users, Gamepad2 } from "lucide-react";

const RankingHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-3 rounded-xl">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent font-montserrat">
          Киберспорт Рейтинг
        </h1>
      </div>

      <p className="text-gray-300 text-lg mb-2">
        Актуальные рейтинги игроков и команд
      </p>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
        <Gamepad2 className="w-4 h-4" />
        <span>Проект создан</span>
        <span className="text-purple-400 font-semibold">TG Rosters</span>
        <span>и набранной комиссии</span>
      </div>
    </div>
  );
};

export default RankingHeader;
