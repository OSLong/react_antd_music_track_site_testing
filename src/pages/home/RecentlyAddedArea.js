import React from "react"
import PropType from "prop-types"
import { Row, Col } from "antd/es/grid"
import Card from "antd/es/card"
import Typography from "antd/es/typography"
import Divider from "antd/es/divider"
import styles from "./styles.module.css"
import TrackMiniComponent from "../../components/Track/TrackMiniComponent"


const { Title } = Typography

function RecentlyAddedAreaComponent(props) {
    const { tracks } = props
    return (
        <Card>
            <div className={""}>
                <Title level={4}>Recently Added </Title>
            </div>

            <Divider />

            <Row gutter={24} className={""}>

                {tracks.map(track => {
                    return (
                        <Col sm={12} md={8}>
                            <TrackMiniComponent
                                track={track}
                            />
                        </Col>
                    )
                })}

            </Row>

        </Card>
    )
}

RecentlyAddedAreaComponent.propTypes = {
    tracks: PropType.array
}

RecentlyAddedAreaComponent.defaultProps = {
    tracks: []
}

export default RecentlyAddedAreaComponent