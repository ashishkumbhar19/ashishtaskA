




// import React, { useState, useEffect, useRef } from "react";
// import PersonalInfo from "./PersonalInfo";
// import BusinessProfile from "./BusinessProfile";
// import AdditionalUser from "./AdditionalUser";

// function MultiPageForm() {
//   const [page, setPage] = useState(1);
//   const [cardSize, setCardSize] = useState({ width: "auto", height: "auto" });
//   const cardRef = useRef(null);

//   useEffect(() => {
//     // Set the initial card width based on the dimensions of the PersonalInfo component
//     if (cardRef.current) {
//       const { offsetWidth } = cardRef.current;
//       setCardSize({ width: offsetWidth + 100, height: "auto" });
//     }
//   }, [page]);

//   const nextPage = () => setPage(page + 1);
//   const prevPage = () => setPage(page - 1);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-flex flex-col items-center justify-center">
//       {/* Header Centered Above the Card */}
//       <div className="w-full text-center mb-10">
//         <h1 className="text-3xl font-bold mt-5 text-white">Create New Account</h1>
//       </div>

//       {/* Card with adjustable height and max height */}
//       <div
//         ref={cardRef}
//         className="bg-white shadow-lg w-full max-w-[910px] p-8 mt-0 relative"
//         style={{ 
//           width: cardSize.width, 
//           height: cardSize.height, 
//           maxHeight: "700px",  // max height for the card
//           overflowY: "auto"    // adds scrolling if content exceeds max height
//         }}
//       >
//         {/* Stepper Navigation */}
//         <div className="absolute top-0 left-0 w-full flex border-b-2 border-gray-300">
//           <div
//             className={`flex-1 cursor-pointer text-center py-2 ${
//               page === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setPage(1)}
//           >
//             1 Your Profile
//           </div>
//           <div
//             className={`flex-1 cursor-pointer text-center py-2 ${
//               page === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setPage(2)}
//           >
//             2 Business Information
//           </div>
//           <div
//             className={`flex-1 cursor-pointer text-center py-2 ${
//               page === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setPage(3)}
//           >
//             3 Additional Users
//           </div>
//         </div>

//         {/* Page Content */}
//         <div className="text-center mb-8 pt-16">
//           {page === 1 && <PersonalInfo nextPage={nextPage} />}
//           {page === 2 && <BusinessProfile nextPage={nextPage} prevPage={prevPage} />}
//           {page === 3 && <AdditionalUser prevPage={prevPage} />}
//         </div>

//         {/* Footer Navigation */}
//         <div className="flex justify-between items-center mt-6">
//           <button className="text-blue-500">Back to Login</button>
//           <div className="flex gap-4">
//             {page > 1 && (
//               <button
//                 onClick={prevPage}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
//               >
//                 Previous Step
//               </button>
//             )}
//             {page < 3 && (
//               <button
//                 onClick={nextPage}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Next Step
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Contact Us Text at Top Right */}
//       <div className="absolute top-0 right-0 p-6 mr-80 mt-2 text-white">
//         <p>Contact Us</p>
//       </div>
//     </div>
//   );
// }

// export default MultiPageForm;



import React, { useState, useEffect, useRef } from "react";
import PersonalInfo from "./PersonalInfo";
import BusinessProfile from "./BusinessProfile";
import AdditionalUser from "./AdditionalUser";

function MultiPageForm() {
  const [page, setPage] = useState(1);
  const [cardSize, setCardSize] = useState({ width: "auto", height: "auto" });
  const cardRef = useRef(null);

  useEffect(() => {
    // Set the initial card width based on the dimensions of the PersonalInfo component
    if (cardRef.current) {
      const { offsetWidth } = cardRef.current;
      setCardSize({ width: offsetWidth + 100, height: "auto" });
    }
  }, [page]);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-flex flex-col items-center justify-center">
      {/* Header Centered Above the Card */}
      <div className="w-full text-center mb-10">
        <h1 className="text-3xl font-bold mt-5 text-white">Create New Account</h1>
      </div>

      {/* Card with adjustable height and max height */}
      <div
        ref={cardRef}
        className="bg-white shadow-lg w-full max-w-[910px] p-8 mt-0 relative"
        style={{
          width: cardSize.width,
          height: cardSize.height,
          maxHeight: "700px", // max height for the card
          overflowY: "auto",   // adds scrolling if content exceeds max height
        }}
      >
        {/* Stepper Navigation */}
        <div className="absolute top-0 left-0 w-full flex border-b-2 border-gray-300">
          <div
            className={`flex-1 cursor-pointer text-center py-2 ${
              page === 1 ? "bg-blue-500 text-white rounded-r-2xl" : "bg-gray-200"
            }`}
            onClick={() => setPage(1)}
          >
            1 Your Profile
          </div>
          <div
            className={`flex-1 cursor-pointer text-center py-2 ${
              page === 2 ? "bg-blue-500 text-white rounded-r-2xl" : "bg-gray-200"
            }`}
            onClick={() => setPage(2)}
          >
            2 Business Information
          </div>
          <div
            className={`flex-1 cursor-pointer text-center py-2 ${
              page === 3 ? "bg-blue-500 text-white rounded-r-2xl" : "bg-gray-200"
            }`}
            onClick={() => setPage(3)}
          >
            3 Additional Users
          </div>
        </div>

        {/* Page Content */}
        <div className="text-center mb-8 pt-16">
          {page === 1 && <PersonalInfo nextPage={nextPage} />}
          {page === 2 && <BusinessProfile nextPage={nextPage} prevPage={prevPage} />}
          {page === 3 && <AdditionalUser prevPage={prevPage} />}
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button className="text-blue-500">Back to Login</button>
          <div className="flex gap-4">
            {page > 1 && (
              <button
                onClick={prevPage}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Previous Step
              </button>
            )}
            {page < 3 && (
              <button
                onClick={nextPage}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Contact Us Text at Top Right */}
      <div className="absolute top-0 right-0 p-6 mr-80 mt-2 text-white">
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default MultiPageForm;
