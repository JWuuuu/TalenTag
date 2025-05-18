import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'job' | 'candidate'>('job');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCompanyClick = () => {
    navigate('/company/register');
  };

  const handleStudentClick = () => {
    navigate('/student/register');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center relative">
        <div className="text-xl font-bold">TalenTag</div>
        <nav className="space-x-6 text-sm hidden md:block">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-white text-black px-3 py-2 rounded text-sm flex items-center"
          >
            選擇身分 <ChevronDown className="ml-1" size={16} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-50">
              <button
                onClick={handleCompanyClick}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                我是企業主 <ChevronRight className="inline ml-1" size={16} />
              </button>
              <button
                onClick={handleStudentClick}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                我是學生 <ChevronRight className="inline ml-1" size={16} />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Search on Top */}
      <div
        className="relative h-[100vh] bg-cover bg-center text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("https://employability.uq.edu.au/files/192218/AdobeStock_423622711.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Headline Section */}
        <div className="z-10 text-center px-6 mb-8">
          <p className="text-lg md:text-xl mb-2">We have 850,000 great job offers you deserve!</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Dream <br /> <span className="text-white font-extrabold">Job is Waiting</span>
          </h1>
        </div>

        {/* Search Section on top of image */}
        <section className="z-20 w-full max-w-5xl px-6">
          <div className="backdrop-blur-md bg-white/30 rounded-lg shadow-xl p-6">
            <div className="flex space-x-4 justify-center mb-6">
              <button
                onClick={() => setActiveTab('job')}
                className={`px-6 py-2 rounded ${activeTab === 'job' ? 'bg-blue-600 text-white' : 'bg-white/70 text-gray-800'}`}
              >
                Find a Job
              </button>
              <button
                onClick={() => setActiveTab('candidate')}
                className={`px-6 py-2 rounded ${activeTab === 'candidate' ? 'bg-blue-600 text-white' : 'bg-white/70 text-gray-800'}`}
              >
                Find a Candidate
              </button>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="e.g. Graphic, Web Developer"
                className="border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <select
                className="border px-4 py-3 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Category</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Freelance</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                className="border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700"
              >
                Search
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;