import React from 'react';
import Chart from 'chart.js/auto';

class HistoricValueChart extends React.Component {
  constructor() {
    super();
    this.chartRef = React.createRef();
    this.myChart = null;

    // Default monthly labels
    this.labels = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"
    ];

    // Separate datasets
    this.montrealData = [1900, 1500, 1700, 1400, 1900, 2200, 2100];
    this.miamiData = [1200, 1100, 1300, 1200, 1400, 1500, 1600];
    this.aarData = [700, 400, 400, 200, 500, 700, 500];

    // Colors for lines
    this.montrealColor = 'rgb(7, 46, 64)';
    this.miamiColor = 'rgb(18, 150, 186)';
    this.aarColor = 'rgb(243, 107, 33)';
  }

  componentDidMount() {
    this.createChart();
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  createChart() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Montreal',
            data: this.montrealData,
            fill: false,
            borderColor: this.montrealColor,
            backgroundColor: this.montrealColor,
            tension: 0.35,
            pointBackgroundColor: this.montrealColor,
            pointRadius: 4,
          },
          {
            label: 'Miami',
            data: this.miamiData,
            fill: false,
            borderColor: this.miamiColor,
            backgroundColor: this.miamiColor,
            tension: 0.35,
            pointBackgroundColor: this.miamiColor,
            pointRadius: 4,
          },
          {
            label: 'AAR',
            data: this.aarData,
            fill: false,
            borderColor: this.aarColor,
            backgroundColor: this.aarColor,
            tension: 0.35,
            pointBackgroundColor: this.aarColor,
            pointRadius: 4,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#f1f1f1'
            }
          },
          x: {
            grid: {
              color: '#f1f1f1'
            }
          }
        }
      }
    });
  }

  destroyChart() {
    if (this.myChart) {
      this.myChart.destroy();
      this.myChart = null;
    }
  }

  render() {
    return (
      <div className="w-full">
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default HistoricValueChart;