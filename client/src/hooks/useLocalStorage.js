import { useState } from "react";

export default function useLocalStorage(initialValue, key) {
    const [state, setState] = useState(() => {
        const storedData = localStorage.getItem(key);

        if (!storedData) {
            return initialValue;
        }

        return JSON.parse(storedData);
    });

    const setPersistedState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    }

    return [
        state,
        setPersistedState
    ]
}