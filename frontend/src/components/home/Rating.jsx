import React from "react"
import PropTypes from "prop-types"
import makeStyles from "@material-ui/core/styles/makeStyles"

import fullStar from "../../images/full-star.svg"
import halfStar from "../../images/half-star.svg"
import empty from "../../images/empty-star.svg"

const useStyles = makeStyles(theme => ({
  size: {
    height: "2rem",
    width: "2rem",
  },
}))

const Rating = ({ number }) => {
  const classes = useStyles()
  const diff = 5 - Math.ceil(number)
  return (
    <>
      {[...Array(Math.floor(number))].map((e, i) => {
        console.log(e)
        return (
          <img
            src={fullStar}
            alt="full start"
            key={i}
            className={classes.size}
          />
        )
      })}
      {number % 1 !== 0 && (
        <img src={halfStar} alt="half star" className={classes.size} />
      )}
      {[...Array(diff)].map((e, i) => (
        <img src={empty} alt="empty star" key={i} className={classes.size} />
      ))}
    </>
  )
}

Rating.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Rating
