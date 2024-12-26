import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const useAxiosSecure = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
            async error => {
                console.log('error caught from our very own interceptors -->', error.response);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOutUser();
                    navigate('/login');
                }
            });
    }, [signOutUser, navigate]);
    return axiosSecure;
};

export default useAxiosSecure;