/**
 * A datatable-axios class
 * @class
 */
class datatable {
  constructor() {}

  /**
   * Method to perform a GET request
   * @param {string} url - The url of API endpoint
   * @returns {Promise<object>} Server response from API endpoint
   */
  async get(url) {
    // Parse the search parameters from the URL
    let searchParams = new URLSearchParams(window.location.search);

    // Retrieve values from search parameters
    let page = searchParams.get("page");
    let paginate = searchParams.get("paginate");
    let search = searchParams.get("search");

    // If no search parameters, make a regular GET request
    if (!page && !paginate && !search) {
      return window.axios.get(url);
    }

    // If search parameters exist, append them to the URL
    return window.axios.get(`${url}?page=${page}&paginate=${paginate}&search=${search}`);
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
    let searchParams = new URLSearchParams(window.location.search);

    // Retrieve values from search parameters
    let page = searchParams.get("page");
    let paginate = searchParams.get("paginate");
    let search = searchParams.get("search");

    // If no search parameters, make a regular POST request
    if (!page && !paginate && !search) {
      return window.axios.post(url);
    }

    // If search parameters exist, append them to the URL
    return window.axios.post(`${url}?page=${page}&paginate=${paginate}&search=${search}`);
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
    let searchParams = new URLSearchParams(window.location.search);

    // Retrieve values from search parameters
    let page = searchParams.get("page");
    let paginate = searchParams.get("paginate");
    let search = searchParams.get("search");

    // If no search parameters, make a regular PUT request
    if (!page && !paginate && !search) {
      return window.axios.put(url);
    }

    // If search parameters exist, append them to the URL
    return window.axios.put(`${url}?page=${page}&paginate=${paginate}&search=${search}`);
  }
}

// Export the "datatable" class as the default export
export default datatable;
