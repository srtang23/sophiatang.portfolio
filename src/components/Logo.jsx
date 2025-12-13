import { Link } from 'react-router-dom'

function Logo({ className = '' }) {
  return (
    <Link to="/" className={`logo-link ${className}`} aria-label="Sophia Tang Home">
      <svg
        className="logo-svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(20, 20)">
          {/* 5-petal flower outline - each petal is an ellipse rotated around center */}
          <ellipse
            cx="0"
            cy="-11"
            rx="4.5"
            ry="7"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse
            cx="0"
            cy="-11"
            rx="4.5"
            ry="7"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(72)"
          />
          <ellipse
            cx="0"
            cy="-11"
            rx="4.5"
            ry="7"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(144)"
          />
          <ellipse
            cx="0"
            cy="-11"
            rx="4.5"
            ry="7"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(216)"
          />
          <ellipse
            cx="0"
            cy="-11"
            rx="4.5"
            ry="7"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(288)"
          />
        </g>
        {/* Center circle for S */}
        <circle
          cx="20"
          cy="20"
          r="5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Letter S in the center */}
        <text
          x="20"
          y="24"
          textAnchor="middle"
          fontSize="13"
          fontFamily="'Montserrat', sans-serif"
          fontWeight="700"
          fill="currentColor"
        >
          S
        </text>
      </svg>
    </Link>
  )
}

export default Logo
