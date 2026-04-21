import { formatSeries, getRoundColor } from "../lib/utils";

const SeasonSummary = ({ season, primary, accent }) => {
  return (
    <div className="grid grid-cols-5">
      <div
        className="p-1 bg-(--team-color)"
        style={{ "--team-color": primary }}
      >
        <p
          className={`text-sm text-(--team-accent) text-center ${
            season.stanleyCup ? "font-bold" : "font-thin"
          } ${season.presidentsTrophy ? "underline" : ""}`}
          style={{ "--team-accent": accent }}
        >
          {season.year}
        </p>
      </div>

      {season.notes && (
        <div className="col-span-4 p-1 text-xs italic">
          <p>{season.notes}</p>
        </div>
      )}
      {season.qualified ? (
        season.rounds.map((round) => (
          <div
            className="p-1 text-xs text-center flex items-center justify-center"
            style={{
              backgroundColor: getRoundColor(round.result),
            }}
            key={round.round}
          >
            <p className="italic">{formatSeries(round)}</p>
          </div>
        ))
      ) : (
        <p className="text-xs italic p-1">DNQ</p>
      )}
    </div>
  );
};

export default SeasonSummary;
