import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID zt4mEjHqKA2a-uALgLm_O58te-vckpF5XMqJifeRdWk'
    }
});
