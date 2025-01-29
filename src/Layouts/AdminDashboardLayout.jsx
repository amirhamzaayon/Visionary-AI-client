import { Outlet } from "react-router-dom";
import { AdminSideMenu } from "../Components/Dashboard - Admin/AdminSideMenu";

export const AdminDashboardLayout = () => {
  return (
    <div className="flex flex-row min-h-screen gap-4 p-4 bg-slate-200 rounded-xl">
      <div>
        <AdminSideMenu></AdminSideMenu>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
