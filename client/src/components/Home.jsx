// Home.jsx
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

// Sample Images
const images = [
  image1,
  image2,
  image3,
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set the autoplay speed
  };

  return (
    <>
      <motion.section
        className="flex flex-col md:flex-row p-6 md:p-10 bg-gray-100 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Slideshow */}
        <div className="w-full md:w-1/2 lg:w-2/3 mb-6 md:mb-0 rounded-2xl">
          <Slider {...settings} className="relative w-[90%]">
            {images.map((image, index) => (
              <div key={index} className="relative h-[400px] md:h-[600px] lg:h-[700px]">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
                <div className="absolute bottom-4 left-4 text-white text-xl bg-gray-800 bg-opacity-50 p-2 rounded">
                  {/* <p>{`Slide ${index + 1}`}</p> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center p-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Drought Awareness</h2>
          <p className="text-lg text-gray-600 mb-4">
            Drought is a prolonged dry period in the natural climate cycle that can occur anywhere in the world. 
            It is a slow-onset disaster characterized by a lack of precipitation, resulting in a water shortage. 
            Drought can have severe impacts on agriculture, water supply, and the environment, often leading to 
            food insecurity and economic distress. By understanding the causes and effects of drought, we can work 
            towards effective remediation methods and policy implementations to mitigate its impact.
          </p>
          <a href="/join" className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Join Our Cause
          </a>
        </div>
      </motion.section>

      {/* Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-10">
        {[
          {
            title: "Drought Statistics",
            description: "Explore the latest data and statistics on drought conditions in India, understanding their severity and impact on agriculture.",
            link: "/drought"
          },
          {
            title: "Desertification Status",
            description: "Discover the current status of desertification across various Indian states and its implications for local populations.",
            link: "/desertification"
          },
          {
            title: "Remediation Methods",
            description: "Learn about methods to combat drought and desertification that are restoring balance to affected areas.",
            link: "/remediation"
          },
          {
            title: "Interactive Map",
            description: "Visualize the drought conditions across India with our interactive map, showcasing real-time data on severity and affected regions.",
            link: "/map"
          },
        ].map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <a href={card.link} className="text-blue-500 hover:underline mt-4 block">Learn More</a>
 </div>
        ))}
      </div>

      {/* Importance of the Study */}
      <div className="p-6 md:p-10 mt-8 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Importance of the Study</h3>
        <p className="text-gray-600 mb-4">
          The investigation of drought and desertification is critical for a variety of reasons, encompassing socio-economic, environmental, and policy-related dimensions.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Socio-Economic Impact: Drought affects food security, livelihoods, and overall economic stability, particularly in rural areas.</li>
          <li>Environmental Concerns: Desertification leads to loss of biodiversity, soil degradation, and water scarcity, impacting ecosystems and human well-being.</li>
          <li>Policy Development: Understanding these phenomena is essential for developing informed and effective policy responses.</li>
        </ul>
      </div>

      {/* Objectives of the Report */}
      <div className="p-6 md:p-10 mt-8 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Objectives of the Report</h3>
        <p className="text-gray-600 mb-4">
          The objectives of this report are designed to provide a comprehensive analysis of drought and desertification in selected Indian states, facilitating informed discussions on remediation strategies.
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li>To Assess the Intensity and Frequency of Droughts Across Selected Indian States</li>
          <li>To Evaluate the Status and Extent of Desertification in These Regions</li>
          <li>To Analyze Traditional and Non-Traditional Remediation Methods and Their Effectiveness</li>
        </ol>
      </div>

      {/* Call to Action */}
      <div className="p-6 md:p-10 mt-8 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get Involved</h3>
        <p className="text-gray-600 mb-6">Join us in spreading awareness about drought issues and finding solutions. Together, we can make a difference!</p>
        <a href="/join" className="mt-20 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Join Our Cause
        </a>
      </div>
    </>
  );
};

export default Home;