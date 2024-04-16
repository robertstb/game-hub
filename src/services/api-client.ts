import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'eb7945f171d3474aae095c3877e4f667'
    }
})