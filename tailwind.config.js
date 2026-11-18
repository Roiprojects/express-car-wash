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
        cream: {
          DEFAULT: "#FFF9EF",
          bg: "#FFF9EF",
          secondary: "#F5EBDD",
          card: "#FFFFFF",
          border: "#DDD6CB",
        },
        charcoal: {
          DEFAULT: "#202C2C",
          heading: "#202C2C",
          body: "#445452",
          muted: "#52615E",
        },
        teal: {
          DEFAULT: "#087F75",
          brand: "#087F75",
          hover: "#06665F",
          soft: "#E8F5F3",
        },
        // Backward compatibility mappings
        mint: {
          DEFAULT: "#F5EBDD",
          soft: "#F5EBDD",
          border: "#DDD6CB",
        },
        heading: "#202C2C",
        body: "#445452",
        muted: "#52615E",
        background: {
          DEFAULT: "#FFF9EF",
          secondary: "#F5EBDD",
          surface: "#FFFFFF",
          hover: "#F5EBDD",
          card: "#FFFFFF",
          elevated: "#FFFFFF",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#F5EBDD",
          elevated: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#087F75",
          hover: "#06665F",
          muted: "rgba(8, 127, 117, 0.12)",
          glow: "rgba(8, 127, 117, 0.2)",
        },
        foreground: {
          DEFAULT: "#202C2C",
          secondary: "#445452",
          muted: "#52615E",
        },
        border: {
          DEFAULT: "#DDD6CB",
          subtle: "#DDD6CB",
          hover: "#087F75",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
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
