export function selectMapNamespace(state) {
    return state.map;
}

export function selectCoordinates(state) {
    return selectMapNamespace(state).coordinates;
}
