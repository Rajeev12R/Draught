import React from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import droughtImage from '../assets/image1.jpg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; // Import necessary components

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DroughtStatistics = () => {
  // Sample data for chart
  const data = {
    labels: [
      'Maharashtra',
      'Rajasthan',
      'Gujarat',
      'Andhra Pradesh',
      'Karnataka',
      'Tamil Nadu',
      'Uttar Pradesh',
      'Madhya Pradesh',
      'Haryana',
      'Bihar',
    ],
    datasets: [
      {
        label: 'Drought Intensity Level',
        data: [75, 90, 65, 80, 70, 85, 60, 78, 66, 74], // Example intensity levels (in percentage)
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
          text: 'Intensity Level (%)',
        },
      },
    },
  };

  return (
    <motion.section
      className="p-10 bg-gray-100"
      id="drought"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">Drought Intensity Statistics</h2>
      <p className="mt-4 text-lg text-gray-600">
        This section provides a comprehensive overview of drought intensity across different states in India.
        We include statistical data, maps, and visual aids to illustrate the impact of drought.
      </p>

      {/* Bar Chart for Drought Intensity */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Drought Intensity Levels by State</h3>
        <Bar data={data} options={options} />
      </div>

      {/* Drought Impact Details */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            state: "Maharashtra",
            intensity: "High",
            affectedRegions: "Vidarbha, Marathwada",
            impact: "Severe impact on agricultural productivity, leading to food insecurity.",
          },
          {
            state: "Rajasthan",
            intensity: "Very High",
            affectedRegions: "Western Rajasthan, Thar Desert",
            impact: "Water scarcity affecting both agriculture and daily life.",
          },
          {
            state: "Gujarat",
            intensity: "Moderate",
            affectedRegions: "Kutch, Saurashtra",
            impact: "Increased migration from rural to urban areas due to drought.",
          },
          {
            state: "Andhra Pradesh",
            intensity: "High",
            affectedRegions: "Rayalaseema, Coastal Andhra",
            impact: "Severe water shortages affecting irrigation and drinking water supply.",
          },
          {
            state: "Karnataka",
            intensity: "Moderate",
            affectedRegions: "North Karnataka, Malnad region",
            impact: "Reduced crop yields and increased farmer distress.",
          },
          {
            state: "Tamil Nadu",
            intensity: "High",
            affectedRegions: "Drought-prone districts in the interior",
            impact: "Impact on agriculture and rural livelihoods due to water scarcity.",
          },
          {
            state: "Uttar Pradesh",
            intensity: "Moderate",
            affectedRegions: "Bundelkhand region",
            impact: "Increased poverty levels and food insecurity.",
          },
          {
            state: "Madhya Pradesh",
            intensity: "High",
            affectedRegions: "Bundelkhand region",
            impact: "Severe impact on agriculture, leading to farmer suicides.",
          },
          {
            state: "Haryana",
            intensity: "Moderate",
            affectedRegions: "South Haryana",
            impact: "Reduced crop productivity and increased migration .",
          },
          {
            state: "Bihar",
            intensity: "High",
            affectedRegions: "South Bihar",
            impact: "Severe impact on agriculture, leading to food insecurity and poverty.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="font-bold text-xl">{item.state}</h3>
            <p className="text-gray-700">Intensity Level: <span className="font-semibold">{item.intensity}</span></p>
            <p className="text-gray-700">Affected Regions: <span className="font-semibold">{item.affectedRegions}</span></p>
            <p className="text-gray-700">Impact: <span className="font-semibold">{item.impact}</span></p>
          </div>
        ))}
      </div>

      {/* Visual Aid */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Visual Representation of Drought Impact</h3>
        <img src={droughtImage} alt="Drought Impact" className="w-full h-auto rounded-lg shadow-md" />
        <p className="mt-2 text-gray-600">This image illustrates the impact of drought on agricultural land in India.</p>
      </div>
    </motion.section>
  );
};

export default DroughtStatistics;