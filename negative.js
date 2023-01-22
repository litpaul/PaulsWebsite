Highcharts.chart('negativecontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Kiwi', 'Pineapple', 'Strawberry', 'Grapefruit', 'Apple']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Paul',
        data: [-1, 7, 8, 7, 6]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});