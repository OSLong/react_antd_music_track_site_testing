import React from "react"
import PropTypes from "prop-types"
import Title from "antd/es/typography/Title"
import Text from "antd/es/typography/Text"
import { Divider } from "antd"
import Card from "antd/es/card"
import { Row, Col } from "antd/es/grid"
import TrackComponent from "../../components/Track/TrackComponent"
import styles from "./styles.module.css"

const { Meta } = Card

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
    return (
        <Card>
            <Meta
                description={
                    <>
                        <Divider />
                        <h1>Description</h1>
                    </>
                }
                title={"Recommendation"} >
                <h1>Description</h1>
            </Meta>
        </Card>
    )
    return (
        <div>
            <Title children={"Recommendation"} />
            <Divider />
            <h1>Recommendation Area</h1>
        </div>
    )
}

RecommendationAreaComponent.propTypes = {
    tracks: PropTypes.array
}

RecommendationAreaComponent.defaultProps = {
    tracks: []
}

export default RecommendationAreaComponent