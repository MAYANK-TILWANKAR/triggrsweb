import React from "react";
import BackgroundGradient from "./ui/background-gradient";
import Image from "next/image";

export default function BlogCard() {
  const blogPosts = [
    {
      image: "/images/webbanner.png",
      date: "Jan 15, 2024",
      category: "Web Development",
      title: "Modern Web Development Trends",
      description:
        "Explore the latest trends and technologies shaping the future of web development. From serverless architectures to AI-powered interfaces, discover what's next in tech.",
    },
    {
      image: "/images/webbanner.png",
      date: "Jan 20, 2024",
      category: "Artificial Intelligence",
      title: "The Rise of AI in Technology",
      description:
        "Discover how artificial intelligence is revolutionizing the tech industry. Learn about machine learning, neural networks, and the future of AI applications.",
    },
    {
      image: "/images/webbanner.png",
      date: "Jan 25, 2024",
      category: "Cloud Computing",
      title: "Cloud Computing Solutions",
      description:
        "Understanding modern cloud architecture and its implementation. Explore various cloud services and best practices for scalable applications.",
    },
  ];

  return (
    <div className="bg-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-20">
        <div className="text-left mb-12">
          <h2 className="text-4xl  font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our latest articles and stay updated with the tech world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] p-4 sm:p-6 bg-zinc-900 border-2 border-zinc-500">
              <div className="relative h-64 w-full mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-gray-400">{post.date}</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-gray-300">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <button className="text-sm text-white hover:text-gray-300 transition">
                  Read More →
                </button>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
}
