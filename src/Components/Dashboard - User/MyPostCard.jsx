import { Link } from "react-router-dom";

export const MyPostCard = ({ post }) => {
  return (
    <div className="p-6 max-w-[800px] min-h-48 bg-slate-50 rounded-2xl">
      <hr className="h-px my-2 bg-gray-300 border-0" />
      <div className="space-y-1">
        <p className="text-lg font-semibold">{post.postTitle}</p>
        <p className="p-4 bg-gray-200 rounded-md min-h-32">
          {post.postDescription}
        </p>
        <p className="text-base font-light">
          Tag Includes:{" "}
          <div className="text-gray-900 border-none rounded-full badge bg-slate-300">
            {post.tag}
          </div>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between p-2 mt-4 text-lg bg-gray-200 rounded-md">
        <div>
          <strong>🔥 {post.totalUpvote}+ Upvote</strong>
        </div>
        <div>
          <strong>{post.totalComments}+ Comments</strong>
        </div>
        <Link
          to={`/forumdetails/${post._id}`}
          className="w-1/3 py-2 text-lg text-center text-white rounded-md bg-slate-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
