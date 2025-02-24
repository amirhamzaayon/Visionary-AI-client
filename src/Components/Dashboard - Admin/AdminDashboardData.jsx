import { useOutletContext } from "react-router-dom";

export const AdminDashboardData = () => {
  const { userProfiles, reports, posts } = useOutletContext();
  return (
    <div className="min-h-screen p-4 bg-white rounded-xl">
      <div>
        <h3 className="p-4 text-xl ">Overall Users Data</h3>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="flex flex-col gap-4 my-4">
          <div className="flex flex-row h-56 gap-4 p-2 border rounded-box border-base-content/5 bg-base-200">
            <div className=" bg-base-100 grow">
              <div className="p-4 m-2 font-medium text-center rounded-box bg-slate-100">
                <p>Total Users</p>
              </div>
              <div className="text-5xl font-bold text-center ">
                <p>{userProfiles.length}</p>
              </div>
            </div>
            <div className="bg-base-100 grow">
              <div className="p-4 m-2 font-medium text-center rounded-box bg-slate-100">
                <p>Total Posts</p>
              </div>
              <div className="text-5xl font-bold text-center ">
                <p>{posts.length}</p>
              </div>
            </div>
            <div className=" bg-base-100 grow">
              <div className="p-4 m-2 font-medium text-center rounded-box bg-slate-100">
                <p>Total Reported Comments</p>
              </div>
              <div className="text-5xl font-bold text-center ">
                <p>{reports.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
