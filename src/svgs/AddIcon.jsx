import * as React from "react"
const AddIcon = (props) => (
    <div className="add-exp-form">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    viewBox="0 0 24 24"
    {...props}
  >
    <title />
    <g
      fill="none"
      stroke="#fdfeff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      data-name="add"
    >
      <path d="M12 19V5M5 12h14" />
    </g>
  </svg>
  Add Expense
  </div>
)
export default AddIcon
