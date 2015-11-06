import moment from 'moment';

export const UPDATE_CHART = 'UPDATE_CHART';

export function updateChart(response) {
    const data = {
        labels: [],
        datasets: [
            {
                label: "Weather forecast",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: []
            },
        ],
    };

    const now = moment();
    response.list.forEach(function(obj, i) {
        var dt = moment().dayOfYear(now.dayOfYear()+i);
        data.labels.push(dt.format('DD.MM.YYYY')); // obj.dt_txt
        data.datasets[0].data.push(obj.temp.day); // obj.main.temp
    });

    return {
        type: UPDATE_CHART,
        data: data,
    };
}
