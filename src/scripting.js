document.addEventListener('DOMContentLoaded', function() {
var ctx = document.getElementById('temperatureChart').getContext('2d');
var temperatureData = [22, 23, 21, 20, 25, 24, 26]; // Contoh data suhu
var labels = [1, 2, 3, 4, 5, 6]; // Label untuk data

var temperatureChart = new Chart(ctx, {
    type: 'bar', // Tipe chart, bisa diubah ke 'bar', 'pie', dll.
    data: {
    labels: labels,
    datasets: [{
        label: '',
        data: temperatureData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});
});


document.addEventListener('DOMContentLoaded', function() {
var ctx = document.getElementById('humidityChart').getContext('2d');
var temperatureData = [22, 23, 21, 20, 25, 24, 26]; // Contoh data suhu
var labels = [1, 2, 3, 4, 5, 6]; // Label untuk data

var temperatureChart = new Chart(ctx, {
    type: 'bar', // Tipe chart, bisa diubah ke 'bar', 'pie', dll.
    data: {
    labels: labels,
    datasets: [{
        label: '',
        data: temperatureData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});
});
    

document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('waterChart').getContext('2d');
    var temperatureData = [22, 23, 21, 20, 25, 24, 26]; // Contoh data suhu
    var labels = [1, 2, 3, 4, 5, 6]; // Label untuk data
    
    var temperatureChart = new Chart(ctx, {
        type: 'line', // Tipe chart, bisa diubah ke 'bar', 'pie', dll.
        data: {
        labels: labels,
        datasets: [{
            label: '',
            data: temperatureData,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    });


document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('foodChart').getContext('2d');
    var temperatureData = [22, 23, 21, 20, 25, 24, 26]; // Contoh data suhu
    var labels = [1, 2, 3, 4, 5, 6]; // Label untuk data
    
    var temperatureChart = new Chart(ctx, {
        type: 'line', // Tipe chart, bisa diubah ke 'bar', 'pie', dll.
        data: {
        labels: labels,
        datasets: [{
            label: '',
            data: temperatureData,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    });