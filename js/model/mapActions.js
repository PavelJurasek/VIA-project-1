export const UPDATE_MAP = 'UPDATE_MAP';

export function updateMap(coordinates) {
    console.log('action', coordinates);

    return {
        type: UPDATE_MAP,
        coordinates
    };
}
