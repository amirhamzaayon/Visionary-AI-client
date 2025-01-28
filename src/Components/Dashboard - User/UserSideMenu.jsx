import { Link } from "react-router-dom";

export const UserSideMenu = () => {
  return (
    <div className="min-h-screen p-4 bg-white rounded-xl">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="w-full px-4 py-2 text-xl font-medium text-center text-gray-900 rounded-sm bg-slate-200">
          Dashboard
        </p>
        <ul className="flex flex-col items-center justify-center gap-2 min-w-40">
          <Link
            className="w-full px-4 py-2 font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-slate-200"
            to="/dashboard/user/userprofile"
          >
            My Profile
          </Link>

          <Link
            className="w-full px-4 py-2 font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-slate-200"
            to="userposts"
          >
            My Post
          </Link>

          <Link
            className="w-full px-4 py-2 font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-slate-200"
            to="useraddpost"
          >
            Add Post
          </Link>
        </ul>
      </div>
    </div>
  );
};
