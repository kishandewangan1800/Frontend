import axios from "axios";

export const baseUrl = 'bayut.p.rapidapi.com';




export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '27fd2c02d5mshc51577e9740d4e4p18464ejsn85e1e4e69d84'
        }
    })
    return data;
}