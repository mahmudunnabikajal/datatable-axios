// Import the axios instance from the local file "./axios"
import axios from "./axios"

/**
 * A datatable-axios class
 * @class
 */
class datatable {
    constructor() {

    }

    /**
     * Method to perform a GET request
     * @param {string} url - The url of API endpoint
     * @returns {Promise<object>} Server response from API endpoint
     */
    async get(url) {
        // Parse the search parameters from the URL
        let searchParams = new URLSearchParams(window.location.search)

        // Retrieve values from search parameters
        let page = searchParams.get('page')
        let paginate = searchParams.get('paginate')
        let search = searchParams.get('search')

        // Return a Promise that resolves when the request completes
        return new Promise(async (resolve) => {
            if (!page && !paginate && !search) {
                // If no search parameters, make a regular GET request
                await window.axios.get(url).then(response => {
                    resolve(response) // Resolve the Promise with the response
                })
            } else {
                // If search parameters exist, append them to the URL
                await window.axios.get(`${url}?page=${page}&paginate=${paginate}&search=${search}`).then(response => {
                    resolve(response) // Resolve the Promise with the response
                })
            }
        })
    }

    /**
     * Method to perform a POST request
     * 
     * @async
     * @param {string} url - The url of API endpoint
     * @returns {Promise<object>} Server response from API endpoint
     */
    async post(url) {
        // Parse the search parameters from the URL
        let searchParams = new URLSearchParams(window.location.search)

        // Retrieve values from search parameters
        let page = searchParams.get('page')
        let paginate = searchParams.get('paginate')
        let search = searchParams.get('search')

        // Return a Promise that resolves when the request completes
        return new Promise(async (resolve) => {
            if (!page && !paginate && !search) {
                // If no search parameters, make a regular POST request
                await window.axios.post(url).then(response => {
                    resolve(response) // Resolve the Promise with the response
                })
            } else {
                // If search parameters exist, append them to the URL
                await window.axios.post(`${url}?page=${page}&paginate=${paginate}&search=${search}`).then(response => {
                    resolve(response) // Resolve the Promise with the response
                })
            }
        })
    }

    /**
     * Method to perform a PUT request
     * 
     * @async
     * @param {string} url - The url of API endpoint
     * @returns {Promise<object>} Server response from API endpoint
     */
    async put(url) {
        // Parse the search parameters from the URL
        let searchParams = new URLSearchParams(window.location.search)

        // Retrieve values from search parameters
        let page = searchParams.get('page')
        let paginate = searchParams.get('paginate')
        let search = searchParams.get('search')

        // Return a Promise that resolves when the request completes
        return new Promise(async (resolve) => {
            if (!page && !paginate && !search) {
                // If no search parameters, make a regular PUT request
                await window.axios.put(url).then(response => {
                    resolve(response) // Resolve the Promise with the response
                })
            } else {
                // If search parameters exist, append them to the URL
                await window.axios.put(`${url}?page=${page}&paginate=${paginate}&search=${search}`).then(response => {
                    resolve(response) // Resolve the Promise with the response
                })
            }
        })
    }
}

// Export the "datatable" class as the default export
export default datatable
