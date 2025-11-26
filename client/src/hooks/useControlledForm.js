import { useState } from "react";
import ErrorContainer from "../components/error-container/ErrorContainer.jsx";

export default function useControlledForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await onSubmit(values);
            setValues(initialValues);
        } catch (error) {
            console.log(error);
        }

    }

    return {
        values, changeHandler, submitHandler
    }
}