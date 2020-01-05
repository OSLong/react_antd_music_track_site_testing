import React from "react"
import PropType from "prop-types"
import Card from "antd/es/card"

const { Meta } = Card

const TrackComponent = props => {
    const { track } = props

    if( track === undefined ) {
        return <></>
    }

    return (
        <Card cover={<img src={track.imageUrl}/>}>
            <Meta description={track.name} />
        </Card>
    )
}

TrackComponent.propTypes = {
    track: PropType.any
}
export default TrackComponent