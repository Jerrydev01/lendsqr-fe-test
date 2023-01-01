import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import DashboardUsers from "./pages/dashboardUser";
import SharedLayout from "./components/SharedLayout/SharedLayout'/SharedLayout";
import Guarantor from "./pages/guarantor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
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
