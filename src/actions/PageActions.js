export const SET_YEAR = 'SET_YEAR';
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';

export function getPhotos(year) {
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year,
        });

        // setTimeout(() => {
        //     dispatch({
        //         type: GET_PHOTOS_SUCCESS,
        //         payload: [1, 2, 3, 4, 5],
        //     })
        // }, 2000);
        fetch('http://example.com/movies.json')
            .then(res => {
                res.json();
            })
            .then(body => console.log(body))
            .catch(err => console.log(err))
    }
}