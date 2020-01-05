import React from "react"
import PropTypes from "prop-types"
import Title from "antd/es/typography/Title"
import Text from "antd/es/typography/Text"
import { Divider } from "antd"
import Card from "antd/es/card"
import { Row, Col } from "antd/es/grid"
import TrackComponent from "../../components/Track/TrackComponent"
import styles from "./styles.module.css"


const RecommendationAreaComponent = (props) => {
    const { tracks } = props
    return (
        <Card>
            <Title level={4}>Recommendation</Title>
            <Divider />
            <Row gutter={24} className={styles.recommendationRow}>

                {tracks.map(track => {
                    return (
                        <Col sm={12} md={6}>
                            <TrackComponent track={track} />
                        </Col>
                    )
                })}

            </Row>
        </Card>
    )
  
}

// Prop type use to make IDE recognize what accept api
// from component
RecommendationAreaComponent.propTypes = {
    tracks: PropTypes.array
}

// default props is what set default to props
// if no defaultProps , its value must be undefined
RecommendationAreaComponent.defaultProps = {
    tracks: []
}

export default RecommendationAreaComponent