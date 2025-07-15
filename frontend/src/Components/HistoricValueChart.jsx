import React from 'react';
import Chart from 'chart.js/auto';

class HistoricValueChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.myChart = null;
  }

  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.data !== this.props.data ||
      prevProps.labels !== this.props.labels ||
      prevProps.color !== this.props.color
    ) {
      this.destroyChart();
      this.createChart();
    }
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  createChart() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [{
          label: 'Sales',
          data: this.props.data,
          fill: true,
          backgroundColor: this.props.color || 'rgba(54, 162, 235, 0.15)',
          borderColor: this.props.color || 'rgba(54, 162, 235, 1)',
          tension: 0.35,
          pointBackgroundColor: this.props.color || 'rgba(54, 162, 235, 1)',
          pointRadius: 4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
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
      <div style={{ width: "100%", height: "330px" }}>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default HistoricValueChart;