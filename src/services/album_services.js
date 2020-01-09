export const getAlbumsByArtistService = async (key) => {
    const MOCK_DATA = Array(12).fill("").map((uselessString, index) => ({
        key: index,
        name: `${key}'s Album #${index}`,
        imageUrl: `https://via.placeholder.com/300x150?text=${key}+Album+#+${index}`,
        artist: `Artist #${index}`
    }))
    return {
        data : MOCK_DATA
    }
}