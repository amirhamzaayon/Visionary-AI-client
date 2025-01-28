import { MyPostCard } from "./MyPostCard";

export const MyProfile = () => {
  return (
    <div className="min-h-screen p-4 bg-white rounded-xl">
      <div className="flex flex-row justify-between p-2 bg-gray-100 rounded-lg">
        <div className="flex flex-row items-center gap-4">
          <img className="w-10 border-2 rounded-full" src="" alt="" />
          <div>
            <p>
              <strong>Author Name</strong>
              <span className="mx-2 rounded-full badge">Gold</span>
            </p>
            <p>author@gmail.com</p>
          </div>
        </div>
        <button className="btn">Update Profile</button>
      </div>
      <div>
        <h3 className="p-4 text-xl ">Recent Posts</h3>
        <hr className="h-px bg-gray-300 border-0" />
        <div className="flex flex-col gap-4 my-4">
          <MyPostCard></MyPostCard>
        </div>
      </div>
    </div>
  );
};
