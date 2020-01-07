import { randomNumber } from "../utils/test"

export const getRecommendationArtistsService = async ( ) => {
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `Artist #${index}`,
        imageUrl: `https://via.placeholder.com/300x150?text=Artist+#+${index}`
    }))
    return {
        data : MOCK_DATA
    }
}

export const getPopularArtistsService = async ( ) => {
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `Artist #${index}`,
        imageUrl: `https://via.placeholder.com/300x150?text=Popular++Artist+#+${index}`,
        total_songs: randomNumber(1000)
    }))
    return {
        data : MOCK_DATA
    }
}

export const getArtistByIDService = async (id) => {
    const MOCK_DATA = {
        name: "Artisan Name",
        imageUrl: `https://via.placeholder.com/300x150?text=Artist+#+${id}`
    }
    return {
        data : MOCK_DATA
    }
}
