import { useState } from "react";
import { MyPostHeader } from "./MyPostHeader";
import { Link, useOutletContext } from "react-router-dom";

export const MyPost = () => {
  const [close, setClose] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const { myPosts } = useOutletContext();
  console.log(postComments);

  const handleOpenComments = (post) => {
    setPostComments(post);
    setClose(!close);
  };

  const handleFeedbackButton = (comment, feedback) => {
    const reportInfo = { ...comment, feedback: feedback };
    console.log(reportInfo);

    fetch(`http://localhost:5000/report`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("Report added successfully!");
        }
      })
      .catch((error) => console.error("Error adding review:", error));
  };

  const handleDeletePost = (postID) => {
    fetch(`http://localhost:5000/post/delete/${postID}`, { method: "delete" })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("Rost Deleted successfully!");
        }
      })
      .catch((error) => console.error("Error adding review:", error));
  };

  return (
    <div className="">
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
                  <th>Downvote</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myPosts.map((post, index) => (
                  <tr key={post._id || index}>
                    <th>1</th>
                    <td>{post.postTitle}</td>
                    <td>
                      <p className="rounded-full badge">{post.tag[0]}</p>
                    </td>
                    <td>🔥{post.totalUpvote} </td>
                    <td>⬇️ {post.totalDownvote} </td>
                    <td className="space-x-2 ">
                      <Link
                        // to={`/reviewcomments/${post._id}`}
                        onClick={() => handleOpenComments(post.comments)}
                        className="btn"
                      >
                        Review Comments
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeletePost(post._id)}
                        className="btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
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
                    {postComments.map((comment, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>
                          <p>{comment.userName}</p> <p>{comment.userEmail}</p>
                        </td>
                        <td>
                          <p>{comment.comment}</p>
                        </td>
                        <td>
                          <p className="rounded-full badge">None</p>
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
                                    handleFeedbackButton(comment, "Misleading")
                                  }
                                >
                                  Misleading
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    handleFeedbackButton(
                                      comment,
                                      "Depreciating"
                                    )
                                  }
                                >
                                  Depreciating
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    handleFeedbackButton(comment, "Disparaging")
                                  }
                                >
                                  Disparaging
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    handleFeedbackButton(comment, "Backlashes")
                                  }
                                >
                                  Backlashes
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
          ) : null}
        </div>
      </div>
    </div>
  );
};
