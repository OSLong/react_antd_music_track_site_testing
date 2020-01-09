import React from "react"
import PropType from "prop-types"
import Card from "antd/es/card"
import Avatar from "antd/es/avatar"
import { Link } from "react-router-dom"

const { Meta } = Card

const ArtistComponent = props => {
    const { artist } = props

    if (artist === undefined) {
        return <></>
    }

    return (
        <Card
            style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
            cover={
                <Avatar
                    shape={"circle"}
                    size={150}
                    src={artist.imageUrl} />
            }>

            <Meta
                style={{ textAlign: "center" }}
                title={(<Link to={`/artist/${artist.key}`}>{artist.name}</Link>)}
                description={`${artist.total_songs} songs`}
            />

        </Card>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
ArtistComponent.propTypes = {
    artist: PropType.any
}
export default ArtistComponent