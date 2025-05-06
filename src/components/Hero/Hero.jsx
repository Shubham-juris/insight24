import React from 'react';
import { ArrowRight, ChevronRight, Mic, Newspaper, Radio } from 'lucide-react';
import BgImg from "../../assets/PodcastImg/podcastImg.jpg";

export default function Hero() {
  return (
    <section className="pt-62 pb-20 text-white" style={{ backgroundImage: `url(${BgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.85 }}>
      <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Text & CTA */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Your Gateway to Premium Social Media Content
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
                Create, share, and discover podcasts, news, and broadcasts on one powerful platform. Bring your voice to the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-xl text-lg font-semibold flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                  Start Creating <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="bg-black/40 border border-purple-600 hover:border-pink-500 px-6 py-3 rounded-xl text-lg font-semibold flex items-center justify-center shadow-md transition-transform transform hover:scale-105">
                  Explore Content <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            </div>

            {/* Right: Features Card */}
            <div className="md:w-1/2 relative">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-1 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="bg-gray-900 rounded-xl p-6 space-y-5">
                  {/* Browser mock header */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="bg-gray-800 px-3 py-1 rounded text-sm">insight24.com</div>
                  </div>

                  {/* Feature blocks */}
                  <div className="space-y-4">
                    {[ 
                      {
                        icon: <Mic size={24} />,
                        title: 'Create Your Podcast',
                        desc: 'Professional quality with easy tools',
                        color: 'from-purple-400 to-pink-500',
                      },
                      {
                        icon: <Newspaper size={24} />,
                        title: 'Share Breaking News',
                        desc: 'Reach your audience instantly',
                        color: 'from-blue-400 to-purple-500',
                      },
                      {
                        icon: <Radio size={24} />,
                        title: 'Live Broadcasting',
                        desc: 'Engage with your audience in real-time',
                        color: 'from-pink-400 to-red-500',
                      },
                    ].map(({ icon, title, desc, color }, i) => (
                      <div key={i} className="flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center`}>
                          {icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-xl">{title}</h3>
                          <p className="text-sm text-gray-400">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LIVE badge */}
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-pink-600 to-purple-700 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <span className="text-white font-bold text-lg">LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
