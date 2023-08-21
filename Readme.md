# Datatable Axios


Datatable Axios is a simple and convenient npm package that helps you make GET, POST, and PUT requests with ease, while handling search parameters and pagination seamlessly. It's built on top of the popular Axios library, making it reliable and efficient for your data fetching needs.

&nbsp;
# Installation
You can install Datatable Axios using npm:

```bash
npm install datatable-axios
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

// Similar usage for POST and PUT requests

``` -->

&nbsp;
# Contributing
We welcome contributions to enhance Datatable Axios! Feel free to open issues for bug reports or feature requests. If you'd like to contribute code, please fork the repository, make your changes, and submit a pull request.

&nbsp;
# License
Datatable Axios is released under the [MIT License](https://opensource.org/license/mit/).

&nbsp;

Feel free to reach out to me at &nbsp;[<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18.1" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"/><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"/><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"/><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"/></svg>](mailto:mahmudunnabikajal@gmail.com)&nbsp;
[<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><g fill="#fff"><path fill-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clip-rule="evenodd"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>](https://github.com/mahmudunnabikajal)&nbsp;
[<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>](https://www.linkedin.com/in/mahmudun-nabi-kajal/)&nbsp;
 for any questions or feedback! We hope Datatable Axios simplifies your data fetching process.