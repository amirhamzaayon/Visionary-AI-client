import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const MakeAnnouncementByAdmin = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    const initialData = Object.fromEntries(formData.entries());

    // Add additional data
    initialData.ownerEmail = user?.email || "anonymous@example.com"; // Default to anonymous if user is undefined
    initialData.ownerName = user?.displayName || "Anonymous"; // Default to Anonymous if displayName is not available
    initialData.reviewsInfo = [{ averageRating: 0 }, { totalReviews: 0 }]; // Add a default reviewInfo object
    initialData.reviews = []; // Add an empty reviews array
    initialData.addedDate = new Date()
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

    fetch("https://insight-hub-server.vercel.app/services", {
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
          navigate("/features/MyServices");
        }
      });
  };

  return (
    <div>
      <div className="max-w-full p-8 bg-white rounded-lg shadow-lg ">
        <form onSubmit={handleAddService} className="space-y-6">
          {/* Row 4 */}
          <div>
            <label className="block font-semibold text-gray-700">
              Announcemnet
            </label>
            <textarea
              name="description"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
              placeholder="Wirte your announcement here"
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
