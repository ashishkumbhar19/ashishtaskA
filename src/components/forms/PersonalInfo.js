// PersonalInfo.js
import React from 'react';

function PersonalInfo({ nextPage }) {
  return (
    <div className="w-full">
      {/* Step 1 Heading */}
      <h2 className="text-2xl font-semibold mb-6">Step 1: Your Profile</h2>

      {/* Enter login information message */}
      <p className="text-lg text-gray-700 mb-6">Enter the login information for your account, you will able to create additonal users after registration </p>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-gray-700 text-left mb-2">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="First Name"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-left mb-2">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-left mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-left mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-left mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Password"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-left mb-2">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Confirm Password"
          />
        </div>
      </div>

      {/* Next Button */}
    </div>
  );
}

export default PersonalInfo;
