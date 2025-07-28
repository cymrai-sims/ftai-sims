import React from 'react';
import Chart from 'chart.js/auto';
import ChatButton from '../AI/ChatButton';
import { Link } from 'react-router-dom'; // Assuming you might want to use Link for navigation

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

    // Bind the new click handler
    this.handleChartClick = this.handleChartClick.bind(this);
  }

  componentDidMount() {
    this.createChart();
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  // New click handler for the line chart
  handleChartClick(evt) {
    if (!this.myChart) return;

    // getElementsAtEventForMode allows you to get chart elements at the click position
    const points = this.myChart.getElementsAtEventForMode(
      evt,
      'nearest',
      { intersect: true },
      false
    );

    if (points.length === 0) return;

    // Get the index of the clicked point
    const datasetIndex = points[0].datasetIndex;
    const index = points[0].index;

    // Access the label and data for the clicked point
    const label = this.labels[index];
    const datasetLabel = this.myChart.data.datasets[datasetIndex].label;
    const value = this.myChart.data.datasets[datasetIndex].data[index];

    console.log(`Clicked on: ${datasetLabel} for ${label} with value ${value}`);

    // --- Example Navigation (Optional) ---
    // You could navigate to a detailed page based on the clicked data point.
    // For example, if you had a route like /historic-data/:location/:month
    // const route = `/historic-data/${datasetLabel.toLowerCase()}/${label.toLowerCase()}`;
    // if (route) {
    //   window.location.hash = "#" + route; // For HashRouter
    // }
    // --- End Example Navigation ---
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
        },
        // ADD THIS onClick HANDLER
        onClick: this.handleChartClick,
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
    const { onChatClick } = this.props;

    return (
      <div className="w-full p-2 relative group">
        {/* ChatButton shown only on hover */}
        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ChatButton onClick={onChatClick} />
        </div>

        <h3 className='text-[var(--dark-main)] py-3 px-2 font-bold'>Historic Inventory Value Overview</h3>
        <canvas ref={this.chartRef} style={{ cursor: "pointer" }} />
      </div>
    );
  }
}

export default HistoricValueChart;