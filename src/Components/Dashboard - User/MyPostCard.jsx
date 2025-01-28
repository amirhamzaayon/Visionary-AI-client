import { Link } from "react-router-dom";

export const MyPostCard = () => {
  return (
    <div className="p-6 max-w-[800px] min-h-48 bg-slate-50 rounded-2xl">
      {/* <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4">
          <img className="w-10 border-2 rounded-full" src="" alt="" />
          <div>
            <p>
              <strong>Author Name</strong>
            </p>
            <p>author@gmail.com</p>
          </div>
        </div>
        <div className="badge">Badge</div>
      </div> */}
      <hr className="h-px my-2 bg-gray-300 border-0" />
      <div className="space-y-1">
        <p className="text-lg font-semibold">
          Forum or News Headline Title, Forum or News Headline Title, Forum or
          News Headline Title, Forum or News Headline Title
        </p>
        <p className="p-4 bg-gray-200 rounded-md min-h-32">Text</p>
        <p className="text-base font-light">
          Tag Includes:{" "}
          <div className="text-gray-900 border-none rounded-full badge bg-slate-300">
            Category
          </div>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between p-2 mt-4 text-lg bg-gray-200 rounded-md">
        <div>
          <strong>🔥 20+ Upvote</strong>
        </div>
        <div>
          <strong>5+ Comments</strong>
        </div>
        <Link
          to="/forumdetails"
          className="w-1/3 py-2 text-lg text-center text-white rounded-md bg-slate-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
