import { LOGIN_REQUEST,
         LOGIN_SUCCESS,
         LOGIN_FAIL,
     } from '../actions/UserActions';

const initialState = {
    name: '',
    isFetching: false,
}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {...state, isFetching: true};
        case LOGIN_SUCCESS:
            return {...state, name: action.payload, isFetching: false};
        case LOGIN_FAIL:
            return {...state, error: action.payload, isFetching: false};
        default:
            return state;
    }
}