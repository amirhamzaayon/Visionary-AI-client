import { useState } from "react";

export const MyPost = () => {
  const [close, setClose] = useState(false);
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
        <div className="relative flex flex-col w-full gap-4 my-4 ">
          <div className="overflow-x-auto border rounded-box border-base-content/5 bg-base-100 ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Post Title</th>
                  <th>Post Category</th>
                  <th>Upvote</th>
                  <th></th>
                  <th></th>
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
                    <button onClick={() => setClose(!close)} className="btn">
                      Review Comments
                    </button>
                  </td>
                  <td>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {close ? (
            <div className="absolute flex items-center justify-center w-full h-fit backdrop-blur-sm">
              <div
                onClick={() => setClose(!close)}
                className="absolute btn right-2 top-2"
              >
                Close
              </div>
              <div className="overflow-y-auto bg-gray-100 border h-96 rounded-box border-base-content/5">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>User Name</th>
                      <th>Comment</th>
                      <th>Your Feedback</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>
                        <p>Commentor Name</p> <p>comentor@email.com</p>
                      </td>
                      <td>
                        <p>Showing Comment</p>
                      </td>
                      <td>
                        <p className="rounded-full badge">Null</p>
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
                              <a>Depreciating</a>
                            </li>
                            <li>
                              <a>Disparaging</a>
                            </li>
                            <li>
                              <a>Backlashes</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
