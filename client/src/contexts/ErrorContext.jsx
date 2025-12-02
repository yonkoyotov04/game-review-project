import { createContext, useState } from "react";
import ErrorContainer from "../components/error-container/ErrorContainer.jsx";

export const ErrorContext = createContext()

export function ErrorProvider({children}) {
    const [error, setError] = useState(null);

    const errorSetter = (error) => {
        setError(error);

        setInterval(() => {
            setError(null)
        }, "5000");
    }



    return (
        <ErrorContext.Provider value={{error, errorSetter}} >
            {children}
            {error && <ErrorContainer error={error} />}
        </ErrorContext.Provider>
    )
}