import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CarDetailsPage from "./pages/CarDetails";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { CarProvider } from "./context/CarContext";

function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cars/:id" element={<CarDetailsPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </CarProvider>
    </AuthProvider>
  );
}

export default App;
