/**
 * @file axios.js
 * @module datatable-axios/axios
 * @description Configures a shared Axios instance and exposes it globally so the
 * datatable class can issue HTTP requests through `window.axios`.
 */

// Import the axios library
import axios from "axios";

// Make the axios library globally available on the window object
window.axios = axios;

// Export the axios library as the default export
export default axios;
