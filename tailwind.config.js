/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: "#E4F2EF",
          soft: "#F1F7F3",
          border: "#E3EBE7",
        },
        teal: {
          brand: "#438E88",
          hover: "#32766F",
          soft: "#E4F2EF",
        },
        heading: "#253C42",
        body: "#62747A",
        background: {
          DEFAULT: "#0C1016",
          secondary: "#10151D",
          surface: "#13171D",
          hover: "#19212A",
          card: "#13171D",
          elevated: "#19212A",
        },
        surface: {
          DEFAULT: "#13171D",
          hover: "#19212A",
          elevated: "#1A212B",
        },
        accent: {
          DEFAULT: "#069DAD",
          hover: "#10B6C5",
          muted: "rgba(6, 157, 173, 0.15)",
          glow: "rgba(6, 157, 173, 0.25)",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          secondary: "#738CAC",
          muted: "#6B809A",
        },
        border: {
          DEFAULT: "#252B34",
          subtle: "#252B34",
          hover: "#069DAD",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
