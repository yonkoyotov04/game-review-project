import { createContext } from "react";

const ReviewContext = createContext({
    reviewStatusHandler() {},
    gameStatsHandler() {}
})

export default ReviewContext;