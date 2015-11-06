export function selectChartNamespace(state) {
    return state.chart;
}

export function selectData(state) {
    return selectChartNamespace(state).data;
}
