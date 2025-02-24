import { useNavigate } from "react-router-dom";

// import { FaStar } from "react-icons/fa6";
export const ForumDetails = ({ forumDetails }) => {
  const navigate = useNavigate();
  const { _id } = forumDetails;

  const updateInteraction = (vote) => {
    // console.log("Sending vote data:", vote); // Debug log

    fetch(`http://localhost:5000/postdetails/${_id}/vote`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Fixed typo
      },
      body: JSON.stringify(vote),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response data:", data); // Debug log
        if (data.modifiedCount > 0) {
          // alert("Review updated successfully!");
          navigate(`/forumdetails/${forumDetails?._id}`);
        }
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  const handleUpvote = (e) => {
    // e.preventDefault();

    const upvoteData = {
      totalUpvote: forumDetails.totalUpvote + 1,
    };
    updateInteraction(upvoteData);
    // navigate(`/postdetails/${forumDetails?._id}`);
  };

  const handleDownvote = (e) => {
    const downvoteData = {
      totalDownvote: forumDetails.totalDownvote + 1,
    };
    updateInteraction(downvoteData);
    // navigate(`/postdetails/${forumDetails?._id}`);
  };

  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg">
      <div className="flex flex-row justify-between p-2 bg-gray-100 rounded-lg">
        <div className="flex flex-row items-center gap-4">
          <img
            className="w-10 border-2 rounded-full"
            src={forumDetails.authorProfile}
            alt=""
          />
          <div>
            <p>
              <strong>{forumDetails.authorName}</strong>
            </p>
            <p>{forumDetails.authorEmail}</p>
          </div>
        </div>
        <div className="bg-gray-300 rounded-full badge">Badge</div>
      </div>
      {/* <div>
        <img
          className="w-full h-auto border-8 rounded-lg border-slate-100"
          src=""
          alt=""
        />
      </div> */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-1">
          <p>Published on {forumDetails.postAddedDate}</p>
          <h3 className="text-2xl font-bold">{forumDetails.postTitle}</h3>
          <p className="text-base font-light">
            Tag Includes:{" "}
            <div className="text-gray-900 bg-gray-300 border-none rounded-full badge">
              {forumDetails.tag}
            </div>
          </p>
        </div>

        <div className="w-full h-32 p-4 rounded-lg bg-slate-100">
          {forumDetails.postDescription}
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={() => handleUpvote()} className="flex-1 btn">
            {forumDetails.totalUpvote}🔥 Upvote
          </button>
          <button onClick={() => handleDownvote()} className="flex-1 btn">
            {forumDetails.totalDownvote}⬇️ Down Vote
          </button>
          <button className="flex-1 btn">Share</button>
        </div>
      </div>
    </div>
  );
};
