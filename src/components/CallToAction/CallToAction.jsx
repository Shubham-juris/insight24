import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-800 to-pink-700 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Share Your Voice with the World?
        </h2>
        <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
          Join over <span className="font-semibold text-white">50,000 creators</span> who are growing their audience and monetizing content on <strong>Insight24</strong>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="bg-white text-purple-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition">
            Sign Up Free
          </button>
          <button className="bg-black/30 border border-white px-8 py-3 rounded-md text-lg font-medium hover:bg-black/40 transition">
            See Plans
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-white">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">No Credit Card Required</h3>
            <p className="text-sm text-gray-200">Get started instantly with our free tier — no commitment.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Built for Creators</h3>
            <p className="text-sm text-gray-200">From podcasting to live streams, you’ll find all the tools you need.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Trusted Worldwide</h3>
            <p className="text-sm text-gray-200">Used in 40+ countries by educators, influencers, and journalists alike.</p>
          </div>
        </div>
      </div>

      {/* Background Blur Orbs */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-pink-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default CallToAction;
