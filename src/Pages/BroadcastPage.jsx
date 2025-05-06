import React, { useState } from 'react';

export default function BroadcastPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-green-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Live Broadcasts</h1>
          <div className="space-x-6">
            <a href="#live" className="text-white hover:text-gray-300">Live Broadcasts</a>
            <a href="#upcoming" className="text-white hover:text-gray-300">Upcoming Events</a>
            <a href="#past" className="text-white hover:text-gray-300">Past Broadcasts</a>
            <a href="#about" className="text-white hover:text-gray-300">About Us</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        {/* Hero Section */}
        <section id="home" className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Tune In to Our Live Broadcasts
          </h1>
          <p className="text-lg mb-8">
            Stay up-to-date with our live broadcasts, featuring the latest discussions, interviews, and events. Don’t miss out!
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">
            Watch Live Now
          </button>
        </section>

        {/* Live Broadcasts Section */}
        <section id="live" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Live Broadcasts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Live Broadcast 1 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Breaking News Live</h3>
              <p className="text-gray-400 mb-4">Stay informed with live updates from around the world. Tune in to our Breaking News Live broadcast for real-time coverage.</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Watch Now</button>
            </div>

            {/* Live Broadcast 2 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Tech Talks Live</h3>
              <p className="text-gray-400 mb-4">Join our experts as they discuss the latest trends in technology. From AI to space exploration, we’ve got you covered!</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Watch Now</button>
            </div>

            {/* Live Broadcast 3 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Sports Live Broadcast</h3>
              <p className="text-gray-400 mb-4">Catch all the action from live sporting events, interviews with athletes, and more. Don’t miss a minute!</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Watch Now</button>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section id="upcoming" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">AI Revolution - Live Discussion</h3>
              <p className="text-gray-600 mb-4">Join industry leaders as they discuss the future of artificial intelligence and its impact on various sectors. Don’t miss it!</p>
              <p className="text-gray-500 mb-4">Date: June 15, 2025</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Set Reminder</button>
            </div>

            {/* Event 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Space Exploration - The Next Frontier</h3>
              <p className="text-gray-600 mb-4">Tune in for an exclusive live broadcast on space exploration, featuring renowned astronauts and experts.</p>
              <p className="text-gray-500 mb-4">Date: July 1, 2025</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Set Reminder</button>
            </div>

            {/* Event 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Global Economic Forum</h3>
              <p className="text-gray-600 mb-4">Experts discuss the global economy, financial markets, and future outlooks in this live event. Stay informed!</p>
              <p className="text-gray-500 mb-4">Date: July 20, 2025</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Set Reminder</button>
            </div>
          </div>
        </section>

        {/* Past Broadcasts Section */}
        <section id="past" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Past Broadcasts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Past Broadcast 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">The Future of Renewable Energy</h3>
              <p className="text-gray-600 mb-4">Catch our past broadcast where we discussed innovations in renewable energy and its global impact.</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Watch Recording</button>
            </div>

            {/* Past Broadcast 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Crypto Market Insights</h3>
              <p className="text-gray-600 mb-4">Watch our previous live stream as we delve deep into the volatile world of cryptocurrency and its trends.</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Watch Recording</button>
            </div>

            {/* Past Broadcast 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Global Health Crisis - Post Pandemic</h3>
              <p className="text-gray-600 mb-4">Replay our in-depth discussion on how the world is recovering post-pandemic and the lessons learned from the crisis.</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">Watch Recording</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-400">
            We are a platform dedicated to delivering live broadcasts of important global events, discussions, and interviews. Our aim is to bring you real-time coverage and thought-provoking insights.
          </p>
        </section>
      </div>
    </div>
  );
}
