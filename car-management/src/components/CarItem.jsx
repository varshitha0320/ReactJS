import { Link } from "react-router-dom";
import { useContext } from "react";
import CarContext from "../context/CarContext";

const CarItem = ({ car }) => {
  const { toggleFavorite, favorites } = useContext(CarContext);
  const isFavorite = favorites.includes(car.id);

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h3 className="text-xl font-bold">{car.brand} {car.model}</h3>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <p>Fuel: {car.fuel}</p>
      <div className="flex justify-between items-center mt-3">
        <Link to={`/cars/${car.id}`} className="bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </Link>
        <button 
          onClick={() => toggleFavorite(car.id)} 
          className={`px-4 py-2 rounded ${isFavorite ? "bg-red-500" : "bg-gray-300"}`}
        >
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>
    </div>
  );
};

export default CarItem;
