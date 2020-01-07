import React from "react"
import PropType from "prop-types"
import Card from "antd/es/card"
import Avatar from "antd/es/avatar"

const { Meta } = Card

const TrackComponent = props => {
    const { track } = props

    if( track === undefined ) {
        return <></>
    }

    return (
        <Card
        style={{display:"flex",alignItems:"center", flexDirection:"column"}}
         cover={<Avatar shape={"square"} size={150} src={track.imageUrl}/>}>
            <Meta description={track.name} />
        </Card>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
TrackComponent.propTypes = {
    track: PropType.any
}
export default TrackComponent