import { useState, useEffect } from "react";

import Navbar from "./modules/Navbar";
import Team from "./modules/Team";
import atlantic from "../public/atlantic.json";
import metro from "../public/metro.json";
import central from "../public/central.json";
import pacific from "../public/pacific.json";

const App = () => {
  const data = [...atlantic, ...metro, ...central, ...pacific];
  const [division, setDivision] = useState("Atlantic");
  const [teams, setTeams] = useState(
    data
      .filter((team) => team.details.division === division)
      .sort((a, b) => b.details.seriesWins - a.details.seriesWins),
  );

  useEffect(() => {
    const filtered = data
      .filter((team) => team.details.division === division)
      .sort((a, b) => b.details.seriesWins - a.details.seriesWins);
    setTeams(filtered);
  }, [division]);

  const filterDivision = (division) => {
    const filtered = data.filter((team) => team.details.division === division);
    const sorted = filtered.sort(
      (a, b) => b.details.seriesWins - a.details.seriesWins,
    );
    setTeams(sorted);
    setDivision(division);
  };

  return (
    <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto bg-white">
      {/* <h1 className="text-black text-xl font-bold p-1 uppercase text-center">
        NHL Playoff series
      </h1> */}
      <Navbar filterDivision={filterDivision} selectedDivision={division} />
      {teams.map((team) => (
        <Team key={team.details.code} team={team} />
      ))}
    </div>
  );
};

export default App;
