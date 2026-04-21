import { calcCups } from "../lib/utils";

const TeamTitle = ({ details, seasons }) => (
  <div
    className="grid grid-cols-5 p-2 bg-(--team-color)"
    style={{ "--team-color": details.primaryColor }}
  >
    <div className="col-span-4 text-left font-bold">
      <p
        className="uppercase text-sm text-(--team-accent)"
        style={{ "--team-accent": details.accentColor }}
      >
        {details.name} {calcCups(seasons)}
      </p>
    </div>
    <div className="col-span-1 text-right font-bold">
      <p
        className="text-sm text-(--team-accent)"
        style={{ "--team-accent": details.accentColor }}
      >
        {details.seriesWins}
      </p>
    </div>
  </div>
);

export default TeamTitle;
