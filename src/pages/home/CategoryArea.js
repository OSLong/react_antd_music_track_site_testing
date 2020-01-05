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

const CategoryAreaComponent = props => {
    const {
        availableCategories, selectedCategory, onCategoryChanged,
        tracks
    } = props

    console.log("render catgro", selectedCategory)

    return (
        <Card>
            <div className={styles.categoryCardHeader}>
                <Title level={4}>Category </Title>
                <SizedBox width={"10px"} />
                <Menu 
                onClick={param => onCategoryChanged(param.key)}
                selectedKeys={selectedCategory} 
                mode={"horizontal"}>

                    {availableCategories.map(category => {
                        return (
                            <Menu.Item key={category.key} children={category.label} />
                        )
                    })}
                </Menu>
            </div>

            <Divider />

            <Row gutter={24} className={styles.recommendationRow}>

                {tracks.map(track => {
                    return (
                        <Col sm={12} md={6}>
                            <TrackComponent track={track} />
                        </Col>
                    )
                })}

            </Row>

        </Card>
    )
}

CategoryAreaComponent.propTypes = {
    availableCategories: PropType.array,
    selectedCategory: PropType.any,
    onCategoryChanged: PropType.func,
    tracks: PropType.array
}

CategoryAreaComponent.defaultProps = {
    availableCategories: [],
    tracks: []
}

export default CategoryAreaComponent