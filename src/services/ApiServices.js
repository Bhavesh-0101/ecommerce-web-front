import axios from "axios"

export const productApi = async (methodName, url, body) => {
    try {
        if (methodName === 'get') {
            const result = await axios.get(url)
            return result;
        }
        if (methodName === 'post') {
            const result = await axios.post(url, body)
            return result;
        }
    } catch (err) {
        console.log(err)
    }
}

export const paymentApi = async (methodName, url, body) => {
    try {
        if (methodName === 'get') {
            const result = await axios.get(url)
            return result;
        }
        if (methodName === 'post') {
            const result = await axios.post(url, body)
            return result;
        }
    } catch (err) {
        console.log(err)
    }
}