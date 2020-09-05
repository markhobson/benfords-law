$("#plot").click(function () {
    const numbers = $("#numbers")
        .val()
        .split('\n')
        .map(line => line.trim())
        .filter(line => !isNaN(line))
        .map(line => parseInt(line.charAt(0)))
        .filter(number => number > 0);

    const data = new Array(9).fill(0);
    numbers.forEach(number => data[number - 1]++);

    $("#chart").highcharts({
        chart: {
            type: 'column'
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                groupPadding: 0
            }
        },
        series: [{
            data: data,
            name: 'Frequency'
        }],
        title: {
            text: undefined
        },
        xAxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            title: {
                text: 'Significant number'
            }
        },
        yAxis: {
            title: {
                text: 'Frequency'
            }
        }
    });
});
