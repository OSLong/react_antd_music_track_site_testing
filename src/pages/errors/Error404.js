import React from "react"
import PropType from "prop-types"
import ClientLayout from "../../layouts/client_layout"

const Error404Page  = props => {
    return (
        <ClientLayout pageKey="">
            <h1>Page Not Found</h1>
        </ClientLayout>
    )
}

export default Error404Page