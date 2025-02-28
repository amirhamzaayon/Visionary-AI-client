import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export const MakeAnnouncementByAdmin = () => {
  const navigate = useNavigate();

  const [announcement, setAnnouncement] = useState([]);
  useEffect(() => {
    fetch("https://visionary-ai-server.vercel.app/announcement")
      .then((res) => res.json())
      .then((data) => {
        setAnnouncement(data);
        // Set the announcement data to the state
      });
  }, []); // Empty dependencies array to run only once

  const getAnnouncement = announcement[0];
  console.log(getAnnouncement);

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())

    const announcementData = {
      // Change field name to match backend expectation
      announcement: formData.get("description"),
    };

    // Add additional data
    // initialData.ownerEmail = user?.email || "anonymous@example.com"; // Default to anonymous if user is undefined
    // initialData.ownerName = user?.displayName || "Anonymous"; // Default to Anonymous if displayName is not available
    // initialData.reviewsInfo = [{ averageRating: 0 }, { totalReviews: 0 }]; // Add a default reviewInfo object
    // initialData.reviews = []; // Add an empty reviews array
    // initialData.addedDate = new Date()
    //   .toLocaleString("en-US", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     hour12: true,
    //   })
    //   .replace(",", "");

    // console.log(initialData);

    fetch("https://visionary-ai-server.vercel.app/add-announcement", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(announcementData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.upsertedCount > 0) {
          alert("Announcement added successfully!");
          navigate(`/dashboard/admin/makeaunouncements`);
        }
      });
  };

  return (
    <div>
      <div className="max-w-full p-8 bg-white rounded-lg shadow-lg ">
        <form onSubmit={handleAddAnnouncement} className="space-y-6">
          {/* Row 4 */}
          <div>
            <label className="block font-semibold text-gray-700">
              Announcemnet
            </label>
            <textarea
              name="description"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
              placeholder={getAnnouncement?.announcement}
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
