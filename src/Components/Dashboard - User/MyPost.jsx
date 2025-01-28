export const MyPost = () => {
  return (
    <div className="min-h-screen p-4 bg-white rounded-xl">
      <div className="flex flex-row justify-between p-2 bg-gray-100 rounded-lg">
        <div className="flex flex-row items-center gap-4">
          <img className="w-10 border-2 rounded-full" src="" alt="" />
          <div>
            <p>
              <strong>Author Name</strong>
              <span className="mx-2 rounded-full badge">Gold</span>
            </p>
            <p>author@gmail.com</p>
          </div>
        </div>
        {/* <button className="btn">Update Profile</button> */}
      </div>
      <div>
        <h3 className="p-4 text-xl ">Mangae Your Post Activity</h3>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="flex flex-col gap-4 my-4">
          <div className="overflow-x-auto border rounded-box border-base-content/5 bg-base-100 ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Post Title</th>
                  <th>Post Category</th>
                  <th>Upvote</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Title</td>
                  <td>
                    <p className="rounded-full badge">Category</p>
                  </td>
                  <td>🔥10 </td>
                  <td className="space-x-2 ">
                    <button className="btn">Review Comments</button>
                  </td>
                  <td>
                    <button className="btn">Delete</button>
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
