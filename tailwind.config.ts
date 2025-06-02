import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced Divine Cyberpunk colors
				cyber: {
					'dark': '#0B0B0F',
					'black': '#000000',
					'blue': '#3b82f6',
					'purple': '#8b45ff',
					'pink': '#a855f7',
					'yellow': '#fbbf24',
					'green': '#10b981',
					'red': '#ef4444',
				},
				// New Divine color palette
				divine: {
					'deep': '#1e1b4b',
					'purple': '#8b45ff',
					'blue': '#3b82f6',
					'indigo': '#6366f1',
					'violet': '#a855f7',
					'pink': '#ec4899',
					'gold': '#f59e0b',
					'silver': '#e5e7eb',
					'crystal': '#f3f4f6',
				}
			},
			fontFamily: {
				'cyberpunk': ['Orbitron', 'sans-serif'],
				'mono': ['Share Tech Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Enhanced divine animations
				'pulse-divine': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(139, 69, 255, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(139, 69, 255, 0.8), 0 0 80px rgba(59, 130, 246, 0.6)',
						transform: 'scale(1.02)'
					}
				},
				'shimmer-divine': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				'float-divine': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0) scale(1)',
						opacity: '0.3'
					},
					'33%': { 
						transform: 'translateY(-20px) translateX(10px) scale(1.2)',
						opacity: '0.8'
					},
					'66%': { 
						transform: 'translateY(-10px) translateX(-5px) scale(0.8)',
						opacity: '0.6'
					}
				},
				'divine-glow': {
					'0%, 100%': { 
						filter: 'hue-rotate(0deg) saturate(1.2) brightness(1)',
						transform: 'scale(1)'
					},
					'50%': { 
						filter: 'hue-rotate(30deg) saturate(1.5) brightness(1.1)',
						transform: 'scale(1.01)'
					}
				},
				'divine-matrix-rain': {
					'0%': { 
						top: '-50%',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': { 
						top: '110%',
						opacity: '0'
					}
				},
				'divine-glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-3px, 3px)' },
					'40%': { transform: 'translate(-3px, -3px)' },
					'60%': { transform: 'translate(3px, 3px)' },
					'80%': { transform: 'translate(3px, -3px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-divine': 'pulse-divine 3s ease-in-out infinite',
				'shimmer-divine': 'shimmer-divine 3s ease-in-out infinite',
				'float-divine': 'float-divine 6s ease-in-out infinite',
				'divine-glow': 'divine-glow 8s ease-in-out infinite alternate',
				'divine-matrix-rain': 'divine-matrix-rain 25s linear infinite',
				'divine-glitch': 'divine-glitch 1s ease-in-out infinite'
			},
			backgroundImage: {
				'divine-gradient': 'linear-gradient(45deg, #8b45ff, #3b82f6, #a855f7, #8b45ff)',
				'divine-shimmer': 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%)',
			},
			backdropBlur: {
				'divine': '15px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
