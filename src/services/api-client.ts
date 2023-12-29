import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5e828b28515b4b04b832ce35b2d24be9'
    }
})