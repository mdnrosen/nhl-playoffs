import SeasonSummary from "../compnents/SeasonSummary";
import TeamHeaders from "../compnents/TeamHeaders";
import TeamTitle from "../compnents/TeamTitle";

const Team = ({ team }) => {
  const { details, seasons } = team;
  return (
    <div className="w-full mb-7 border-y-2 bg-gray-100 text-sm">
      <TeamTitle details={details} seasons={seasons} />
      <TeamHeaders details={details} />
      {seasons.map((season) => (
        <SeasonSummary
          key={season.year}
          season={season}
          primary={details.primaryColor}
          accent={details.accentColor}
        />
      ))}
    </div>
  );
};

export default Team;
