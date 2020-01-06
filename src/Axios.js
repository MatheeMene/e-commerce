import Axios from 'axios';

const Instance = Axios.create({
    baseURL: 'http://localhost:4000/api'
});

export default Instance;