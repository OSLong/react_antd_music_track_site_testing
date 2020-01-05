export const getTracksByCategory = async (key) =>  {
    const MOCK_DATA = Array(10).fill("").map((uselessString, index) => ({
        key: index,
        name: `${key} Song #${index}`,
        imageUrl: `https://via.placeholder.com/300x150?text=${key}+Song+#+${index}`
    }))
    return {
        data : MOCK_DATA
    }
}

export const getRecommendationTracksService = async (key) =>  {
    const MOCK_DATA = Array(10).fill("").map((uselessString, index) => ({
        key: index,
        name: `Recommendation Song #${index}`,
        imageUrl: `https://via.placeholder.com/300x150?text=Recommend+Song+#+${index}`
    }))
    return {
        data : MOCK_DATA
    }
}
