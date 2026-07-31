import * as React from "react"
const WalletSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    className="icon flat-color"
    data-name="Flat Color"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M11.38 3.39 6.74 10H4.88A1 1 0 0 1 4 9.46a1 1 0 0 1 .06-1l4.21-6A1 1 0 0 1 8.91 2a1 1 0 0 1 .75.16Zm8.19 2.23-4.91-3.44a1 1 0 0 0-1.39.25L12.19 4 8 10h9.25a1 1 0 0 0 .75-.43L19.82 7a1 1 0 0 0-.25-1.39Z"
      style={{
        fill: "#00498d",
      }}
    />
    <rect
      width={20}
      height={14}
      x={2}
      y={8}
      rx={2}
      style={{
        fill: "#0073ba",
      }}
    />
    <circle
      cx={18}
      cy={15}
      r={1.5}
      data-name="secondary"
      style={{
        fill: "#00498d",
      }}
    />
  </svg>
)
export default WalletSVG;
