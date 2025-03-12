import { useState } from "react";

const SearchFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (typeof onFilter === "function") {
      onFilter(searchTerm);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="ml-2 bg-blue-600 text-white px-3 py-1 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
