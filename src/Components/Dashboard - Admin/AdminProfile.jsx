export const AdminProfile = () => {
  return (
    <div className="min-h-screen p-4 bg-white rounded-xl">
      <div className="flex flex-row justify-between p-2 bg-gray-100 rounded-lg">
        <div className="flex flex-row items-center gap-4">
          <img className="w-10 border-2 rounded-full" src="" alt="" />
          <div>
            <p>
              <strong>Admin Name</strong>
              <span className="mx-2 rounded-full badge">Admin</span>
            </p>
            <p>admin@gmail.com</p>
          </div>
        </div>
        <button className="btn">Update Profile</button>
      </div>
      <div>
        <h3 className="p-4 text-xl ">Recent Posts</h3>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="flex flex-col gap-4 my-4">
          <div className="flex flex-row h-56 gap-4 p-2 border rounded-box border-base-content/5 bg-base-200">
            <div className=" bg-base-100 grow">
              <div className="p-4 m-2 font-medium text-center rounded-box bg-slate-100">
                <p>Total Users</p>
              </div>
              <div className="text-5xl font-bold text-center ">
                <p>50</p>
              </div>
            </div>
            <div className="bg-base-100 grow">
              <div className="p-4 m-2 font-medium text-center rounded-box bg-slate-100">
                <p>Total Posts</p>
              </div>
              <div className="text-5xl font-bold text-center ">
                <p>50</p>
              </div>
            </div>
            <div className=" bg-base-100 grow">
              <div className="p-4 m-2 font-medium text-center rounded-box bg-slate-100">
                <p>Total Comments</p>
              </div>
              <div className="flex items-center justify-center w-full h-full text-5xl font-bold ">
                <p>50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
