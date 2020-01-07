import React, { useState, useEffect } from "react"
import { useRouteMatch } from "react-router"

function ArtistDetailPage(props){
    const routeMatch = useRouteMatch()
    const { id } = routeMatch.params

    const [ artist , setArtisan ] = useState()

    useEffect(()=>{
        
    },[id])

    return (
        <h1>detail: {id}</h1>
    )
}

export default ArtistDetailPage