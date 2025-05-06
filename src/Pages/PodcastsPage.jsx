import React, { useState } from "react";
import { FaSpotify, FaApple, FaGoogle, FaAmazon, FaHeart, FaYoutube, FaPodcast } from "react-icons/fa";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import CustomerImg1 from "../assets/StoriesImg/Img1.png";
import CustomerImg2 from "../assets/StoriesImg/Img2.png";
import CustomerImg3 from "../assets/StoriesImg/Img3.png";

const PodcastPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(25);

  const togglePlayPause = () => setIsPlaying(!isPlaying);
  const handleProgressChange = (e) => setAudioProgress(e.target.value);

  const platforms = [
    { name: "Apple Podcasts", icon: <FaApple /> },
    { name: "Spotify", icon: <FaSpotify /> },
    { name: "Google Podcasts", icon: <FaGoogle /> },
    { name: "Amazon Music", icon: <FaAmazon /> },
    { name: "iHeartRadio", icon: <FaHeart /> },
    { name: "YouTube", icon: <FaYoutube /> },
    { name: "Castbox", icon: <FaPodcast /> },
  ];

  const testimonials = [
    { author: "Alex", quote: "Everything about this service is fantastic!", img: CustomerImg1 },
    { author: "The Dev Podcast", quote: "Fantastic. I would definitely recommend.", img: CustomerImg3 },
    { author: "Pam", quote: "Buzzsprout makes podcasting so easy.", img: CustomerImg2 },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-gray-900 ">
      {/* Hero + Player */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
        className="flex flex-col lg:flex-row justify-between items-start gap-8 p-8 bg-purple-900 text-white"
      >
        {/* Left Content */}
        <div className="lg:w-1/2 mt-30">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Amazing Podcasts</h1>
          <p className="text-lg mb-8">
            Listen to thought-provoking conversations, entertaining stories, and expert insights from our curated collection.
          </p>
          <div className="flex space-x-4 mb-8 mt-20">
            <button className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium">Start Listening</button>
            <button className="bg-purple-800 border border-purple-500 px-6 py-3 rounded-md font-medium">Browse Categories</button>
          </div>
        </div>

        {/* Player */}
        <div className="lg:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg mt-30">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Featured Episode</h3>
              <p className="text-gray-600">The Creative Mind</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2">Unlocking Your Creative Potential</h2>
          <p className="text-gray-600 mb-6">
            Explore the secrets of creative thinking with renowned artist Lisa Johnson.
          </p>

          <div className="mb-4">
            <div className="relative h-2 bg-gray-200 rounded">
              <div className="absolute h-full bg-purple-600 rounded" style={{ width: `${audioProgress}%` }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>12:00</span>
              <span>45:00</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button className="text-gray-700" aria-label="Skip back"><SkipBack size={24} /></button>
              <button
                className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white"
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
              </button>
              <button className="text-gray-700" aria-label="Skip forward"><SkipForward size={24} /></button>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2 size={20} className="text-gray-600" />
              <input
                type="range"
                min="0"
                max="100"
                value={audioProgress}
                onChange={handleProgressChange}
                className="w-24 h-2 bg-gray-200 rounded"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Podcast Directories */}
      <motion.section
        className="bg-gray-900 text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Get listed in the top podcast directories</h2>
          <p className="text-gray-300 mt-2">Reach millions of listeners through these platforms:</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {platforms.map(({ name, icon }, idx) => (
            <div key={idx} className="flex items-center bg-gray-800 px-4 py-2 rounded-md space-x-2 text-lg">
              {icon}
              <span>{name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="text-center py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">Real podcast success stories</h2>
        <p className="text-green-600 font-medium">Over 3,000 5-star reviews from Buzzsprout podcasters</p>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
          {testimonials.map(({ quote, author, img }, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
              <img src={img} alt={author} className="w-12 h-12 rounded-full mx-auto mb-4 object-cover" />
              <p className="text-xl italic mb-4">“{quote}”</p>
              <p className="font-semibold">— {author}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Customer Support */}
      <motion.section
        className="bg-white text-black text-center py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Remarkable Customer Support</h2>
        <p className="text-sm font-medium mb-10">90% Great Ratings over the last 30 days.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-lg font-semibold">
          <div>
            <p>Responded to</p>
            <p className="text-3xl font-bold mt-1">4,872</p>
            <p>emails</p>
          </div>
          <div>
            <p>Helped</p>
            <p className="text-3xl font-bold mt-1">2,231</p>
            <p>customers</p>
          </div>
          <div>
            <p>Average wait</p>
            <p className="text-3xl font-bold mt-1">39</p>
            <p>minutes</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PodcastPage;
