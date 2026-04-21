export const formatSeries = (round) => {
  const result = `(${round.wins}-${round.losses})`;
  return `${round.opponent} ${result}`;
};

export const sortBySeriesWins = (teams) => {
  return teams.sort((a, b) => b.details.seriesWins - a.details.seriesWins);
};

export const getRoundColor = (result) => {
  switch (result) {
    case "win":
      return "rgba(34, 197, 94, 0.5)"; // green
    case "pending":
      return "rgba(250, 204, 21, 0.5)"; // yellow
    case "loss":
      return "rgba(239, 68, 68, 0.5)"; // red
    default:
      return "rgba(156, 163, 175, 0.5)"; // gray
  }
};

export const calcCups = (seasons) => {
  const cups = seasons.filter((season) => season.stanleyCup).length;
  if (cups) {
    // return cup emoji for each cup won
    return "🏆".repeat(cups);
  }
};
