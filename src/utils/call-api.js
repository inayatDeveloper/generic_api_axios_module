
import axios from "axios"
import config from "../config"

export const callApi = (endpoint, method, token, payload) => {

    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};

    const configaxios = {
        method,
        url: `${config.API_URI}/${endpoint}`,
        body: JSON.stringify(payload),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
        }
    }

    return new Promise((resolve, reject) => {
        axios(configaxios).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })

}