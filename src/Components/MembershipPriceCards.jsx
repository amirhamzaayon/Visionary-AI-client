export const MembershipPriceCards = () => {
  return (
    <div>
      <section className="w-full bg-white rounded-2xl">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <div className="flex flex-col items-center space-y-6">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-400/20">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M16.5564 9.00278H1.00002"
                      stroke="#494949"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.9279 4.14623C12.9279 4.14623 17.2472 7.79392 17.2472 9.00301C17.2472 10.212 12.9278 13.8597 12.9278 13.8597"
                      stroke="#494949"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base font-bold text-gray-900">
                  Join the Community
                </p>
              </button>

              <h2 className="text-5xl font-semibold text-gray-900">
                Unlock the Power of AI with Exclusive Memberships
              </h2>

              <p className="text-base text-center text-gray-900 font-base max-w-[678px]">
                Access cutting-edge discussions, resources, and insights in AI,
                Machine Learning, and LLM advancements. Choose a membership that
                fits your goals and join a visionary community.
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/** Bronze Membership Card */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow">
              <h3 className="mb-4 text-2xl font-semibold">Bronze Membership</h3>
              <p className="font-light text-gray-500 capitalize sm:text-lg">
                Perfect for newcomers exploring AI & ML basics
              </p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">$10</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {[
                  "Access to basic discussions",
                  "Monthly newsletter",
                  "Beginner-friendly tutorials",
                  "Community Q&A access",
                  "Upvote privileges",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-greySeven bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center bg-orange-400"
              >
                Get started
              </a>
            </div>

            {/** Gold Membership Card */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow">
              <h3 className="mb-4 text-2xl font-semibold">Gold Membership</h3>
              <p className="font-light text-gray-500 capitalize sm:text-lg">
                Ideal for enthusiasts and intermediate learners
              </p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">$30</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {[
                  "All Bronze features",
                  "Exclusive tutorials & guides",
                  "Live expert sessions",
                  "Access to premium content",
                  "Priority support",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-greySeven bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center bg-orange-400"
              >
                Get started
              </a>
            </div>

            {/** Platinum Membership Card */}
            <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow">
              <h3 className="mb-4 text-2xl font-semibold">
                Platinum Membership
              </h3>
              <p className="font-light text-gray-500 capitalize sm:text-lg">
                Tailored for experts and professionals in AI/ML
              </p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">$70</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {[
                  "All Gold features",
                  "Personalized mentorship",
                  "Early access to new tools",
                  "VIP community discussions",
                  "Exclusive event invitations",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-greySeven bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center bg-orange-400"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
