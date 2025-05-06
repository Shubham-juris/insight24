import React from 'react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Community Hub</h1>
          <div className="space-x-6">
            <a href="#discussions" className="text-white hover:text-gray-300">Discussions</a>
            <a href="#events" className="text-white hover:text-gray-300">Upcoming Events</a>
            <a href="#contributions" className="text-white hover:text-gray-300">Contributions</a>
            <a href="#about" className="text-white hover:text-gray-300">About Us</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-8">
        {/* Hero Section */}
        <section id="home" className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Our Community Hub
          </h1>
          <p className="text-lg mb-8">
            Connect with like-minded individuals, engage in meaningful discussions, and contribute to community-driven projects.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
            Join the Conversation
          </button>
        </section>

        {/* Discussions Section */}
        <section id="discussions" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Active Discussions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Discussion 1 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">The Future of AI</h3>
              <p className="text-gray-400 mb-4">What impact will artificial intelligence have on society in the next decade? Join our discussion on the future of AI.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Join Discussion</button>
            </div>

            {/* Discussion 2 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Climate Change Awareness</h3>
              <p className="text-gray-400 mb-4">How can we create more awareness about climate change and push for impactful action?</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Join Discussion</button>
            </div>

            {/* Discussion 3 */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Innovation in Education</h3>
              <p className="text-gray-400 mb-4">How can we leverage technology to improve education systems worldwide? Let’s talk about the future of education.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Join Discussion</button>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section id="events" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Community Meetup</h3>
              <p className="text-gray-600 mb-4">Join us for a live meetup where members can share ideas, network, and collaborate on projects.</p>
              <p className="text-gray-500 mb-4">Date: June 10, 2025</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">RSVP</button>
            </div>

            {/* Event 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Hackathon 2025</h3>
              <p className="text-gray-600 mb-4">A 24-hour hackathon where developers, designers, and creatives come together to build innovative solutions.</p>
              <p className="text-gray-500 mb-4">Date: July 5, 2025</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Sign Up</button>
            </div>

            {/* Event 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Sustainability Workshop</h3>
              <p className="text-gray-600 mb-4">Learn about sustainable living practices and how you can contribute to a greener planet.</p>
              <p className="text-gray-500 mb-4">Date: August 20, 2025</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Register</button>
            </div>
          </div>
        </section>

        {/* Contributions Section */}
        <section id="contributions" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Contributions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contribution 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Contribute to the Blog</h3>
              <p className="text-gray-600 mb-4">Share your insights and expertise with our community through guest blog posts. Help educate and inspire others.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Submit a Post</button>
            </div>

            {/* Contribution 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Volunteer for Events</h3>
              <p className="text-gray-600 mb-4">Join our team of volunteers and contribute to the success of our community events and initiatives.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Sign Up</button>
            </div>

            {/* Contribution 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Mentor a Member</h3>
              <p className="text-gray-600 mb-4">Become a mentor and help guide others through their personal and professional development journeys.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">Apply Now</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-400">
            Our community is all about collaboration, learning, and support. We strive to create a space where everyone can contribute, share knowledge, and work together to make the world a better place.
          </p>
        </section>
      </div>
    </div>
  );
}
