// Resources.js
import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
  const references = [
    { author: "Bharati, M. et al.", year: 2018, title: "Traditional Water Management Practices in India: Lessons for the Future.", journal: "Journal of Water Resources Management." },
    { author: "IMD", year: 2021, title: "Annual Weather Report.", journal: "Indian Meteorological Department." },
    { author: "ISRO", year: 2016, title: "Desertification and Land Degradation Atlas of India.", journal: "Indian Space Research Organisation." },
    { author: "Jha, R. et al.", year: 2017, title: "Socio-Economic Impacts of Desertification in Rural India.", journal: "Environmental Management Journal." },
    { author: "Kumar, A.", year: 2019, title: "Rainwater Harvesting: A Key to Sustainable Agriculture.", journal: "Agricultural Systems." },
    { author: "Kumar, R. et al.", year: 2019, title: "Trends in Drought Frequency and Severity in India: A Statistical Analysis.", journal: "Climate Dynamics." },
    { author: "Mishra, A. & Singh, V.", year: 2010, title: "A Review of Drought Indices.", journal: "International Journal of Climatology." },
    { author: "MoA&FW", year: 2021, title: "Pradhan Mantri Krishi Sinchai Yojana: Progress Report.", journal: "Ministry of Agriculture and Farmers' Welfare, Government of India." },
    { author: "Patel, K. et al.", year: 2019, title: "Assessing Land Degradation Using Remote Sensing and GIS: A Case Study from Rajasthan.", journal: "Land Use Policy." },
    { author: "Ramesh, R. et al.", year: 2020, title: "Adoption of Modern Irrigation Technologies in India: Opportunities and Challenges.", journal: "Journal of Irrigation and Drainage Engineering." },
    { author: "Shah, A.", year: 2018, title: "The Drought Crisis: Economic and Social Impacts.", journal: "Development Studies Review." },
    { author: "Singh, S. et al.", year: 2020, title: "Ecological Consequences of Desertification in India.", journal: "Ecological Indicators." }
  ];

  return (
    <motion.section
      className="p-10 bg-gray-50 shadow-md rounded-lg"
      id="resources"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Resources and References</h2>

      {/* Static References */}
      <h3 className="text-xl font-medium mb-2">Academic References:</h3>
      <ul className="mt-4 list-disc pl-5 mb-6">
        {references.map((ref, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{ref.author} ({ref.year}). </span>
            <span>{ref.title} </span>
            <span className="italic">{ref.journal}</span>
          </li>
        ))}
      </ul>

      {/* Animated Links */}
      <h3 className="text-xl font-medium mb-2">Online Resources:</h3>
      <ul className="mt-4 list-disc pl-5">
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Government Report on Drought
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            International Journal of Desertification Research
          </a>
        </li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            NGO Initiatives for Soil Restoration
          </a>
        </li>
      </ul>
    </motion.section>
  );
};

export default Resources;
