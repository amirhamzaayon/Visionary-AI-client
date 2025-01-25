export const ForumComment = () => {
  return (
    <>
      <div className="flex flex-col w-auto gap-4 p-4 m-6 bg-gray-100 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-10 bg-gray-400 rounded-full">
            <img className="rounded-full bg-slate-500" src="" alt="" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold">Commenter Name</p>
            <p className="font-semibold">commenter@mail.com</p>
          </div>
        </div>
        <div className="p-4 rounded-sm bg-slate-50 min-h-24">
          <p>Comment</p>
        </div>
      </div>
    </>
  );
};
