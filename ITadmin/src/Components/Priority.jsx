import React from 'react'

const GetPriority = (priority) => {
    if (priority === "high") {
        return "stat1"
    }
    if (priority === "low") {
        return "stat2"
    }
    if (priority === "medium") {
        return "stat3"
    }
    return ""
}

export { GetPriority }

