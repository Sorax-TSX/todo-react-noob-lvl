import {
    ADD_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM,
} from '../types';

const initialState = {
    todos: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_ITEM:
        return {
            ...state,
          todos: [...state.todos, payload.item]
        }
        case UPDATE_ITEM: {
            const updating = state.todos.map((item) => {
                if (item.id === payload.id) {
                    item.complete = !item.complete;
                }
                return item
            })
            return {
                ...state,
                todos: updating
            }
        }
        case REMOVE_ITEM: {
            const updating = state.todos.filter(({complete}) => !complete);
            return {
                ...state,
                todos: updating
            }
        }
        default:
            return state;
    }
}