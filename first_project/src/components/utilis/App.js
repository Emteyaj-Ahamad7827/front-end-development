import axios from "axios";

export const apiData = axios.create({
    baseUrl:'https://fakestoreapi.com',
});