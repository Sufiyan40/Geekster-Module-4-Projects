document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('myChart').getContext('2d');
  
    // Initial data for the chart
    const initialData = {
      labels: [], // Empty labels for dynamic data
      datasets: [{
        label: 'Real-Time Data',
        data: [], // Empty data array for dynamic data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1
      }]
    };
  
    // Create the chart
    const myChart = new Chart(ctx, {
      type: 'line',
      data: initialData,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Time (seconds)'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });
  
    // Function to update the chart with new data
    function updateChart() {
      const time = (myChart.data.labels.length + 1); // Increment time
      const randomValue = Math.floor(Math.random() * 100); // Generate random data
  
      // Add new data
      myChart.data.labels.push(time);
      myChart.data.datasets[0].data.push(randomValue);
  
      // Update the chart
      myChart.update();
  
      // Repeat the update every second
      setTimeout(updateChart, 1000);
    }
  
    // Start the chart updates
    updateChart();
  });
  