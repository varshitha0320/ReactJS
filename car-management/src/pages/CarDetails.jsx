import { useParams } from "react-router-dom";
import { useContext } from "react";
import CarContext from "../context/CarContext";

const CarDetailsPage = () => {
  const { id } = useParams();
  const { cars, toggleFavorite, favorites } = useContext(CarContext);

  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return <div className="text-center text-red-500 text-2xl">Car not found!</div>;
  }

  const isFavorite = favorites.includes(car.id);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{car.brand} {car.model}</h2>
      <img src={car.image} alt={car.model} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-lg"><strong>Year:</strong> {car.year}</p>
      <p className="text-lg"><strong>Price:</strong> ${car.price}</p>
      <p className="text-lg"><strong>Fuel Type:</strong> {car.fuel}</p>
      <p className="text-lg"><strong>Description:</strong> {car.description}</p>

      <button 
        onClick={() => toggleFavorite(car.id)} 
        className={`mt-4 px-4 py-2 rounded ${isFavorite ? "bg-red-500" : "bg-gray-300"}`}
      >
        {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
    </div>
  );
};

export default CarDetailsPage;
