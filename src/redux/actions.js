import { 
    UPDATE_TITLE, 
    UPDATE_DESCRIPTION,
    ADD_NOTIFICATION,
    ADD_COLOR,
    IS_OPEN,
    SET_DATE,
    SET_VALUE,
    SET_IS_DISABLE,
    SET_IS_VISIBLE,
    SET_CARDS
 } from "./actionTypes";

export const updateTitle = (title) => {
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

export const updateDescription = (description) => {
    return {
        type: UPDATE_DESCRIPTION,
        payload: description
    }
}

export const addNotification = (notification) => {
    return {
        type: ADD_NOTIFICATION,
        payload: notification
    }
}

export const addColor = (color) => {
    return {
        type: ADD_COLOR,
        payload: color
    }
}

export const isClosed = (boolean) => {
    return {
        type: IS_OPEN,
        payload: boolean
    }
}

export const setDate = (date) => {
    return {
        type: SET_DATE,
        payload: date
    }
}

export const setValue = (value) => {
    return {
        type: SET_VALUE,
        payload: value
    }
}

export const setIsDisable = (value) => {
    return {
        type: SET_IS_DISABLE,
        payload: value
    }
}

export const setIsVisible = (value) => {
    return {
        type: SET_IS_VISIBLE,
        payload: value
    }
}

export const setCards = (prevCards) => {
    return {
        type: SET_CARDS,
        payload: prevCards
    }
}