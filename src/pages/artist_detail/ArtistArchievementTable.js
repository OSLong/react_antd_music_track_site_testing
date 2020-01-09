import React from 'react'
import PropType from 'prop-types';
import Table from "antd/es/table"
import Avatar from 'antd/es/avatar';
import TrackPlayerComponent from '../../components/Player/TrackPlayer';

const ArtistArchievementTableComponent = (props) => {

    const { tableData, type } = props

    let columns = []

    if (type === "song") {
        columns = [
            {
                key: "key",
                dataIndex: "key",
                title: "#",
                width: 20,
                render: key => key + 1
            },
            {
                key: "imageUrl",
                dataIndex: "imageUrl",
                title: "",
                width: 100,
                render: (link) => (
                    <Avatar
                        src={link}
                        shape="square"
                        size="large" />
                )
            },
            {
                key: "song",
                dataIndex: "name",
                title: "Song",
                width:"150px"
            },
            {
                key: "artist",
                dataIndex: "artist",
                title: "Artist",
                width:"150px"
            },
            {
                key:"action",
                title: "Action",
                fixed: "right",
                width:"50px",
                render:(uselessString, track) => <TrackPlayerComponent track={track} />
            }
        ]
    }
    else {
        columns = [
            {
                key: "key",
                dataIndex: "key",
                title: "#",
                width: 20,
                render: key => key + 1
            },
            {
                key: "imageUrl",
                dataIndex: "imageUrl",
                title: "",
                width: 100,
                render: (link) => (
                    <Avatar
                        src={link}
                        shape="square"
                        size="large" />
                )
            },
            {
                key: "album",
                dataIndex: "name",
                title: "Album",
                width:"150px"
            },
            {
                key: "artist",
                dataIndex: "artist",
                title: "Artist",
                width:"150px"
            }
        ]
    }


    return (
        <Table
            columns={columns}
            dataSource={tableData}
            scroll={{x: "100%"}}
        />
    )
}

ArtistArchievementTableComponent.propTypes = {
    tableData: PropType.array,
    type: PropType.string
}

ArtistArchievementTableComponent.defaultProps = {
    tableData: []
}

export default ArtistArchievementTableComponent