import axios from "axios";

const blogFetch = axios.create(
    {
        baseURL:"https://estao-servidos-xvs9.onrender.com",
        headers:{
            "Content-Type": "application/json",
        }
    }
)

export default blogFetch