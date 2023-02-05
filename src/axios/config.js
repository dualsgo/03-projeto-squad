import axios from "axios";

const blogFetch = axios.create(
    {
        baseURL:"https://jsonplaceholder.typicode.com"
    }
)

export default blogFetch