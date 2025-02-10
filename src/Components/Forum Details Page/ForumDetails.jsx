// import { FaStar } from "react-icons/fa6";
export const ForumDetails = ({ forumDetails }) => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg">
      <div className="flex flex-row justify-between p-2 bg-gray-100 rounded-lg">
        <div className="flex flex-row items-center gap-4">
          <img className="w-10 border-2 rounded-full" src="" alt="" />
          <div>
            <p>
              <strong>{forumDetails.authorName}</strong>
            </p>
            <p>{forumDetails.authorEmail}</p>
          </div>
        </div>
        <div className="badge">Badge</div>
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
            Tag Includes:
            <div className="text-gray-900 border-none badge bg-slate-300">
              {forumDetails.tag}
            </div>
          </p>
        </div>

        <div className="w-full h-32 p-4 rounded-lg bg-slate-100">
          {forumDetails.postDescription}
        </div>
        <div className="flex flex-row gap-4">
          <button className="flex-1 btn">()Upvote</button>
          <button className="flex-1 btn">()Down Vote</button>
          <button className="flex-1 btn">Share</button>
        </div>
      </div>
    </div>
  );
};
