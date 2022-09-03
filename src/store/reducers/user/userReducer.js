import {USERPICK, RESETPICK} from "./userActions";


const initialState = {
    userPick: '',
    isPicked: false,
}

export const userReducer = (state = initialState,action) => {
    switch (action.type) {
        case USERPICK: {
            return {
               ...state,
                userPick: action.payload,
                isPicked: true,
            }
        }
        case RESETPICK: {
            return {
                ...state,
                isPicked: false
            }
        }
        default: {
            return {...state}
        }
    }
}