import Axios from "axios";

export async function get(path, headers) {
    return await Axios.get(path, { headers });
}