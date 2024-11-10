// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",    // Scans all JS, JSX, TS, and TSX files in the src folder
//     "./src/components/Multipages.js"            // Includes the main HTML file if you are using Tailwind classes here as well
//   ],
//   theme: {
//     extend: {
//       // Add custom colors, spacing, etc., here if needed
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
  
// }




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",       // Scans all JS, JSX, TS, and TSX files in the src folder
    "./src/components/Multipages.js"     // Includes any specific component files you want to scan
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Custom background image path
        'custom-bg': "url('/src/assets/images/bg.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
