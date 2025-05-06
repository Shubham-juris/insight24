import React from 'react';
import { Mic, Newspaper, Radio, ChevronRight } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 bg-black/40 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Create, share, and monetize your content with professional tools designed for creators like you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card */}
          {[
            {
              title: 'Podcast Studio',
              desc: 'Create professional podcasts with our studio-quality recording tools and editing suite.',
              icon: <Mic size={28} />,
              from: 'from-purple-900',
              to: 'to-purple-800',
              bgIcon: 'bg-purple-700',
            },
            {
              title: 'News Publishing',
              desc: 'Create and share news articles that reach your audience instantly with smart distribution.',
              icon: <Newspaper size={28} />,
              from: 'from-indigo-900',
              to: 'to-indigo-800',
              bgIcon: 'bg-indigo-700',
            },
            {
              title: 'Live Broadcasting',
              desc: 'Go live with high-quality video streaming and real-time audience interaction tools.',
              icon: <Radio size={28} />,
              from: 'from-pink-900',
              to: 'to-pink-800',
              bgIcon: 'bg-pink-700',
            },
          ].map(({ title, desc, icon, from, to, bgIcon }, i) => (
            <div
              key={i}
              className={`group bg-gradient-to-br ${from} ${to} p-6 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className={`w-14 h-14 ${bgIcon} rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:rotate-6`}>
                {icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300 mb-4">{desc}</p>
              <a
                href="#"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
