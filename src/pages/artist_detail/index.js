import React, { useState, useEffect } from "react"
import { useRouteMatch } from "react-router"
import ClientLayout from "../../layouts/client_layout"
import ArtistInfoAreaComponent from "./ArtistInfoArea"
import { getArtistByIDService } from "../../services/artist_service"
import styles from "./styles.module.css"
import Menu from "antd/es/menu"
import ArtistArchievementTableComponent from "./ArtistArchievementTable"
import SizedBox from "../../components/SizedBox/SizedBox"
import { getTracksByArtistService } from "../../services/tracks_service"
import { getAlbumsByArtistService } from "../../services/album_services"

function ArtistDetailPage(props) {
    const routeMatch = useRouteMatch()
    const { id } = routeMatch.params

    const [artist, setArtist] = useState()

    const [artistArchievementType, setArtistArchievementType] = useState("song")
    const [artistSongs, setArtistSong] = useState([])
    const [artistAlbums, setArtistAlbums] = useState([])

    const syncArtistSongs = () => {
        getTracksByArtistService(artist.name)
            .then(response => {
                const tracks = response.data
                setArtistSong(tracks)
            })
    }

    const syncArtistAlbum = () => {
        getAlbumsByArtistService(artist.name)
            .then(response => {
                const albums = response.data
                setArtistAlbums(albums)
            })
    }

    useEffect(() => {
        getArtistByIDService(id)
            .then(response => {
                const artist = response.data
                setArtist(artist)
            })
    }, [id])

    useEffect(() => {
        if(!artist ){
            return
        }
        if (artistArchievementType === "song") {
            syncArtistSongs()
        } else {
            syncArtistAlbum()
        }
    }, [artistArchievementType,artist])

    return (
        <ClientLayout>
            <div className={styles.artistInfoContainer}>
                <ArtistInfoAreaComponent artist={artist} />
            </div>

            <SizedBox />

            <Menu
                selectedKeys={artistArchievementType}
                mode={"horizontal"}
                onClick={(params) => setArtistArchievementType(params.key)}
            >
                <Menu.Item key="song">Song</Menu.Item>
                <Menu.Item key="album">Album</Menu.Item>
            </Menu>

            <SizedBox />

            <ArtistArchievementTableComponent
                tableData={artistArchievementType ==="song"?
                artistSongs:artistAlbums
            }
            type={artistArchievementType}
            />

        </ClientLayout>
    )
}

export default ArtistDetailPage