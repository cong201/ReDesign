import axios from "axios";

const newRequest = axios.create({
    baseURL: "http://localhost:5143/api/",
})

export default newRequest