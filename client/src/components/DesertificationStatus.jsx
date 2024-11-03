import React from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2'; // Assuming you want to use charts
import desertificationImage from '../assets/image1.jpg'; // Example image for desertification

const DesertificationStatus = () => {
  // Sample data for chart
  const data = {
    labels: ['Rajasthan', 'Gujarat', 'Madhya Pradesh', 'Maharashtra', 'Andhra Pradesh'],
    datasets: [
      {
        label: 'Desertification Severity (Percentage)',
        data: [70, 60, 55, 50, 45], // Example severity levels
        backgroundColor: 'rgba(255, 165, 0, 0.6)',
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Severity Level (%)',
        },
      },
    },
  };

  return (
    <motion.section
      className="p-10 bg-gray-100"
      id="desertification"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">Status of Desertification</h2>
      <p className="mt-4 text-lg text-gray-600">
        An in-depth look at desertification in India, including its causes, effects, and the regions most affected.
      </p>
      <ul className="mt-5 list-disc pl-5 text-gray-600">
        <li>Impact on agriculture and livelihoods.</li>
        <li>Effects on local ecosystems and biodiversity.</li>
        <li>Case studies from various states.</li>
      </ul>

      {/* Bar Chart for Desertification Severity */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Desertification Severity by State</h3>
        <Bar data={data} options={options} />
      </div>

      {/* Detailed Case Studies */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Case Studies</h3>
        <div className="bg-white p-5 rounded-lg shadow-lg mb-4">
          <h4 className="font-bold text-xl">Rajasthan</h4>
          <p className="text-gray-700">
            Rajasthan is one of the most affected states, with approximately 70% of its land experiencing desertification.
            The Thar Desert expansion has led to severe water scarcity and loss of arable land.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mb-4">
          <h4 className="font-bold text-xl">Gujarat</h4>
          <p className="text-gray-700">
            In Gujarat, desertification has affected the Kutch region, leading to reduced agricultural output and increased
            poverty among local communities.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg mb-4">
          <h4 className="font-bold text-xl">Madhya Pradesh</h4>
          <p className="text-gray-700">
            The Bundelkhand region of Madhya Pradesh faces severe desertification, impacting local agriculture and
            contributing to farmer distress.
          </p>
        </div>
      </div>

      {/* Visual Aid */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Visual Representation of Desertification</h3>
        <img src={desertificationImage} alt="Desertification Impact" className="w-full h-auto rounded-lg shadow-md" />
        <p className="mt-2 text-gray-600">This image illustrates the impact of desertification on agricultural land in India.</p>
      </div>
    </motion.section>
  );
};

export default DesertificationStatus;