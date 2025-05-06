import React from 'react';
import { Search, Play, Newspaper, Radio } from 'lucide-react';
import Img1 from "../../assets/TreandingImg/Img2.jpg";
import Img2 from "../../assets/TreandingImg/Img1.jpg";
import Img3 from "../../assets/TreandingImg/Img3.jpg";

const content = [
  {
    type: 'PODCAST',
    color: 'bg-purple-800',
    icon: <Play size={24} />,
    title: 'Tech Trends of Tomorrow',
    description: 'Explore the cutting-edge technologies shaping our future with industry experts.',
    author: 'Tech Visionaries',
    avatarColor: 'bg-purple-700',
    time: '45 min',
    image: Img1,
  },
  {
    type: 'NEWS',
    color: 'bg-indigo-800',
    icon: <Newspaper size={24} />,
    title: 'Global Market Shifts',
    description: 'Breaking analysis of the latest economic developments affecting global markets.',
    author: 'Market Watch',
    avatarColor: 'bg-indigo-700',
    time: '10 min read',
    image: Img2,
  },
  {
    type: 'LIVE',
    color: 'bg-pink-800',
    icon: <Radio size={24} />,
    title: 'Creative Minds Live',
    description: 'Join our panel of creative professionals discussing industry trends and insights.',
    author: 'Creative Hub',
    avatarColor: 'bg-pink-700',
    time: 'Live Now',
    live: true,
    image: Img3,
  },
];

export default function TrendingContent() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold">Trending Now</h2>
          <div className="flex items-center w-full md:w-auto">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search content..."
                className="w-full bg-black/40 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button className="ml-4 text-purple-400 hover:text-purple-300 whitespace-nowrap font-medium">
              View All
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-black/50 hover:bg-black/60 backdrop-blur-md transition-all duration-300 group shadow-md"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Icon badge */}
                <div className="absolute bottom-4 left-4 bg-pink-600 rounded-full p-2">
                  {item.icon}
                </div>
                {/* Type label */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md flex items-center">
                  {item.live && (
                    <span className="animate-pulse mr-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                  {item.type}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${item.avatarColor}`}></div>
                    <span className="ml-2 text-sm">{item.author}</span>
                  </div>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
