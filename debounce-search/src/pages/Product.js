import DebouncedSearch from "../components/DebouncedSearch";

const ProductPage = () => {
  const handleSearch = async (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product Search</h1>
      <DebouncedSearch onSearch={handleSearch} />
    </div>
  );
};

export default ProductPage;
