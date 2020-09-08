export default {
    API_URI: process.env.NODE_ENV === 'production'
        ? 'https://jsonplaceholder.typicode.com'
        : 'https://jsonplaceholder.typicode.com'
};