function capitalize  (str= "")  {
    return str[0].toUpperCase() + str.slice(1)
} 

export const getAvailableCategoriesService = async () => {
    const MOCK_DATA = ["pop","rock","sad"].map( type =>  ({
        label: capitalize(type),
        key: type,
    }))
    
    return {
        data: MOCK_DATA
    }
}
