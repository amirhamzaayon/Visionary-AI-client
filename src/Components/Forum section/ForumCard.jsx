import { Link } from "react-router-dom";

export const ForumCard = ({ card }) => {
  console.log(card);
  return (
    <div className="w-full p-6 min-h-48 bg-slate-50 rounded-2xl">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4">
          <img className="w-10 border-2 rounded-full" src="" alt="" />
          <div>
            <p>
              <strong>{card.authorName}</strong>
            </p>
            <p>{card.authorEmail}</p>
          </div>
        </div>
        <div className="badge">badge</div>
      </div>
      <hr className="h-px my-2 bg-gray-300 border-0" />
      <div className="space-y-1">
        <p className="text-lg font-semibold">{card.postTitle}</p>
        <p className="p-4 bg-gray-200 rounded-md min-h-32">
          {card.postDescription}
        </p>
        <p className="text-base font-light">
          Tag Includes:
          <div className="text-gray-900 border-none badge bg-slate-300">
            {[...card.tag]}
          </div>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between p-2 mt-4 text-lg bg-gray-200 rounded-md">
        <div>
          <strong>🔥 {card.totalUpvote}+ Upvote</strong>
        </div>
        <div>
          <strong>{card.totalComments}+ Comments</strong>
        </div>
        <Link
          to={`/forumdetails/${card._id}`}
          className="w-1/3 py-2 text-lg text-center text-white rounded-md bg-slate-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
