import { Link } from "react-router-dom";

export const AdminSideMenu = () => {
  return (
    <div className="min-h-screen p-4 bg-white rounded-xl">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="w-full px-4 py-2 text-xl font-medium text-center text-gray-900 rounded-sm bg-slate-200">
          Dashboard
        </p>
        <ul className="flex flex-col items-center justify-center gap-2 min-w-40">
          <Link
            className="w-full px-4 py-2 font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-slate-200"
            to="/dashboard/admin/adminprofile"
          >
            Admin Profile
          </Link>

          <Link
            className="w-full px-4 py-2 font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-slate-200"
            to="manageusers"
          >
            Manage Users
          </Link>

          <Link
            className="w-full px-4 py-2 font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-slate-200"
            to="managereports"
          >
            Manage Reports
          </Link>
          <Link
            className="w-full px-4 py-2 font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-slate-200"
            to="makeaunouncements"
          >
            Make Announcements
          </Link>
        </ul>
      </div>
    </div>
  );
};
