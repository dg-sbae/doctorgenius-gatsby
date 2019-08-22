var base = 0;

$('.home-title').after('<form class="input-patient-value invisible" style="text-align: center; margin-top: 30px;"><input type="text" name="value" class="input-value" style="width: 75px; margin-right: 15px; text-align: center;">' +
    '<button class="btn waves-effect waves-light" type="submit" name="action" style="background-color: #F8981C;">Submit' +
    '</button><p class="submit-instructions">Input amount of new patient calls</p></form>');

$('#expectations').click( function ( event ) {
    // Remove hide from #container.slide-graph
    $('form.input-patient-value input, form.input-patient-value button').addClass('invisible');
    // $('#container.slide-graph').addClass('hide');
    setTimeout( function () {
        $('form.input-patient-value').addClass('invisible');
    }, 300);
    setTimeout( function () {
        $('#container.slide-graph').addClass('hide');
    }, 300);
    setTimeout( function () {
        $('#container-graph').removeClass('hide');
    }, 300);
    setTimeout( function () {
        $('#expectations').addClass('hide');
        $('#projections').removeClass('hide');
    }, 300);

});

$('#projections').click( function ( event ) {
    // Remove hide from #container.slide-graph
    $('form.input-patient-value input, form.input-patient-value button').removeClass('invisible');
    $('form.input-patient-value').removeClass('invisible');
    $('#container.slide-graph').removeClass('hide');

    $('#container-graph').addClass('hide');
    $('#expectations').removeClass('hide');
    $('#projections').addClass('hide');
});

$('button[type="submit"]').click( function ( event ) {
    event.preventDefault();
    base = $('.input-value').val();
    if ( $(this).parent().next().is('.container-silver-gold') ) {
        chart.series[1].setData([
            [1, Math.round(base * ( 1 - 0.13)), Math.round(base * ( 1 + 1.00))],
            [2, Math.round(base * ( 1 - 0.25)), Math.round(base * ( 1 + 1.27))],
            [3, Math.round(base * ( 1 - 0.13)), Math.round(base * ( 1 + 1.92))],
            [4, Math.round(base * ( 1 - 0.13)), Math.round(base * ( 1 + 1.92))],
            [5, Math.round(base * ( 1 - 0.14)), Math.round(base * ( 1 + 2.12))],
            [6, Math.round(base * ( 1 + 0.02)), Math.round(base * ( 1 + 2.73))],
            [7, Math.round(base * ( 1 - 0.05)), Math.round(base * ( 1 + 2.83))],
            [8, Math.round(base * ( 1 + 0.02)), Math.round(base * ( 1 + 2.91))],
            [9, Math.round(base * ( 1 + 0.06)), Math.round(base * ( 1 + 3.80))],
            [10, Math.round(base * ( 1 + 0.19)), Math.round(base * ( 1 + 3.43))],
            [11, Math.round(base * ( 1 + 0.19)), Math.round(base * ( 1 + 3.53))]
        ]);
        chart.series[0].setData([
            [1, Math.round(base * ( 1 + 0.24))],
            [2, Math.round(base * ( 1 + 0.36))],
            [3, Math.round(base * ( 1 + 0.50))],
            [4, Math.round(base * ( 1 + 0.50))],
            [5, Math.round(base * ( 1 + 0.63))],
            [6, Math.round(base * ( 1 + 0.74))],
            [7, Math.round(base * ( 1 + 0.68))],
            [8, Math.round(base * ( 1 + 1.05))],
            [9, Math.round(base * ( 1 + 1.21))],
            [10, Math.round(base * ( 1 + 1.13))],
            [11, Math.round(base * ( 1 + 1.32))]
        ]);
    } else if ( $(this).parent().next().is('.container-gold-platinum') ) {
        chart.series[1].setData([
            [1, Math.round(base * ( 1 - 0.17)), Math.round(base * ( 1 + 1.15))],
            [2, Math.round(base * ( 1 + 0.24)), Math.round(base * ( 1 + 1.15))],
            [3, Math.round(base * ( 1 + 0.13)), Math.round(base * ( 1 + 1.38))],
            [4, Math.round(base * ( 1 + 0.38)), Math.round(base * ( 1 + 1.18))],
            [5, Math.round(base * ( 1 + 0.19)), Math.round(base * ( 1 + 2.41))],
            [6, Math.round(base * ( 1 + 0.43)), Math.round(base * ( 1 + 4.18))],
            [7, Math.round(base * ( 1 + 0.29)), Math.round(base * ( 1 + 3.95))],
            [8, Math.round(base * ( 1 + 0.45)), Math.round(base * ( 1 + 3.23))],
        ]);
        chart.series[0].setData([
            [1, Math.round(base * ( 1 + 0.41))],
            [2, Math.round(base * ( 1 + 0.52))],
            [3, Math.round(base * ( 1 + 0.69))],
            [4, Math.round(base * ( 1 + 0.65))],
            [5, Math.round(base * ( 1 + 0.90))],
            [6, Math.round(base * ( 1 + 1.71))],
            [7, Math.round(base * ( 1 + 1.57))],
            [8, Math.round(base * ( 1 + 1.71))],
        ]);
    } else if ( $(this).parent().next().is('.container-silver-platinum') ) {
        chart.series[1].setData([
            [1, Math.round(base * ( 1 + 0.34)), Math.round(base * ( 1 + 2.00))],
            [2, Math.round(base * ( 1 + 0.46)), Math.round(base * ( 1 + 2.37))],
            [3, Math.round(base * ( 1 + 0.47)), Math.round(base * ( 1 + 2.60))],
            [4, Math.round(base * ( 1 + 0.80)), Math.round(base * ( 1 + 2.23))],
            [5, Math.round(base * ( 1 + 1.34)), Math.round(base * ( 1 + 2.01))],
            [6, Math.round(base * ( 1 + 1.17)), Math.round(base * ( 1 + 2.75))],
            [7, Math.round(base * ( 1 + 2.03)), Math.round(base * ( 1 + 2.73))],
            [8, Math.round(base * ( 1 + 2.07)), Math.round(base * ( 1 + 3.93))],
            [9, Math.round(base * ( 1 + 1.80)), Math.round(base * ( 1 + 3.03))],
        ]);
        chart.series[0].setData([
            [1, Math.round(base * ( 1 + 0.87))],
            [2, Math.round(base * ( 1 + 1.43))],
            [3, Math.round(base * ( 1 + 1.43))],
            [4, Math.round(base * ( 1 + 1.74))],
            [5, Math.round(base * ( 1 + 1.72))],
            [6, Math.round(base * ( 1 + 2.20))],
            [7, Math.round(base * ( 1 + 2.31))],
            [8, Math.round(base * ( 1 + 2.75))],
            [9, Math.round(base * ( 1 + 2.31))],
        ]);
    }

});
if ( $('form').next().is('.container-silver-gold') ) {
    var ranges = [
            [1, Math.round(base * (1 - 0.13)), Math.round(base * (1 + 1.00))],
            [2, Math.round(base * (1 - 0.25)), Math.round(base * (1 + 1.27))],
            [3, Math.round(base * (1 - 0.13)), Math.round(base * (1 + 1.92))],
            [4, Math.round(base * (1 - 0.13)), Math.round(base * (1 + 1.92))],
            [5, Math.round(base * (1 - 0.14)), Math.round(base * (1 + 2.12))],
            [6, Math.round(base * (1 + 0.02)), Math.round(base * (1 + 2.73))],
            [7, Math.round(base * (1 - 0.05)), Math.round(base * (1 + 2.83))],
            [8, Math.round(base * (1 + 0.02)), Math.round(base * (1 + 2.91))],
            [9, Math.round(base * (1 + 0.06)), Math.round(base * (1 + 3.80))],
            [10, Math.round(base * (1 + 0.19)), Math.round(base * (1 + 3.43))],
            [11, Math.round(base * (1 + 0.19)), Math.round(base * (1 + 3.53))]
        ],
        averages = [
            [1, Math.round(base * (1 + 0.24))],
            [2, Math.round(base * (1 + 0.36))],
            [3, Math.round(base * (1 + 0.50))],
            [4, Math.round(base * (1 + 0.50))],
            [5, Math.round(base * (1 + 0.63))],
            [6, Math.round(base * (1 + 0.74))],
            [7, Math.round(base * (1 + 0.68))],
            [8, Math.round(base * (1 + 1.05))],
            [9, Math.round(base * (1 + 1.21))],
            [10, Math.round(base * (1 + 1.13))],
            [11, Math.round(base * (1 + 1.32))]
        ];
} else if ( $('form').next().is('.container-gold-platinum') ) {
    var ranges = [
            [1, Math.round(base * (1 - 0.17)), Math.round(base * (1 + 1.15))],
            [2, Math.round(base * (1 + 0.24)), Math.round(base * (1 + 1.15))],
            [3, Math.round(base * (1 + 0.13)), Math.round(base * (1 + 1.38))],
            [4, Math.round(base * (1 + 0.38)), Math.round(base * (1 + 1.18))],
            [5, Math.round(base * (1 + 0.19)), Math.round(base * (1 + 2.41))],
            [6, Math.round(base * (1 + 0.43)), Math.round(base * (1 + 4.18))],
            [7, Math.round(base * (1 + 0.29)), Math.round(base * (1 + 3.95))],
            [8, Math.round(base * (1 + 0.45)), Math.round(base * (1 + 3.23))],
        ],
        averages = [
            [1, Math.round(base * (1 + 0.41))],
            [2, Math.round(base * (1 + 0.52))],
            [3, Math.round(base * (1 + 0.69))],
            [4, Math.round(base * (1 + 0.65))],
            [5, Math.round(base * (1 + 0.90))],
            [6, Math.round(base * (1 + 1.71))],
            [7, Math.round(base * (1 + 1.57))],
            [8, Math.round(base * (1 + 1.71))],
        ];
} else if ( $('form').next().is('.container-silver-platinum') ) {
    var ranges = [
            [1, Math.round(base * ( 1 + 0.34)), Math.round(base * ( 1 + 2.00))],
            [2, Math.round(base * ( 1 + 0.46)), Math.round(base * ( 1 + 2.37))],
            [3, Math.round(base * ( 1 + 0.47)), Math.round(base * ( 1 + 2.60))],
            [4, Math.round(base * ( 1 + 0.80)), Math.round(base * ( 1 + 2.23))],
            [5, Math.round(base * ( 1 + 1.34)), Math.round(base * ( 1 + 2.01))],
            [6, Math.round(base * ( 1 + 1.17)), Math.round(base * ( 1 + 2.75))],
            [7, Math.round(base * ( 1 + 2.03)), Math.round(base * ( 1 + 2.73))],
            [8, Math.round(base * ( 1 + 2.07)), Math.round(base * ( 1 + 3.93))],
            [9, Math.round(base * ( 1 + 1.80)), Math.round(base * ( 1 + 3.03))],
        ],
        averages = [
            [1, Math.round(base * ( 1 + 0.87))],
            [2, Math.round(base * ( 1 + 1.43))],
            [3, Math.round(base * ( 1 + 1.43))],
            [4, Math.round(base * ( 1 + 1.74))],
            [5, Math.round(base * ( 1 + 1.72))],
            [6, Math.round(base * ( 1 + 2.20))],
            [7, Math.round(base * ( 1 + 2.31))],
            [8, Math.round(base * ( 1 + 2.75))],
            [9, Math.round(base * ( 1 + 2.31))],
        ];
}


var chart = Highcharts.chart('container', {

    chart: {
        height: 600,
        style: {
            'margin': '0 auto',
        },
        spacingBottom: 50,
        spacingTop: 50,
        spacingRight: 150,
        spacingLeft: 150,
    },
    title: {
        text: ''
    },

    xAxis: {
        title: {
            text: 'Month of Upgrade',
            style: {
                color: '#17B09B',
                'font-size': '1.5rem',
                'line-height': '2rem',
                'font-weight': '800',
            }
        },
        labels: {
            style: {
                useHTML : true,
                color: '#272D4E',
                'background-color': '#272D4E',
                fontSize: '1.5rem',
                paddingTop: '10px',
            },
            backgroundColor: '#272D4E',
        },
        tickInterval: 1,
        align: 'right',
    },

    yAxis: {
        title: {
            //text: 'Increase in New Patient Calls',
            text: 'New Patient Call Amount',
            style: {
                color: '#17B09B',
                'font-size': '1.5rem',
                'line-height': '2rem',
                'font-weight': '800',
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: '#272D4E',
            },
        },
        // min: -200, max: 500,
        tickInterval: 50,
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{y}',
            },
        }
    },

    tooltip: {
        enabled: false,
        // crosshairs: true,
        // shared: true,
        // valueSuffix: '%',
        // yDecimals: 2,
        // followPointer: false,
        // formatter: function() {
        //     // return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage) +' %';
        // },
    },

    legend: {
    },

    series: [{
        name: 'Month of Upgrade',
        data: averages,
        zIndex: 1,
        type: 'line',
        color: '#F8981C',
        marker: {
            fillColor: 'white',
            lineWidth: 2,
            lineColor: '#F8981C',
        },
        dataLabels: {
            color: '#F8981C',
        },
    }, {
        name: 'Range',
        data: ranges,
        type: 'arearange',
        lineWidth: 0,
        linkedTo: ':previous',
        color: '#272D4E',
        fill: '#f8f8f8f',
        fillOpacity: 0.1,
        zIndex: 0,
        marker: {
            // enabled: true,
        },
        dataLabels: {
            color: '#272D4E',
        },
    }]
});