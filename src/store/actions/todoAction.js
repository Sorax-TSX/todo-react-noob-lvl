import {
    ADD_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM,
} from '../types';

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: {
            item
        }
    }
}

export const removeItem = () => {
    return {
        type: REMOVE_ITEM
    }
}

export const updateItem = (id) => {
    return {
        type: UPDATE_ITEM,
        payload: {
            id
        }
    }
}
