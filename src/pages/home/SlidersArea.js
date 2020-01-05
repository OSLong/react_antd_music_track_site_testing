import React from "react"
import PropTypes from "prop-type"
import styles from "./styles.module.css"
import Carousel from "antd/es/carousel"

const SlidersAreaComponent = (props ) => {
    const { sliders , onSliderClick } = props

    return (
        <Carousel className={styles.slider}>
            {
                sliders.map(slider => {
                    return (
                        <div className={styles.sliderItem}>
                            <div
                                onClick={() => onSliderClick(slider)}
                                className={styles.sliderItemImage}
                                style={{ backgroundImage: `url(${slider.imageUrl})` }}
                            />
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

SlidersAreaComponent.propTypes = {
    sliders: PropTypes.array,
    onSliderClick: PropTypes.func
}

export default SlidersAreaComponent