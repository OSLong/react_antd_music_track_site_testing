import React from "react"
import PropType from "prop-types"
import Card from "antd/es/card"
import Avatar from "antd/es/avatar"
import TrackPlayerComponent from "../Player/TrackPlayer"
import Typography from "antd/es/typography"

const { Meta } = Card
const { Title, Text } = Typography

const AlbumComponent = props => {
    const { album } = props

    if( album === undefined ) {
        return <></>
    }

    return (
        <Card
            cover={
                // Use for make avatar image to center
            <Avatar 
                style={{margin:"auto"}}
                src={album.imageUrl}
                size={150}
                shape={"square"} />
            }
        >
            <Meta
                title={<Text level={6} children={album.name} />}
                description={`${album.total_songs} songs`}
            />
        </Card>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
AlbumComponent.propTypes = {
    album: PropType.any
}
export default AlbumComponent