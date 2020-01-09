import React from 'react';
import PropType from "prop-types"
import { Button } from 'antd';
import Modal from "antd/es/modal"

const TrackPlayerComponent = (props) => {
    const { track } = props
    const trackLink = track.trackUrl
    console.log("render paly ", trackLink)

    const onPlayClick = () => {
        Modal.info({
            centered:true,
            content: (
                <audio style={{width:"100%"}} preload="none" autoPlay controls>
                    <source src={trackLink} />
                </audio>
            ),
            destroyOnClose: true,
            icon: null,
            title: "Song : " + track.name,
            okText: "Close"
        })
    }

    const onDownloadClick = () => {
        const element = document.createElement("a")
        element.href=trackLink
        element.download=track.name
        element.target="_blank"
        element.click()
    }

    return (
        <span>
            <Button onClick={onPlayClick}>Play</Button>
            <Button onClick={onDownloadClick}>Download</Button>
        </span>
    )
}

TrackPlayerComponent.propTypes = {
    track: PropType.object
}

TrackPlayerComponent.defaultProps = {
    track: {}
}

export default TrackPlayerComponent