import axios from 'axios';

const Base_API = axios.create({
    baseURL: `https://regres.in/api`,
});

export const getData = async (path) => {
    try {
        const res = await Base_API.get('${path}', {
            headers: { 'x-api-key': 'reqres_5ebd294adb784e648a2802d448b397f3'},
        });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log('error',error);
        throw error;
    }
};