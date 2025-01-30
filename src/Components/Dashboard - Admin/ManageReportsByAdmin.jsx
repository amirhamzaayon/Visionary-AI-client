export const ManageReportsByAdmin = () => {
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
        {/* <button className="btn">Update Profile</button> */}
      </div>

      <div>
        <h3 className="p-4 text-xl ">Mangae Your Reports Activity</h3>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="flex flex-col gap-4 my-4">
          <div className="overflow-x-auto border rounded-box border-base-content/5 bg-base-100 ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Post Title</th>
                  <th>Reported Comment</th>
                  <th>Comment By</th>
                  <th>Users Feedback</th>
                  <th>Report By</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Title</td>
                  <td>Comment</td>
                  <td>
                    <p>Commentor Name</p> <p>comentor@email.com</p>
                  </td>
                  <td>
                    <p className="rounded-full badge">Feedback</p>
                  </td>
                  <td>
                    <p>Reporter Name</p> <p>reporter@email.com</p>
                  </td>
                  <td>
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="m-1 btn">
                        Take Action
                      </div>
                      <ul
                        tabIndex={0}
                        className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52"
                      >
                        <li>
                          <a>Delete Comment</a>
                        </li>
                        <li>
                          <a>Reject Report</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
