import React from 'react';

const PersonalInfo = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Personal Info</h2>
      <div className="mt-2">
        <p><strong>Full Name:</strong> Jerome Bell</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Date of Birth:</strong> March 23, 1995 (26 y.o)</p>
        <p><strong>Language:</strong> English, French, Bahasa</p>
        <p><strong>Address:</strong> 4517 Washington Ave. Manchester, Kentucky 39495</p>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Professional Info</h2>
        <div className="mt-2">
          <p className="text-gray-700">
            I'm a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I'm passionate about designing digital products that have a positive impact on the world.
          </p>
          <p className="text-gray-700 mt-2">
            For 10 years, I've specialized in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Current Job:</strong> Product Designer
          </p>
          <p className="text-gray-700 mt-1">
            <strong>Experience in Years:</strong> 4 Years
          </p>
          <p className="text-gray-700 mt-1">
            <strong>Highest Qualification Held:</strong> Bachelors in Engineering
          </p>
          <p className="text-gray-700 mt-1">
            <strong>Skill set:</strong>
            <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Project Management</span>
            <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Copywriting</span>
            <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">English</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo
