import { FeatureForum } from "../../Layouts/FeatureForum";
import { Announcement } from "../Announcement";

export const HeroSection = () => {
  return (
    <div className="w-full min-h-screen px-40 pt-40 mt-6 bg-slate-200 rounded-2xl">
      <div className="space-y-6 text-3xl text-gray-900 ">
        <div>
          <strong className="badge">Visonary AI</strong>
          <p className="text-2xl font-light">
            A Forum for Tomorrow’s AI Pioneers
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-semibold">
            Discover the Future of AI <br /> Insights, Innovations &
            Conversations
          </h1>
        </div>
        <div className="space-y-6 ">
          <p>🟠 Popular Topics Shaping AI Today:</p>
          <div className="flex flex-row gap-6">
            <FeatureForum></FeatureForum>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <Announcement></Announcement>
      </div>
    </div>
  );
};
