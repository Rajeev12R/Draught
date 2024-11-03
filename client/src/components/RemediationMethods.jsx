import React from 'react';
import { motion } from 'framer-motion';

const RemediationMethods = () => {
  return (
    <motion.section
      className="p-10 bg-gray-100"
      id="remediation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Remediation Methods</h2>
      
      {/* Traditional Methods */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-100 p-5 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Traditional Methods</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>Rainwater harvesting techniques, such as johads, have been successfully implemented to recharge groundwater.</li>
            <li>Agroforestry practices that integrate trees with crops, improving soil health and biodiversity.</li>
            <li>Community-led soil conservation initiatives that enhance resilience against drought.</li>
          </ul>
        </div>

        {/* Non-Traditional Methods */}
        <div className="bg-green-100 p-5 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Non-Traditional Methods</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>Innovative irrigation technologies such as drip irrigation, leading to significant water savings.</li>
            <li>Use of drought-resistant crops developed through bioengineering to enhance food security.</li>
            <li>Soil moisture management systems that help optimize water use in agriculture.</li>
          </ul>
        </div>
      </div>

      {/* Findings from the Study */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Findings from the Study</h3>
        <p className="text-gray-600 mb-4">
          The analysis revealed a significant increase in the frequency and intensity of droughts across selected states, with Rajasthan experiencing an average of 2.5 severe drought years per decade. The calculated Standardized Precipitation Index (SPI) indicated severe drought conditions prevalent during critical planting periods.
        </p>
        <p className="text-gray-600 mb-4">
          Desertification is notably high in Rajasthan and Gujarat, with a 20% decline in vegetation cover over the past two decades. Community interviews highlighted local awareness of desertification’s impacts, with many farmers noting changes in rainfall patterns and reduced water availability.
        </p>
      </div>

      {/* Policy Implications */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Policy Implications and Recommendations</h3>
        <p className="text-gray-600 mb-4">
          Strengthening policy frameworks is essential. Integrated water resource management should be prioritized, promoting both traditional and modern water conservation techniques. Policymakers should also support local adaptive strategies by providing technical assistance and resources to communities.
        </p>
        <p className="text-gray-600 mb-4">
          Enhancing community engagement through participatory approaches will ensure that remediation strategies are contextually relevant. Educational programs to raise awareness about sustainable practices and the importance of biodiversity in agriculture are also crucial.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-8 p-6 bg-blue-600 text-white rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4">Get Involved</h3>
        <p className="mb-4">Join us in our efforts to combat drought and desertification. Together, we can implement effective remediation strategies and promote sustainable land management practices.</p>
        <a href="/join" className="bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
          Join Our Cause
        </a>
      </div>
    </motion.section>
  );
};

export default RemediationMethods;