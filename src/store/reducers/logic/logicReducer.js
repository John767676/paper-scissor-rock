import {DRAW, LOSE, RESET_RESULT, WIN} from "./logicActions";

const initialState = {
    count: 0,
    result: ''
}

export const logicReducer = (state = initialState,action) => {
    switch (action.type) {
        case WIN: {
            return {
                ...state,
                count: state.count + 1,
                result: 'win'
            }
        }
        case LOSE: {
            return {
                ...state,
                count: 0,
                result: 'lose'
            }
        }
        case DRAW: {
            return {
                ...state,
                result: 'draw'
            }
        }
        case RESET_RESULT: {
            return {
                ...state,
                result: ''
            }
        }
        default: return {...state}
    }
}