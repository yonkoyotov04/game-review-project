import { useState } from "react";

export default function checkOwnership(id, userId) {
    const [state, setState] = useState(false);

    if (id === userId) {
        setState(true);
    } else {
        setState(false);
    }

    return state;
}