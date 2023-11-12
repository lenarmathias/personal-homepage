import { useState, useEffect } from "react";
import axios from "axios";

const apiAddress = 'https://api.github.com/users/lenarmathias/repos'

export const useGithubReposApi = () => {
    const [apiObject, setApiObject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apiSuccess, setApiSuccess] = useState(true);

    useEffect(() => {
        const callingApi = async () => {
            try {
                const response = await axios.get(apiAddress);
                setApiObject(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(true);
                clearTimeout(delayLoading);
                setApiSuccess(false);
            }
        };

        const delayLoading = setTimeout(callingApi, 2000);

        return () => {
            clearTimeout(delayLoading);
        };
    }, []);

    return { apiObject, loading, apiSuccess };
};