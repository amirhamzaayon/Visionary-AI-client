import { Link } from "react-router-dom";

export const FeatureForum = () => {
  return (
    <div className="w-1/3 p-6 min-h-48 bg-slate-50 rounded-2xl">
      <div className="space-y-1">
        <div className="badge">Category</div>
        <p className="text-lg font-semibold">
          Forum or News Headline Title, Forum or News Headline Title, Forum or
          News Headline Title
        </p>
        <p className="text-base font-light">
          Written By <strong>Author Name</strong>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between p-2 mt-4 text-lg bg-gray-200 rounded-md">
        <div>
          <strong>🔥 20+</strong>
        </div>
        <div>
          <strong>5+ Comments</strong>
        </div>
        <Link
          to="/forumdetails"
          className="w-1/3 py-2 text-lg text-white rounded-md bg-slate-800 text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
