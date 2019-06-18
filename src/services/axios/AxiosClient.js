import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common["Authorization"] = "Auth TOken from Instance";

instance.interceptors.request.use(request => {
    console.log(request);
}, error =>  {
    console.log(error);
});

export default instance;