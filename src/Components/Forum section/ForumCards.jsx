import { useEffect, useState } from "react";
import { ForumCard } from "./ForumCard";

export const ForumCards = () => {
  const [forumCards, setForumCards] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch services based on search and filter
  const fetchPosts = () => {
    const query = new URLSearchParams({
      postTitle: searchTerm,
      tag: selectedCategory === "All" ? "" : selectedCategory,
    }).toString();

    fetch(`https://visionary-ai-server.vercel.app/search?${query}`)
      .then((res) => res.json())
      .then((data) => {
        setForumCards(data);
      })
      .catch((error) => console.error("Error fetching services:", error));
  };

  // Fetch unique categories for filter dropdown
  const fetchCategories = () => {
    fetch("https://visionary-ai-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  };

  useEffect(() => {
    fetchPosts(); // Fetch services initially and whenever filters change
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);

  return (
    <div className="py-24 text-gray-900 rounded-lg bg-slate-200">
      <h2 className="mb-6 text-2xl font-bold text-center">
        Keep an eye on the AI revolution—big things are unfolding!
      </h2>
      <div className="flex flex-col items-center gap-6 p-6 mb-6">
        {/* Search Input */}
        <div className="w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type Your Field of Interest..."
            className="w-full p-2 text-lg text-center text-gray-800 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Categories */}
        <div className="grid w-full grid-cols-5 p-2 rounded-lg shadow-sm bg-slate-100">
          <div className="col-span-1 col-start-1"></div>

          <div className="flex flex-col items-center col-span-3 col-start-2 gap-6 p-6">
            {forumCards.map((card, index) => (
              <ForumCard key={index} card={card} />
            ))}
          </div>

          <div className="flex flex-col col-span-1 col-start-5 gap-4 p-2 mt-6 overflow-y-auto rounded-lg bg-slate-200 max-h-96 flex-shrink-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium text-black rounded-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-200 hover:bg-blue-600"
                    : "bg-white hover:bg-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center gap-6 p-6">
        {forumCards.map((card, index) => (
          <ForumCard key={index} card={card} />
        ))}
      </div> */}
    </div>
  );
};
