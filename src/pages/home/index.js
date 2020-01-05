import React, { useState, useEffect } from "react"
import ClientLayout from "../../layouts/client_layout"

import { getSliderThumbnailsService } from "../../services/other_service"
import { Link } from "react-router-dom"
import SlidersAreaComponent from "./SlidersArea"
import RecommendationAreaComponent from "./RecommendationArea"
import SizedBox from "../../components/SizedBox/SizedBox"
import { getRecommendationTracksService } from "../../services/tracks_service"
import CategoryAreaComponent from "./CategoryArea"

import { getTracksByCategory } from "../../services/tracks_service"
import { getAvailableCategoriesService } from "../../services/category_service"

const HomePage = props => {
    const [sliders, setSliders] = useState([])

    const [recommendationTracks, setRecommendationTracks] = useState([])

    const [ availableCategories , setAvailableCategories ] = useState([])
    const [ selectedCategory , setSelectedCategory ] = useState("")
    const [ categoryTracks , setCategoryTracks ] = useState([])

    const syncSliders = () => {
        return getSliderThumbnailsService()
            .then(response => {
                const slidersData = response.data
                setSliders(slidersData)
            })
    }

    const syncRecommendation = () => {
        return getRecommendationTracksService()
            .then(response => {
                const tracks = response.data
                setRecommendationTracks(tracks)
            })
    }

    const syncCategoryTracks = ( key ) => {
        getTracksByCategory(key)
        .then(response => {
            const tracks  = response.data
            setCategoryTracks(tracks)
        })
    }

    const syncCategories = () =>{
        getAvailableCategoriesService()
            .then(response => {
                const categories = response.data
                setAvailableCategories(categories)
                setSelectedCategory(categories[0] && categories[0].key)
            })
    }


    useEffect(() => {
        syncSliders()
        syncRecommendation()
        syncCategories()
    }, [])

    
    useEffect(() => {
        if(!selectedCategory){
            return 
        }
        syncCategoryTracks(selectedCategory)
    },[ selectedCategory ])

    const onSliderClick = (slider) => {
        alert("You are Click : " + slider.link)
    }

    const onCategoryChanged = (key) => {
        setSelectedCategory(key)
    }

    return (
        <ClientLayout pageKey={"home"}>

            <SlidersAreaComponent
                sliders={sliders}
                onSliderClick={onSliderClick}
            />

            <SizedBox height="50px" />

            <RecommendationAreaComponent tracks={recommendationTracks} />

            <SizedBox height="50px" />

            <CategoryAreaComponent
                availableCategories={availableCategories}
                onCategoryChanged={onCategoryChanged}
                selectedCategory={selectedCategory}
                tracks={categoryTracks}
            />


        </ClientLayout>
    )
}

export default HomePage