import React from "react"
import PropType from "prop-types"

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

SizedBox.propTypes = {
    height: PropType.string,
    width: PropType.string,
}

SizedBox.defaultProps = {
    height: "5px",
    width: "5px"
}

export default SizedBox