import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AddPost = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    const initialData = Object.fromEntries(formData.entries());

    // Add additional data
    initialData.authorEmail = user?.email || "anonymous@example.com";
    initialData.authorName = user?.displayName || "Anonymous";
    initialData.authorProfile = user?.photoURL;
    initialData.totalUpvote = 0;
    initialData.totalDownvote = 0;
    initialData.totalComments = 0;
    initialData.comments = [];
    initialData.postAddedDate = new Date()
      .toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(",", "");

    console.log(initialData);

    fetch(`http://localhost:5000/newpost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Service Has been Added.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/dashboard/user/userposts`);
        }
      });
  };

  return (
    <div>
      <div className="max-w-full p-8 bg-white rounded-lg shadow-lg ">
        <form onSubmit={handleAddPost} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block font-semibold text-gray-700">
                Post Title
              </label>
              <input
                type="text"
                name="postTitle"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                placeholder="Enter your post title"
              />
            </div>
            {/* <div>
              <label className="block font-semibold text-gray-700">
                Service Name
              </label>
              <input
                type="text"
                name="serviceTitle"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                placeholder="Enter service name"
              />
            </div> */}
            <div>
              <label className="block font-semibold text-gray-700">
                Category
              </label>
              <select
                name="tag"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
              >
                <option selected disabled>
                  Please Select an Category
                </option>
                <option>AI</option>
                <option>Date Science</option>
                <option>Mechine Learning</option>
                <option>AI Agent</option>
                <option>LLM</option>
                <option>Generative AI</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block font-semibold text-gray-700">
                Attach Image File (Optional)
              </label>
              <input
                type="text"
                name="postImage"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                placeholder="Enter image file path"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                Refference Link (Optional)
              </label>
              <input
                type="url"
                name="website"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                placeholder="Enter website link"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div>
            <label className="block font-semibold text-gray-700">
              Post Description
            </label>
            <textarea
              name="postDescription"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
              placeholder="Wirte your post"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
