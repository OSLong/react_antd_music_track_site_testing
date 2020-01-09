import React from "react"
import PropTypes from "prop-types"
import Title from "antd/es/typography/Title"
import Text from "antd/es/typography/Text"
import { Divider } from "antd"
import Card from "antd/es/card"
import { Row, Col } from "antd/es/grid"
import ClientLayout from "../../layouts/client_layout"
import Descriptions from "antd/es/descriptions"
import List from "antd/es/list"
// import styles from "./styles.module.css"
import Avatar from "antd/es/avatar"
import SizedBox from "../../components/SizedBox/SizedBox"

const { Item } = List
const { Meta } = Item

const ArtistInfoAreaComponent = (props) => {
    const { artist } = props

    // Simulate Delay get artist from server
    // so default artist is undefined
    // when undefined return Loading...
    if (!artist) {
        return <h1>Loading ...</h1>
    }
    return (
        // these style make avatar and info responsive on phone
        <Row style={{display: "flex",flexWrap:"wrap", alignItems:"center",justifyContent:"center",textAlign:"centter"}}>
            <Col sm={24} style={{width:"fit-content"}}>
                <Avatar
                    src={artist.imageUrl}
                    size={250}
                />
            </Col>

            <Col sm={24} md={12} style={{flexGrow:1, textAlign:"center"}}>

                <Descriptions
                    bordered
                    title={<Title>{artist.name}</Title>}
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official">$60.00</Descriptions.Item>

                </Descriptions>
            </Col>

        </Row>
    )

}

// Prop type use to make IDE recognize what accept api
// from component
ArtistInfoAreaComponent.propTypes = {
    artist: PropTypes.object
}

// default props is what set default to props
// if no defaultProps , its value must be undefined
ArtistInfoAreaComponent.defaultProps = {

}

export default ArtistInfoAreaComponent