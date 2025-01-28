import { Outlet } from "react-router-dom";
import { UserSideMenu } from "../Components/Dashboard - User/UserSideMenu";

export const UserDashboardLayout = () => {
  return (
    <div className="flex flex-row min-h-screen gap-4 p-4 bg-slate-200 rounded-xl">
      <div>
        <UserSideMenu></UserSideMenu>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
