import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://tourism-maanagement-server.vercel.app'
})
const useAxios = () => {
    return axiosSecure;
};

export default useAxios;