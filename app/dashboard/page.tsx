"use client";
import CardContainer from "../components/Cards/CardContainer";
import EmptyCard from "../components/Cards/EmptyCard";
import CreateButton from "../components/CreateButton";
import FilterComponent from "../components/FilterComponent";
import DashboardLoading from "../components/Loaders/DashboardLoading";
import dashboardInitialData from "../JSON/dashboardData.json";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardInitialData);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const filterHandler = (filter: string) => {
    setLoading(true);
    let filteredData;
    setActiveFilter(filter);
    if (!filter || filter.toLowerCase() === "all") {
      filteredData = dashboardInitialData.data;
    } else {
      filteredData = dashboardInitialData.data.filter(
        (item) => item.type === filter.toLowerCase()
      );
    }

    setTimeout(() => {
      setDashboardData({ ...dashboardInitialData, data: filteredData });
      setLoading(false);
    }, 500); // Optional delay to simulate loading
  };

  return (
    <div className="container flex flex-col gap-5 mx-auto mt-5 p-4">
      <div className="flex justify-between items-center border-b border-neutral-300 pb-5">
        <div>
          <p className="text-xl font-semibold">{dashboardData?.title}</p>
          <p>{dashboardData?.description}</p>
        </div>
        <div>
          <CreateButton />
        </div>
      </div>

      <FilterComponent
        onFilterClick={(filter) => filterHandler(filter)}
        activeFilter={activeFilter}
      />

      {loading ? (
        <DashboardLoading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dashboardData?.data?.map((item, index) => (
            <div key={`${item.title}+${index}`}>
              <CardContainer data={item} />
            </div>
          ))}
          <EmptyCard />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
