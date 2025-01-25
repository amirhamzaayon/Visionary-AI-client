// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";

export const AddCommentForm = ({ onClose }) => {
  //   const navigate = useNavigate();

  //   const { user } = useContext(AuthContext);

  //   const handleSubmitReview = (e) => {
  //     e.preventDefault();

  //     const formData = new FormData(e.target);
  //     const reviewData = {
  //       userEmail: user?.email,
  //       userName: user?.displayName,
  //       userProfile: user?.photoURL || null, // Use default if no profile photo
  //       review: formData.get("reviewText"),
  //       rating,
  //       addedDate: new Date().toLocaleString("en-US", {
  //         year: "numeric",
  //         month: "2-digit",
  //         day: "2-digit",
  //         hour: "2-digit",
  //         minute: "2-digit",
  //         hour12: true,
  //       }),
  //     };

  //     fetch(`https://insight-hub-server.vercel.app/services/${id}/reviews`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(reviewData),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.message) {
  //           alert("Review added successfully!");
  //           onClose();
  //         }
  //       })
  //       .catch((error) => console.error("Error adding review:", error));
  //     navigate(`/ServiceDetailsPage/${id}`);
  //   };

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-700">Write a Comment</h2>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Star Rating */}
        {/* <div>
          <label className="block font-semibold text-gray-700">Rating</label>
          <Rating
            emptySymbol={<FaStar className="text-3xl text-gray-400" />}
            fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
            fractions={2}
            onChange={handleRatingUpdate}
            initialRating={rating}
            className="text-2xl text-yellow-500"
          />
        </div> */}

        {/* Review Text */}
        <div>
          <label className="block font-semibold text-gray-700">
            Your Comment
          </label>
          <textarea
            name="reviewText"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
            placeholder="Write your comment here..."
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
        >
          Post Comment
        </button>
      </form>
    </div>
    // </div>
  );
};
