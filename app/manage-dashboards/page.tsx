"use client";
import { useAuthRedirect } from "../utills/useAuthRedirect";

const ManageDashboards = () => {
  useAuthRedirect();
  return (
    <div>
      <h1>Manage Dashboards</h1>
      <p>This is the Manage Dashboards page.</p>
    </div>
  );
};

export default ManageDashboards;
