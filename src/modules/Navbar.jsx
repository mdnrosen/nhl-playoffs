const Navbar = ({ filterDivision, selectedDivision }) => {
  return (
    <nav className="h-15 bg-white font-bold grid grid-cols-4 text-grey-800">
      <div className="flex justify-center items-center">
        <button
          className={`text-sm uppercase p-2 ${
            selectedDivision === "Atlantic" ? "bg-gray-200" : ""
          }`}
          onClick={() => filterDivision("Atlantic")}
        >
          Atlantic
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button
          className={`text-sm uppercase p-2 ${
            selectedDivision === "Metropolitan" ? "bg-gray-200" : ""
          }`}
          onClick={() => filterDivision("Metropolitan")}
        >
          Metro
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button
          className={`text-sm uppercase p-2 ${
            selectedDivision === "Central" ? "bg-gray-200" : ""
          }`}
          onClick={() => filterDivision("Central")}
        >
          Central
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button
          className={`text-sm uppercase p-2 ${
            selectedDivision === "Pacific" ? "bg-gray-200" : ""
          }`}
          onClick={() => filterDivision("Pacific")}
        >
          Pacific
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
