import axios from 'axios';

const Base_API = axios.create({
    baseURL: `https://regres.in/api`,
});

export const getData = async (path) => {
    try {
        const res = await Base_API.get('${path}', {
            headers: { 'x-api-key':},
        });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log('error',error);
        throw error;
    }
};