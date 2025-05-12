"use client";
import CreateButton from "../components/CreateButton";
import dashboardInitialData from "../JSON/dashboardData.json";
import { useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardInitialData);

  return (
    <div className="container mx-auto mt-5 p-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-semibold">{dashboardData?.title}</p>
          <p>{dashboardData?.description}</p>
        </div>
        <div>
          <CreateButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
