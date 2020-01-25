import { randomNumber } from "../utils/test"

export const getAlbumsByArtistService = async (key) => {
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `${key}'s Album #${index}`,
        imageUrl: `https://via.placeholder.com/300x150?text=${key}+Album+#+${index}`,
        artist: `Artist #${index}`,
        total_songs: randomNumber(1000)

    }))
    return {
        data : MOCK_DATA
    }
}

export const getAlbumsService = async (type, pagination) => {
    const { page } = pagination
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `${type}'s Album #${index} Page ${page}`,
        imageUrl: `https://via.placeholder.com/300x150?text=${type}+Album+${index}+Page+${page}`,
        artist: `Artist #${index}`,
        total_songs: randomNumber(1000)

    }))
    return {
        data : MOCK_DATA
    }
}
