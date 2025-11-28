import { createContext } from "react";

const ReviewContext = createContext({
    userId: '',
    reviewStatusHandler() {},
    gameStatsHandler() {}
})

export default ReviewContext;