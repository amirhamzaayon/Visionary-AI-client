import { useState } from "react";
import { ForumCard } from "./ForumCard";

export const ForumCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Web Development", "Mobile Development", "AI"];
  return (
    <div className="py-24 text-gray-900 bg-slate-200 rounded-2xl">
      <div>
        <h2 className="mb-6 text-2xl font-bold text-center">
          Find Your Service Partner
        </h2>
        <div className="flex flex-col items-center gap-6 p-6 mb-6">
          {/* Search Input */}
          <div className="w-full max-w-md">
            <input
              type="text"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Service Title"
              className="w-full p-2 text-lg text-gray-800 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            />
          </div>

          {/* Categories */}
          <div className="w-full max-w-2xl p-2 rounded-full shadow-sm bg-slate-100">
            <div className="flex flex-wrap justify-center gap-4 flex-shrink-1">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-sm font-medium text-black rounded-full transition-colors ${
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
      </div>

      <div className="flex flex-col items-center gap-6 p-6">
        <ForumCard></ForumCard>
      </div>
    </div>
  );
};
