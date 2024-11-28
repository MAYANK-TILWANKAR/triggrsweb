import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Cards from "./Cards";

const ApiDevelopment = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <div className="w-full mx-auto py-6 sm:py-8 md:py-12 lg:py-24 px-4 sm:px-6 lg:px-14 bg-black">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-0 ">
          <div className="flex items-center justify-start md:justify-start lg:ml-8 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400">
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M17.30 5 22 12m5  75M21 12H0"
              />
            </svg>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ml-2 sm:ml-3 md:ml-5 pt-1 sm:pt-2">
              Our API Development Process
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[340px] h-auto md:h-[320px] bg-[#0A1019] text-white p-4 sm:p-6 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center">
              Step 01
            </h2>
            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
              Requirements Analysis
            </h3>

            <div className="border-b border-gray-700 w-full mb-3 sm:mb-4 md:mb-6"></div>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg text-center">
              Thorough analysis of your API requirements, endpoints, and data
              structures to create a robust architecture.
            </p>
          </div>

          <svg
            className="hidden md:block w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>

          <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[340px] h-auto md:h-[320px] bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center">
              Step 02
            </h2>
            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
              Development & Testing
            </h3>

            <div className="border-b border-white/20 w-full mb-3 sm:mb-4 md:mb-6"></div>

            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed">
              Building secure, scalable APIs with comprehensive testing and
              documentation.
            </p>
          </div>

          <svg
            className="hidden md:block w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>

          <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[340px] h-auto md:h-[320px] bg-[#0A1019] text-white p-4 sm:p-6 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center">
              Step 03
            </h2>
            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
              Deployment & Monitoring
            </h3>

            <div className="border-b border-gray-700 w-full mb-3 sm:mb-4 md:mb-6"></div>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed">
              Seamless deployment with continuous monitoring and performance
              optimization.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-14 bg-neutral-900">
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-start md:justify-start lg:ml-8 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400">
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M17.30 5 22 12m5  75M21 12H0"
              />
            </svg>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ml-2 sm:ml-3 md:ml-5 pt-1 sm:pt-2">
              Our API Services
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold max-w-3xl text-neutral-400 lg:ml-8">
            We specialize in developing robust, secure, and scalable APIs that
            power modern applications. Our expertise spans RESTful APIs,
            GraphQL, and microservices architecture.
          </p>
        </div>
        <Cards />
      </div>

      <div className="w-full mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-14 mt-10 bg-black">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-14">
          <div className="w-full lg:w-1/2 px-2 sm:px-4 md:px-6 lg:px-12">
            <Image
              src="/images/banner.jpg"
              alt="API Development Team"
              width={400}
              height={267}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-neutral-200">
              API Development Services
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-base mb-4 sm:mb-6 md:mb-8">
              Our comprehensive API development services ensure your
              applications communicate efficiently and securely:
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {[
                {
                  title: "RESTful API Development",
                  description: "Building scalable and maintainable REST APIs",
                },
                {
                  title: "API Security",
                  description:
                    "Implementing robust authentication and authorization",
                },
                {
                  title: "Performance Optimization",
                  description:
                    "Ensuring fast response times and efficient data handling",
                },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-neutral-100 p-1.5 rounded-full">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-100 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-14 bg-black">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-14">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-neutral-200">
              API Development Expertise
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-base mb-4 sm:mb-6 md:mb-8">
              Our team brings extensive expertise in modern API development
              technologies and best practices:
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {[
                {
                  title: "RESTful Architecture",
                  description:
                    "Designing clean and intuitive REST APIs following industry standards",
                },
                {
                  title: "GraphQL Implementation",
                  description:
                    "Building flexible and efficient GraphQL APIs for complex data requirements",
                },
                {
                  title: "Microservices",
                  description:
                    "Developing scalable microservices architecture for distributed systems",
                },
                {
                  title: "API Documentation",
                  description:
                    "Creating comprehensive API documentation using tools like Swagger/OpenAPI",
                },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-neutral-100 p-1.5 rounded-full">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-100 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2 sm:px-4 md:px-6 lg:px-12">
            <Image
              src="/images/banner.jpg"
              alt="API Development Process"
              width={400}
              height={267}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApiDevelopment;
