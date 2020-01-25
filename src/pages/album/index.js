import React, { useState, useEffect } from "react"
import PropType from "prop-types"
import Card from "antd/es/card"
import Title from "antd/es/typography/Title"
import styles from "./styles.module.css"
import Menu from "antd/es/menu"
import SizedBox from "../../components/SizedBox/SizedBox"
import { Divider } from "antd"
import { Row, Col } from "antd/es/grid"
import TrackComponent from "../../components/Track/TrackComponent"
import ClientLayout from "../../layouts/client_layout"
import { getAlbumsService } from "../../services/album_services"
import AlbumComponent from "../../components/Album/AlbumComponent"
import Pagination from "antd/es/pagination"

const AlbumPage = props => {

    const [selectedType, setSelectedType] = useState("new")
    const [albums, setAlbums] = useState([])
    const [pagination, setPaginations] = useState({page:1})

    const types = [
        {
            label: "New",
            key: "new"
        },
        {
            label: "Hot",
            key: "hot"
        }
    ]

    const syncAlbums = (type = "new", pagination = {page:1}) => {
        getAlbumsService(type, pagination)
            .then(resp => {
                const response = resp.data
                const albums = response
                setAlbums(albums)
            })
    }

    const onTypesChanged = (newKey) => {
        setSelectedType(newKey)
    }

    const onPaginationChanged = (page, size) => {
        setPaginations({  page })
    }

    useEffect(() => {
        syncAlbums(selectedType, pagination)
    }, [selectedType, pagination])

    return (
        <ClientLayout>
            <Card>
                <div className={styles.albumsCardHeader}>
                    <Title level={4}>Album </Title>
                    <SizedBox width={"10px"} />
                    <Menu
                        onClick={param => onTypesChanged(param.key)}
                        defaultSelectedKeys={"new"}
                        mode={"horizontal"}>

                        {types.map(type => {
                            return (
                                <Menu.Item key={type.key} children={type.label} />
                            )
                        })}
                    </Menu>
                </div>

                <Divider />

                <Row gutter={[24,10]} className={styles.recommendationRow}>

                    {albums.map(album => {
                        return (
                            <Col sm={12} md={6}>
                                <AlbumComponent album={album} />
                            </Col>
                        )
                    })}

                </Row>


                <Row gutter={24} className={styles.paginationRow}>

                    <Pagination
                        total={100}
                        current={pagination.page}
                        pageSize={10}
                        onChange={onPaginationChanged}
                    />

                </Row>
            </Card>
        </ClientLayout>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
AlbumPage.propTypes = {
    availableCategories: PropType.array,
    selectedCategory: PropType.any,
    onCategoryChanged: PropType.func,
    tracks: PropType.array
}

// default props is what set default to props
// if no defaultProps , its value must be undefined
AlbumPage.defaultProps = {
    availableCategories: [],
    tracks: []
}

export default AlbumPage