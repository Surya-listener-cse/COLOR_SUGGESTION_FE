import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js/auto';

Chart.register(...registerables);

function ChartComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Red', 'Blue', 'Yellow' ,'pink' , "purple", 'Orange' ],
      datasets: [{
        label: 'My First Dataset',
        data: [70, 50, 100, 40 , 50 ,60],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'pink',
          'purple',
          'orange'
        ],
        hoverOffset: 6
      }]
    };

    const ctx = document.getElementById('myChart');

    if (ctx) {
      // Destroy existing chart instance if it exists
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }

      // Create new chart instance
      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: data,
      });
    }
  }, []);

  return (
    <div className='chart-page'>
      <h6>Available Colors</h6>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default ChartComponent;