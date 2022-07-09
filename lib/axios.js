import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://localhost/",
    headers: {
        "X-Request-With" : "XMLHttpRequest"
    },
    withCredential:true
});

export default axios;