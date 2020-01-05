/**
 * use for Capitalize string
 * 
 * @param {string}  str input string
 * @returns {string} capitalized string
 */
function capitalize  (str= "")  {
    return str[0].toUpperCase() + str.slice(1)
} 

// Mock Category
// Please replace it with request from server later
export const getAvailableCategoriesService = async () => {
    const MOCK_DATA = ["pop","rock","sad"].map( type =>  ({
        label: capitalize(type),
        key: type,
    }))
    
    return {
        data: MOCK_DATA
    }
}
