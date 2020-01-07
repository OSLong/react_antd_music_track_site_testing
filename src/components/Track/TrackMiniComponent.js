import React from "react"
import PropType from "prop-types"
import Card from "antd/es/card"
import List from "antd/es/list"
import Avatar from "antd/es/avatar"

const { Item } = List
const { Meta } = Item

const TrackMiniComponent = props => {
    const { track } = props

    if( track === undefined ) {
        return <></>
    }

    return (
        <Item>
            <Meta
                avatar={<Avatar shape={"square"} size={"large"} src={track.imageUrl} />}
                title={track.name}
                description={track.artist}
            />
        </Item>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
TrackMiniComponent.propTypes = {
    track: PropType.any
}
export default TrackMiniComponent