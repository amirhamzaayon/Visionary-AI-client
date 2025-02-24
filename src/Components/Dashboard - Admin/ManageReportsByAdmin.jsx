import { useNavigate, useOutletContext } from "react-router-dom";

export const ManageReportsByAdmin = () => {
  const navigate = useNavigate();
  const { reports } = useOutletContext();

  const handleDeleteComment = (id) => {
    fetch(`http://localhost:5000/admin/delete-comment/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          navigate(`/dashboard/admin/managereports`);
          alert("Comment Successfully Deleted");
        }
      })
      .catch((error) => console.error("Error:", error));
    console.log(id);
  };

  const handleRejectReport = (id) => {
    fetch(`http://localhost:5000/admin/reject-comment/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          navigate(`/dashboard/admin/managereports`);
          alert("Comment Successfully Deleted");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="min-h-screen p-4 bg-white rounded-xl">
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
                {reports.map((report, index) => (
                  <tr key={report._id || index}>
                    <th>{1 + index}</th>
                    <td>{report.postTitle}</td>
                    <td>{report.comment}</td>
                    <td>
                      <p>{report.userName}</p> <p>{report.userEmail}</p>
                    </td>
                    <td>
                      <p className="bg-red-300 rounded-full badge">
                        {report.feedback}
                      </p>
                    </td>
                    <td>
                      <p>{report.authorName}</p> <p>{report.authorEmail}</p>
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
                            <button
                              onClick={() =>
                                handleDeleteComment(report.commentID)
                              }
                            >
                              Delete Comment
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                handleRejectReport(report.commentID)
                              }
                            >
                              Reject Report
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
