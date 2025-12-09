import { useContext, useEffect, useState } from "react";
import { ErrorContext } from "../contexts/ErrorContext.jsx";

export default function useControlledForm(initialValues, onSubmit) {
    const {errorSetter} = useContext(ErrorContext)
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues])

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await onSubmit(values);
        } catch (error) {
            errorSetter(error);
        }

    }

    return {
        values, changeHandler, submitHandler
    }
}