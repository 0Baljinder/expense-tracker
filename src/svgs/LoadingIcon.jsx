import * as React from "react"
const LoadingIcon = (props) => (
    <div className="loading-state">
  <svg className="loading-icon"
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#434343"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v3m0 15v-3m-7.794-1.5L6.804 15M21 12h-3m-1.5 7.794L15 17.196M3 12h3m1.5-7.794L9 6.804m-1.5 12.99L9 17.196m10.794-.696L17.196 15M4.206 7.5 6.804 9"
    />
  </svg>
  </div>
)
export default LoadingIcon;
