import React from 'react';
import BgImg from "../assets/NewsBg/NewsBg.jpg";

const newsArticles = [
  {
    title: "Global Climate Change Awareness",
    desc: "The climate crisis is one of the biggest threats facing humanity today. In this article, we explore what can be done to address this global challenge.",
  },
  {
    title: "Tech Innovations in 2025",
    desc: "From AI advancements to breakthroughs in renewable energy, 2025 promises to be a year of remarkable technological innovations.",
  },
  {
    title: "Global Economic Recovery Post-Pandemic",
    desc: "As the world slowly recovers from the pandemic, economic experts weigh in on what recovery will look like for various industries.",
  },
];

const latestArticles = [
  {
    title: "The Future of Renewable Energy",
    desc: "Learn how renewable energy is shaping the future of our planet.",
  },
  {
    title: "Cryptocurrency in 2025",
    desc: "Explore the future of digital currencies and their impact on finance.",
  },
  {
    title: "AI in Healthcare",
    desc: "AI is transforming diagnostics and personalized treatments.",
  },
];

const popularArticles = [
  {
    title: "Electric Vehicles Innovation",
    desc: "What the future looks like for mass EV adoption and technology.",
  },
  {
    title: "The Rise of Remote Work",
    desc: "How remote work is reshaping industries and work culture.",
  },
  {
    title: "Space Exploration in 2025",
    desc: "The latest missions and future ambitions beyond Earth.",
  },
];

const ArticleCard = ({ title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{desc}</p>
    <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300">
      Read More
    </button>
  </div>
);

export default function NewsPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${BgImg})` }}
    >
      {/* Navbar */}
      <nav className="bg-blue-900 bg-opacity-80 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">News Hub</h1>
          <div className="space-x-6 text-lg">
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
            <a href="#latest" className="text-white hover:text-gray-300">Latest</a>
            <a href="#popular" className="text-white hover:text-gray-300">Popular</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 text-white">
        {/* Hero Section */}
        <section id="home" className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Stay Informed with the Latest News
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Explore global events, breaking headlines, and trends that shape our world.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
            Read Latest News
          </button>
        </section>

        {/* Featured News */}
        <section id="featured" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((item, idx) => (
              <ArticleCard key={idx} title={item.title} desc={item.desc} />
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section id="latest" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((item, idx) => (
              <ArticleCard key={idx} title={item.title} desc={item.desc} />
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section id="popular" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularArticles.map((item, idx) => (
              <ArticleCard key={idx} title={item.title} desc={item.desc} />
            ))}
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-300">
            News Hub is your go-to platform for timely, accurate, and impactful news. Our mission is to empower readers with the knowledge they need to navigate a fast-changing world.
          </p>
        </section>
      </main>

  
    </div>
  );
}
