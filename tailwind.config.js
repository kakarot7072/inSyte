
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add other directories as necessary
  ],
  theme: {
    extend: {
      animation: {
        popOut: 'popOut 2s ease-out forwards', // Apply pop-out animation
      },
      keyframes: {
        popOut: {
          '0%': {
            transform: 'scale(0)', // Start small, fully compressed
            opacity: '1', // Fully visible at the start
          },
          
          '50%': {
            transform: 'scale(0.5)', // Grows slightly larger (midway point)
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)translateY(-50px)', // End at normal size
            opacity: '0', // Fades out
          },
        },
      },
    },
  },
  plugins: [],
}
