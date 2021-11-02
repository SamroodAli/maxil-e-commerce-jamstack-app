import React from "react"
import PropTypes from "prop-types"

function Icon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17">
      <g
        stroke={color || "#708670"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="translate(-47 -148)"
      >
        <rect
          width="20"
          height="15"
          fill="rgba(0,0,0,0)"
          rx="2"
          transform="translate(48 149)"
        ></rect>
        <path fill="none" d="M50.984 151.833l7.012 5.454 7.012-5.454"></path>
      </g>
    </svg>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
}

export default Icon
