import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import DashboardUsers from "./pages/dashboardUser";
import SharedLayout from "./components/SharedLayout/SharedLayout'/SharedLayout";
import Guarantor from "./pages/guarantor";
import loader from "./assets/logo.svg";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // save login session to local storage
  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  // save logout session to local storage
  const logout = () => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
  };

  // how to add preloader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  //  add preloader
  if (loading) {
    return (
      <div className="preloader ">
        <img className="heartbeat" src={loader} alt="loader" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/guarantor" element={<Guarantor />} />
          <Route path="/users" element={<Users />} />
          <Route path="/dashboard/:userId" element={<DashboardUsers />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
