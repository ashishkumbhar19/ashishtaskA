


// import React from 'react';

// function BusinessProfile({ nextPage, prevPage }) {
//   return (
//     <div className="p-0 max-w-4xl mx-auto">
//       {/* Step 2 Heading */}
//       <h2 className="text-2xl font-semibold mb-6">Step 2: Business Profile</h2>

//       {/* Enter business information message */}
//       <p className="text-lg text-gray-700 mb-6">Enter the business information for your account</p>

//       {/* Form Fields */}
//       <form>
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           {/* Business Profile Fields */}
//           <div>
//             <label className="block text-gray-700 text-left mb-2">Brand Name</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="Brand Name"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 text-left mb-2">Brand Type</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="Brand Type"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 text-left mb-2">Street Address</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="Street Address"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 text-left mb-2">City</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="City"
//             />
//           </div>

//           {/* PDF Upload Field with Forward Arrow Box */}
//           <div className="col-span-2">
//             <label className="block text-gray-700 text-left mb-2">Upload PDF Document</label>
//             <div className="flex items-center">
//               <input
//                 type="file"
//                 accept=".pdf"
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//               <button
//                 type="button"
//                 className="ml-4 px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 onClick={() => alert('Arrow button clicked')}
//               >
//                 ➔
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default BusinessProfile;



import React from 'react';

function BusinessProfile({ nextPage, prevPage }) {
  return (
    <div className="p-0 max-w-4xl mx-auto">
      {/* Step 2 Heading */}
      <h2 className="text-2xl font-semibold mb-6">Step 2: Business Profile</h2>

      {/* Enter business information message */}
      <p className="text-lg text-gray-700 mb-6">Enter the Information about your company</p>

      {/* Form Fields */}
      <form>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Business Profile Fields */}
          <div>
            <label className="block text-gray-700 text-left mb-2">Brand Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Brand Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-left mb-2">Brand Type</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Brand Type"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-left mb-2">Street Address</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Street Address"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-left mb-2">City</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-left mb-2">Zip code</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Street Address"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-left mb-2">Tax Id Number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="City"
            />
          </div>

          {/* First PDF Upload Field with Forward Arrow */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-left mb-2">Upload PDF Document</label>
            <div className="flex items-center">
              <input
                type="file"
                accept=".pdf"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                className="ml-4 px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => alert('Arrow button for first PDF clicked')}
              >
                ➔
              </button>
            </div>
          </div>

          {/* Second PDF Upload Field with Forward Arrow */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-left mb-2">Upload Additional Document</label>
            <div className="flex items-center">
              <input
                type="file"
                accept=".pdf"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                className="ml-4 px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => alert('Arrow button for second PDF clicked')}
              >
                ➔
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BusinessProfile;
