import React from 'react';
import Chart from 'chart.js/auto';

class DoughnutChart extends React.Component {
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
      prevProps.colors !== this.props.colors
    ) {
      this.destroyChart();
      this.createChart();
    }
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  createChart() {
    // Find the largest value for "pop out" effect
    const values = this.props.data.map(d => d.value);
    const max = Math.max(...values);

    // Set offset for the largest segment, others get 0
    const offsets = values.map(v => v === max ? 30 : 0);

    // Custom plugin for shadow
    const shadowPlugin = {
      id: 'customShadow',
      beforeDraw: (chart) => {
        const { ctx } = chart;
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.15)';
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 6;
      },
      afterDraw: (chart) => {
        chart.ctx.restore();
      }
    };

    this.myChart = new Chart(this.chartRef.current, {
      type: 'doughnut',
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          data: values,
          backgroundColor: this.props.colors,
          offset: offsets,
        }],
      },
      options: {
        responsive: true,
        cutout: '50%', // smaller value = thicker ring
        radius: '95%', // make the chart slightly larger
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      },
      plugins: [shadowPlugin],
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
      <div style={{ width: "100%", height: "350px" }}>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default DoughnutChart;