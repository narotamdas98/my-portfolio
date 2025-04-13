/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // Deep blue/navy
        "primary-dark": "#1E40AF",  // blue-800
        accent: "#F97316",          // orange-500
        bg: "#F9FAFB",        // Light gray
        text: "#1F2937",      // Almost-black
        muted: "#94A3B8",     // Gray-blue
        hover: "#1D4ED8",     // Blue hover effect
      },

      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};