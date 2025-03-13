import { useContext, useState } from "react";
import CarContext from "../context/CarContext";

const AdminPanel = () => {
  const { cars, setCars } = useContext(CarContext);
  const [newCar, setNewCar] = useState({ brand: "", model: "", price: "", year: "", fuel: "" });

  const handleAddCar = () => {
    const updatedCars = [...cars, { id: Date.now(), ...newCar }];
    setCars(updatedCars);
    localStorage.setItem("cars", JSON.stringify(updatedCars));
    setNewCar({ brand: "", model: "", price: "", year: "", fuel: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <div className="mt-4">
        <input type="text" placeholder="Brand" value={newCar.brand} onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })} className="border p-2" />
        <input type="text" placeholder="Model" value={newCar.model} onChange={(e) => setNewCar({ ...newCar, model: e.target.value })} className="border p-2 mx-2" />
        <input type="number" placeholder="Price" value={newCar.price} onChange={(e) => setNewCar({ ...newCar, price: e.target.value })} className="border p-2" />
        <button onClick={handleAddCar} className="bg-green-500 text-white px-4 py-2 ml-2">Add Car</button>
      </div>
    </div>
  );
};

export default AdminPanel;
