import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";

const baseURL = 'http://localhost:2222'

export default function betterUseFetch(url, setData, extras = {}) {
    const { isAuthenticated, user } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    const fetcher = async (url, method, data, config = {}) => {
        let options = {};

        if (method) {
            options.method = method;
        }

        if (data) {
            options.headers = {
                'content-type': 'application/json'
            }

            options.body = JSON.stringify(data);
        }

        if (isAuthenticated || config.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': config.accessToken || user.accessToken
            }
        }

        const response = await fetch(`${baseURL}${url}`, options);

        if (!response.ok) {
            throw response.statusText;
        }

        const result = response.json();

        return result;
    }

    useEffect(() => {
        if (!url) return;

        fetcher(url)
            .then(result => {
                if (extras.category) {
                    result = result.filter(game => game.genre === extras.category);
                }
                setData(result)
            })
            .catch(err => alert(err))
            .finally(() => {
                setIsLoading(false);
            })
    }, [url]);

    return {
        fetcher, isLoading
    }
}