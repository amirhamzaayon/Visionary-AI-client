import { useOutletContext } from "react-router-dom";

export const ManageUsersByAdmin = () => {
  const { userProfiles } = useOutletContext();
  const handleMakeAdmin = (userID) => {
    fetch(`http://localhost:5000/admin/make-admin/${userID}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("User is now Admin");
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div className="min-h-screen p-4 bg-white rounded-xl">
      <div>
        <h3 className="p-4 text-xl ">Mangae Your Users Activity</h3>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="flex flex-col gap-4 my-4">
          <div className="overflow-x-auto border rounded-box border-base-content/5 bg-base-100 ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>User Name</th>
                  <th>Subscription Status</th>
                  <th>Total Post by User</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {userProfiles.map((userProfile, index) => (
                  <tr key={userProfile._id || index}>
                    <th>{1 + index}</th>
                    <td>
                      <p>{userProfile.userName}</p>{" "}
                      <p>{userProfile.userEmail}</p>
                    </td>
                    <td>
                      <p className="rounded-full badge">
                        {userProfile.userBadge}
                      </p>
                    </td>
                    <td>
                      <p>Null</p>
                    </td>
                    <td>
                      <button
                        onClick={() => handleMakeAdmin(userProfile._id)}
                        className="btn"
                      >
                        Make Admin
                      </button>
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
