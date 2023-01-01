import React from "react";
import SharedLayout from "../components/SharedLayout/SharedLayout'/SharedLayout";
import DashboardCpn from "../components/Dashboard/Dashboard";

const Dashboard = () => {
  return (
    <section className="full-width">
      <div className="padding__child">
        <DashboardCpn />
      </div>
    </section>
  );
};

export default Dashboard;
