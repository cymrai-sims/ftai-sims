import React from 'react';
import Chart from 'chart.js/auto';

class InventoryValueChart extends React.Component {
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
    // Tabular key
    return (
      <div className="flex flex-row gap-4 w-full">
        <div className="w-full">
          <canvas ref={this.chartRef} />
        </div>
        <div className="mt-6">
          <table className="min-w-full text-left border border-gray-200 rounded">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 font-semibold text-gray-700">Location</th>
                <th className="py-2 px-4 font-semibold text-gray-700">Value</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((item, idx) => (
                <tr key={item.label} className="border-t border-gray-100">
                  <td className="py-2 px-4 flex items-center gap-2">
                    <span
                      style={{
                        display: 'inline-block',
                        width: '0.8rem',
                        height: '0.8rem',
                        // borderRadius: '50%',
                        background: this.props.colors[idx],
                        marginRight: 6
                      }}
                    />
                    {item.label}
                  </td>
                  <td className="py-2 px-4 font-bold text-gray-900">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default InventoryValueChart;