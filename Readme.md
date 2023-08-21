# Datatable Axios


Datatable Axios is a simple and convenient npm package that helps you make GET, POST, and PUT requests with ease, while handling search parameters and pagination seamlessly. It's built on top of the popular Axios library, making it reliable and efficient for your data fetching needs.

&nbsp;
# Installation
You can install Datatable Axios using npm:

```bash
npm install datatable-axios
```
&nbsp;
# Why Datatable Axios?
Simplify your `HTTP calls without repetition`. Say goodbye to repeating steps for every datatable request!

- **`Cons:`** Without using the library, you can achieve the same functionality in Axios which `isn't readable & reusable`.
```js
const response = await axios.get('http://example.com/api/v1/products?page=2&paginate=25&search=we');
console.log(response.data);
```
- **`Pros:`** After using this library, you can achieve the same functionality of Axios in a `readable & reusable way`
```js
const response = await datatable.get('products');
console.log(response.data);
```
&nbsp;
# Usage
To get started with Datatable Axios, follow these simple steps:

- use global axios plugin setup in `axios.js` (optional)
``` js
import axios from "axios"

// Make the axios library globally available on the window object
window.axios = axios
// Set your base API URL for seamless requests
window.axios.defaults.baseURL = "http://example.com/api/v1/"

// Other configuration here
```

- Import the package at the top of your JavaScript file:

```js
import datatable from 'datatable-axios'
```
- Initialize an instance of the Datatable class:

```js
const datatable = new Datatable();
```
&nbsp;
# Use of API URL:

- When you have a global `axios.js` configuration setting your baseURL, simplify your API calls by using just the path:
```js
const response = await datatable.get('products');
console.log(response.data);
```
- If you're not utilizing a global `axios.js` configuration for your baseURL, include the full URL when making API calls:
```js
const response = await datatable.get('http://example.com/api/v1/products');
console.log(response.data);
```
&nbsp;
# Use of HTTP requests:

- Perform a GET request:
```js
const response = await datatable.get('url or path');
console.log(response.data); // Display the fetched data
```
- Perform a POST request:
```js
const response = await datatable.post('url or path');
console.log(response.data); // Display the response data
```
- Perform a PUT request:
```js
const response = await datatable.put('url or path');
console.log(response.data); // Display the updated data
```
&nbsp;
# Example of HTTP call:
- Example 1 : 
```js
datatable.get('http://example.com/api/v1/products')
  .then(response => {
    console.log("Data fetched successfully:", response.data);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
```
- Example 2 : 
```js
try {
  const response = await datatable.get('/api/v1/products');
  console.log("Data fetched successfully:", response.data);
} catch (error) {
  console.error("An error occurred:", error);
}
```
**`Note:`** Similar usage for POST and PUT requests
<!-- # Advanced Usage
You can also pass search parameters, pagination, and search queries to your requests:

```js
// Append search parameters to the URL
const response = await datatable.get('https://api.example.com/data', {
  page: 1,
  paginate: 10,
  search: 'keyword',
});
console.log(response.data);
``` -->

&nbsp;
# Contributing
We welcome contributions to enhance Datatable Axios! Feel free to open issues for bug reports or feature requests. If you'd like to contribute code, please fork the repository, make your changes, and submit a pull request.

&nbsp;
# License
Datatable Axios is released under the [MIT License](https://opensource.org/license/mit/).

&nbsp;

Feel free to reach out to me [Linkedin](https://www.linkedin.com/in/mahmudun-nabi-kajal/), [GitHub](https://github.com/mahmudunnabikajal), [Gmail](mailto:mahmudunnabikajal) for any questions or feedback! I hope Datatable Axios simplifies your data fetching process.