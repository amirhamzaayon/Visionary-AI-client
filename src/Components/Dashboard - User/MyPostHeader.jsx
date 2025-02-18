export const MyPostHeader = ({ user }) => {
  return (
    <div>
      <div className="flex flex-row justify-between p-2 bg-gray-100 rounded-lg">
        <div className="flex flex-row items-center gap-4">
          <img
            className="w-10 border-2 rounded-full"
            // src={user.photoURL}
            alt=""
          />
          <div>
            <p>
              <strong>{user?.displayName}</strong>
              <span className="mx-2 rounded-full badge">Gold</span>
            </p>
            <p>{user?.email}</p>
          </div>
        </div>
        <button className="btn">Update Profile</button>
      </div>
    </div>
  );
};
