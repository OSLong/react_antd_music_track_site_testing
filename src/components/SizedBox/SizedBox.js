import React from "react"
import PropType from "prop-types"

// use for leave space between component
const SizedBox = (props) => {
    const {  height, width} =props
    return (
        <div
            style={{
                width,
                height
            }}
        />
    )
}

// Prop type use to make IDE recognize what accept api
// from component
SizedBox.propTypes = {
    height: PropType.string,
    width: PropType.string,
}

// default props is what set default to props
// if no defaultProps , its value must be undefined
SizedBox.defaultProps = {
    height: "5px",
    width: "5px"
}

export default SizedBox