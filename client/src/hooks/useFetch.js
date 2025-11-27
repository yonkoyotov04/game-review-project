import { useEffect, useState } from "react";

let baseUrl = 'http://localhost:2222';

export default function useFetch(url, setData, filter) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
    
        fetch(`${baseUrl}${url}`, { signal: abortController.signal })
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

