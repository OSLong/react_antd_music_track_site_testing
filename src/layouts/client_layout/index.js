import React from "react"
import Layout from "antd/es/layout"
import Avatar from "antd/es/avatar"
import Menu from "antd/es/menu"
import styles from "./styles.module.css"
import Search from "antd/es/input/Search"
import PropType from "prop-types"
import { useHistory } from "react-router"

const { Header, Content } = Layout
const LOGO_URL = "https://via.placeholder.com/468x60?text=Logo"


const ClientLayout = props => {
    const { pageKey } = props

    // Get History from router 
    // so can push without use link
    const routeHistory = useHistory()

    // set menu as array 
    // easy on render
    const pageMenus = [
        {
            link: "/",
            label: "Home",
            key: "home"
        },
        {
            link: "/album",
            label: "Album",
            key: "album"
        },
        {
            link: "/about",
            label: "About",
            key: "about"
        },

    ]

    // when ( home , album , about )  click
    // change page
    const onMenuClick = (menu) => {
        routeHistory.push(menu.link)
    }


    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.logo} >
                    <Avatar
                        src={LOGO_URL}
                    />
                </div>

                {/* Page Center , decorated in style */}
                <div className={styles.headerCenterArea}>
                    <Menu
                        className={styles.menu}
                        mode="horizontal"
                        selectedKeys={pageKey}
                        style={{ lineHeight: '64px' }}
                    >
                        {
                            pageMenus.map(menu => {
                                return (
                                    <Menu.Item
                                        onClick={() => onMenuClick(menu)}
                                        key={menu.key}
                                        children={menu.label} />
                                )
                            })
                        }
                    </Menu>
                </div>

                <div className={styles.headerRightArea}>
                    <Search
                        placeholder={"Search"}
                    />
                </div>
            </Header>

            {/* Page Content is the children of props , render page content it here */}
            <Content style={{padding:"24px"}}>
                {props.children}
            </Content>
        </Layout>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
ClientLayout.propTypes = {
    pageKey: PropType.any
}

export default ClientLayout