const TeamHeaders = ({ details }) => {
  return (
    <div className="grid grid-cols-5 ">
      <div className="p-1 flex justify-center items-center">
        <img className="h-10" src={details.logo} alt={details.name} />
      </div>
      {["R1", "R2", "CF", "F"].map((round) => (
        <div className="flex align-middle justify-center p-1" key={round}>
          <p className="text-sm font-bold my-auto">{round}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamHeaders;
