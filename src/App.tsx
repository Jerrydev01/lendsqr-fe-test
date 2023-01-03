import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import DashboardUsers from "./pages/dashboardUser";
import SharedLayout from "./components/SharedLayout/SharedLayout'/SharedLayout";
import Guarantor from "./pages/guarantor";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
