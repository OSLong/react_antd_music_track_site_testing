export const getSliderThumbnailsService = async () => {
    const MOCK_SLIDERS = ["facebook", "youtube", "twitter"].map(key => ({
        key: key,
        link: `https://www.`+key+`.com`,
        imageUrl: `https://via.placeholder.com/300x150?text=Go+to+${key}`
    }))
    return {
        data : MOCK_SLIDERS
    }
}