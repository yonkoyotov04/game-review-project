import { createContext } from "react";

const errorContext = createContext({
    error: '',
    onError() {}
})

export default errorContext;