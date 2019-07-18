export const initialState = {
    user: {
        name: 'Anton',
        surname: 'Karatkevich',
        age: 23,
    },
    hobby: {
        main: 'prostracanation',
    }
}

export function rootReducer(state = initialState) {
    return state;
}