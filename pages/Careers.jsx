import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const openPositions = [
    { title: "Software Engineer" },
    { title: "Product Manager" },
    { title: "UX Designer" },
    { title: "Marketing Manager" },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#171717] to-[#1a1a1a]">
      <Navbar />

      <div className="flex-grow py-20 px-4">
        <div className="max-w-7xl mx-auto pt-12">
          <div className="text-center ">
            <span className="text-gray-400 text-sm font-medium border border-neutral-600/50 rounded-full px-4 py-2 inline-block mb-4 mr-[650px]">
              We&apos;re Hiring
            </span>
            <h1 className="text-4xl sm:text-5xl mr-80 font-semibold text-white mb-6 tracking-tight">
              Be part of our mission
            </h1>
            <p className="text-gray-300 max-w-3xl mx-64 text-lg leading-relaxed  text-justify">
              We&apos;re always looking for passionate individuals to join us on
              our mission. We value flat hierarchies, clear communication, and
              full ownership and responsibility.
            </p>
          </div>

          <div className="mt-10 bg-neutral-800/50 backdrop-blur-sm rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl border border-neutral-700/50">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Apply for a Position
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-neutral-700/50 border border-neutral-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-neutral-700/50 border border-neutral-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-neutral-700/50 border border-neutral-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-4 bg-neutral-700/50 border border-neutral-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    required>
                    <option value="" className="bg-neutral-800">
                      Select a position
                    </option>
                    {openPositions.map((position, index) => (
                      <option
                        key={index}
                        value={position.title}
                        className="bg-neutral-800">
                        {position.title}
                      </option>
                    ))}
                    <option value="other" className="bg-neutral-800">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-white text-sm font-medium mb-2">
                  Resume/CV <span className="text-red-400">*</span>
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full p-4 bg-neutral-700/50 border border-neutral-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500/10 file:text-blue-400 hover:file:bg-blue-500/20"
                  required
                />
                <p className="mt-2 text-sm text-gray-400">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-white text-sm font-medium mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="w-full p-4 bg-neutral-700/50 border border-neutral-600/50 text-white rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder-gray-400"
                  rows="4"
                  placeholder="Tell us why you'd be a great fit..."></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-[0.99] shadow-lg shadow-blue-500/25">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
