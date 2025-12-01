import { useEffect, useState } from "react";

let baseURL = 'http://localhost:2222';

export default function useFetch(url, setData, filter) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const request = async(url, method, data, config = {}) => {
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

        const response = await fetch (`${baseURL}${url}`, options);

        if (!response.ok) {
            throw response.statusText;
        }

        return response.json();
    }

    useEffect(() => {
        const abortController = new AbortController();
    
        fetch(`${baseURL}${url}`, { signal: abortController.signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.text);
                }

                return response.json()
            })
            .then(result => {
                if (filter) {
                    result = result.filter(game => game.genre === filter);
                }
                setData(result);
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false);
            })

        return () => {
            abortController.abort();
        }
    }, [url, refresh])

    const refetch = () => {
        setRefresh(state => !state);
    }

    return {isLoading, error, refetch}
}

