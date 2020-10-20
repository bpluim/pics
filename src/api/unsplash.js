import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kxMTgzVWvvx4pnEPIPObaq3rR7McKq-4LtF2QH7ZMAw',
    }
})