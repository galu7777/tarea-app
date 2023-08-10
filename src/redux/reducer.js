import dayjs from "dayjs";

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

const initialState = {
    title: "",
    description: "",
    color: "#ffff",
    cards: [], 
    notification: null,
    isOpen: false,
    date: null,
    value: dayjs("2022-04-17T15:30"),
    isDisable: true,
    isVisible: true
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type){
        case UPDATE_TITLE:
            return {
                ...state,
                title: payload
            }
    
        case UPDATE_DESCRIPTION:
            return {
                ...state,
                description: payload
            }

        case ADD_NOTIFICATION:
            return {
                ...state,
                notification: payload
            }

        case ADD_COLOR:
            return {
                ...state,
                color: payload
            }

        case IS_OPEN:
            return {
                ...state,
                isOpen: payload
            }
            
        case SET_DATE:
            return {
                ...state,
                date: payload
            }

        case SET_VALUE:
            return {
                ...state,
                value: payload
            }

        case SET_IS_DISABLE:
            return {
                ...state,
                isDisable: payload
            }

        case SET_IS_VISIBLE:
            return {
                ...state,
                isVisible: payload
            }

        case SET_CARDS:
            return {
                ...state,
                cards: payload
            }

        default:
            return {
              ...state
            };
    }
}