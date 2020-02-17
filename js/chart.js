var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: '',
            backgroundColor: '#6986b1',
            borderColor: '#6986b1',
            data: [80, 74, 55, 62, 60, 70, 45]
        }]
    },
    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: 20,
    scaleStartValue: 0,


    // Configuration options go here
    options: {
        title:{
            display: false,
            text: "Sales for the Month",
        },
        legend: {
            display: false,
        },
        tooltips:{
            color: 'white',
            backgroundColor: '#6986b1',
            label: function(tooltipItem, data){
                return tooltipItem.xLabel;
            },
            displayColors: false,
        },

        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                }
            }],
            yAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    beginAtZero: true,
                }
            }]
        },

        label: {
            display: false,
        }

    }
});

//Line chart
var line = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(line, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: '',
            backgroundColor: '#6986b1',
            borderColor: '#6986b1',
            data: [56, 78, 105, 72, 60, 80, 65]
        }]
    },
    // Configuration options go here
    options: {
        title:{
            display: false,
        },
        legend: {
            display: false,
        },
        tooltips:{
            color: 'white',
            backgroundColor: '#6986b1',
            label: function(tooltipItem, data){
                return tooltipItem.xLabel;
            },
            displayColors: false,
            scaleFontSize: 0,
        },

        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
               
            }],
            yAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    beginAtZero: true,
                }
            }]
        },

        label: {
            display: false,
        }

    }
});

//Doughnut chart for Team

var dough = document.getElementById('doughChart').getContext('2d');
var chart = new Chart(dough, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My Pie chart',
            backgroundColor: [
                '#477ac7',
                '#09dda8',
                '#0e91e9',
                'pink',
                'teal',
                '#3e0688',
                '#8FC3FF'
            ],
            hoverBorderColor:"",
            borderColor: '',
            borderWidth: 0,
            data: [80, 74, 55, 62, 60, 70, 45]
        }]
    },
   
    // Configuration options go here
    options: {
        title:{
            display: false,
        },
        legend: {
            display: true,
        },
        tooltips:{
            color: 'white',
            backgroundColor: '#6986b1',
            label: function(tooltipItem, data){
                return tooltipItem.xLabel;
            },
            displayColors: false,
        },

        scales: {
            xAxes: [
                {
              display: false,
            }],
            yAxes: [{
                display: false,
                
            }]
        },

        label: {
            display: true,
        }

    }
});

//Doughnut Chart for Management

var managementChart = document.getElementById('managementChart').getContext('2d');
var chart = new Chart(managementChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My Pie chart',
            backgroundColor: [
                '#477ac7',
                '#09dda8',
                '#0e91e9',
                'pink',
                'teal',
                '#3e0688',
                '#8FC3FF'
            ],
            hoverBorderColor:"",
            borderColor: '',
            borderWidth: 0,
            data: [15, 62, 102, 40, 31, 50, 23]
        }]
    },
   
    // Configuration options go here
    options: {
        title:{
            display: false,
        },
        legend: {
            display: true,
        },
        tooltips:{
            color: 'white',
            backgroundColor: '#6986b1',
            label: function(tooltipItem, data){
                return tooltipItem.xLabel;
            },
            displayColors: false,
        },

        scales: {
            xAxes: [
                {
              display: false,
            }],
            yAxes: [{
                display: false,
                
            }]
        },

        label: {
            display: true,
        }

    }
});

//Doughnut chart for vendor
//Doughnut Chart for Management

var vendorChart = document.getElementById('vendorChart').getContext('2d');
var chart = new Chart(vendorChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My Pie chart',
            backgroundColor: [
                '#477ac7',
                '#09dda8',
                '#0e91e9',
                'pink',
                'teal',
                '#3e0688',
                '#8FC3FF'
            ],
            hoverBorderColor:"",
            borderColor: '',
            borderWidth: 0,
            data: [85, 20, 67, 110, 42, 38, 97]
        }]
    },
   
    // Configuration options go here
    options: {
        title:{
            display: false,
        },
        legend: {
            display: true,
        },
        tooltips:{
            color: 'white',
            backgroundColor: '#6986b1',
            label: function(tooltipItem, data){
                return tooltipItem.xLabel;
            },
            displayColors: false,
        },

        scales: {
            xAxes: [
                {
              display: false,
            }],
            yAxes: [{
                display: false,
                
            }]
        },

        label: {
            display: true,
        }

    }
});