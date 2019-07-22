import { LOGIN_REQUEST,
         LOGIN_SUCCESS,
         LOGIN_FAIL,
     } from '../actions/UserActions';

const initialState = {
    name: 'Anonim',
}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, name: action.payload};
        case LOGIN_FAIL:
            return {...state, error: action.payload};
        default:
            return state;
    }
}