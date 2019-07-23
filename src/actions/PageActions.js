export const SET_YEAR = 'SET_YEAR';
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';

export function getPhotos(year) {
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year,
        });

        //eslint-disable-next-line no-undef
        VK.Api.call('photos.getAll', { extended: 1, count: 200, offset: 0, v: '5.80' },
            r => {
                console.log(r.response);
                if (r.response) {
                    dispatch({
                        type: GET_PHOTOS_SUCCESS,
                        payload: r.response.items,
                    });
                }
            });
    }
}