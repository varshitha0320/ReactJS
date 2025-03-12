import { useContext, useState } from "react";
import CarContext from "../context/CarContext";
import SearchFilter from "./SearchFilter";

const CarList = () => {
  const { cars } = useContext(CarContext);
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilter = (searchTerm) => {
    const filtered = cars.filter(car => car.model.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCars(filtered);
  };

  return (
    <div>
      <SearchFilter onFilter={handleFilter} />
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id} className="border p-4 my-2">
            {car.brand} {car.model} - ${car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
