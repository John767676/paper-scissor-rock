import {COMPPICK, RESET} from "./comActions";

const initialState = {
    computerPick: '',
    numOfClick: 0
}

const items = ['paper','scissor','rock']

export const compReducer = (state = initialState,action) => {
    switch (action.type) {
        case COMPPICK: {
            return {
                ...state,
                computerPick: items[Math.floor(Math.random() * items.length)],
                numOfClick: state.numOfClick + 1,
            }
        }
        case RESET: {
            return {
                ...state,
                computerPick: ''
            }
        }
        default: {
            return {...state}
        }
    }
}