'use client'

interface LogoProps {
  className?: string
}

export function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Palm tree shape */}
      <path
        d="M50 85C50 85 65 55 65 40C65 25 50 15 50 15C50 15 35 25 35 40C35 55 50 85 50 85Z"
        fill="currentColor"
        className="text-primary-600"
      />
      {/* Circular base */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="6"
        className="text-primary-600"
        fill="none"
      />
    </svg>
  )
} 