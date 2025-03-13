import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import CarContext from "../context/CarContext";


const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const { cars } = useContext(CarContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {user?.email}</h2>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 mt-3">Logout</button>
      
      <h3 className="text-xl font-bold mt-6">Available Cars</h3>
      <ul>
        {cars.map((car) => (
          <li key={car.id} className="border p-2 my-2">{car.brand} {car.model} - ${car.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
