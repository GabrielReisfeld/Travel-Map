import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://pintravel-map.herokuapp.com/api/"
})