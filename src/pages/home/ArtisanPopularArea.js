import React from 'react';
import PropTypes from 'prop-types'
import { Row, Col } from "antd/es/grid"
import Card from "antd/es/card"
import Typography from "antd/es/typography"
import Divider from "antd/es/divider"
import styles from "./styles.module.css"
import TrackMiniComponent from "../../components/Track/TrackMiniComponent"
import ArtistComponent from '../../components/Artist/ArtistComponent';


const { Title } = Typography

function ArtisanPopularAreaComponent (props){
    const { artists } = props
    return (
        <Card>
            <div className={""}>
                <Title level={4}> Artist</Title>
            </div>

            <Divider />

            <Row gutter={24} className={styles.popularArtistsRow}>

                {artists.map(artist => {
                    return (
                        <Col sm={12} md={6} style={{width:"fit-content"}}>
                            <ArtistComponent
                                artist={artist}
                            />
                        </Col>
                    )
                })}

            </Row>

        </Card>
    )
}

ArtisanPopularAreaComponent.propTypes = {
    artists: PropTypes.array
}

ArtisanPopularAreaComponent.defaultProps = {
    artists:[]
}

export default ArtisanPopularAreaComponent