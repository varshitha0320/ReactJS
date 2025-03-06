import { useState, useEffect } from "react";

const DebouncedSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        onSearch(query); // Trigger API call after 300ms
      }
    }, 300);

    return () => clearTimeout(timer); // Cleanup previous timeout
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
};

export default DebouncedSearch;
