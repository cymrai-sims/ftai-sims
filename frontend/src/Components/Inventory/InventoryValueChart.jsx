import React from "react";
import Chart from "chart.js/auto";
import { Link } from "react-router-dom";
import ChatButton from "../AI/ChatButton";

class InventoryValueChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.myChart = null;
    this.handleChartClick = this.handleChartClick.bind(this);
  }

  componentDidMount() {
    const { data, colors } = this.props;
    if (Array.isArray(data) && Array.isArray(colors)) {
      this.createChart();
    }
  }

  componentDidUpdate(prevProps) {
    const { data, colors } = this.props;
    if (
      Array.isArray(data) &&
      Array.isArray(colors) &&
      (prevProps.data !== data || prevProps.colors !== colors)
    ) {
      this.destroyChart();
      this.createChart();
    }
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  getInventoryRoute(label) {
    const normalized = label.toLowerCase();
    if (normalized.includes("aar")) return "/inventory/aar-inventory";
    if (normalized.includes("montreal")) return "/inventory/montreal-inventory";
    if (normalized.includes("miami")) return "/inventory/miami-inventory";
    return null;
  }

  handleChartClick(evt) {
    if (!this.myChart) return;
    const points = this.myChart.getElementsAtEventForMode(
      evt,
      "nearest",
      { intersect: true },
      false
    );
    if (points.length === 0) return;
    const idx = points[0].index;
    const label = this.props.data[idx].label;
    const route = this.getInventoryRoute(label);
    if (route) {
      window.location.hash = "#" + route; // HashRouter navigation
    }
  }

  createChart() {
    const { data, colors } = this.props;
    if (!Array.isArray(data) || !Array.isArray(colors)) return;

    const values = data.map((d) => d.value);
    const max = Math.max(...values);
    const offsets = values.map((v) => (v === max ? 30 : 0));

    const shadowPlugin = {
      id: "customShadow",
      beforeDraw: (chart) => {
        const { ctx } = chart;
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.15)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 6;
      },
      afterDraw: (chart) => {
        chart.ctx.restore();
      },
    };

    this.myChart = new Chart(this.chartRef.current, {
      type: "doughnut",
      data: {
        labels: data.map((d) => d.label),
        datasets: [
          {
            data: values,
            backgroundColor: colors,
            offset: offsets,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "50%",
        radius: "95%",
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
        onClick: this.handleChartClick,
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
    const { onChatClick, data, colors } = this.props;

    if (!Array.isArray(data) || !Array.isArray(colors)) {
      return <div>Loading chart...</div>;
    }

    return (
      <>
        <h3 className="text-[var(--dark-main)] py-3 px-2 font-bold">
          Value Statistics
        </h3>
        <div className="flex flex-row gap-4 w-full overflow-x-auto relative group">
          {/* ChatButton shown only on hover */}
          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ChatButton onClick={onChatClick} />
          </div>
          <div className="w-full">
            <canvas ref={this.chartRef} style={{ cursor: "pointer" }} />
          </div>
          <div className="mt-6">
            <table className="min-w-full text-left border border-gray-200 rounded">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    Location
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => {
                  const route = this.getInventoryRoute(item.label);
                  return (
                    <tr key={item.label} className="border-t border-gray-100">
                      <td className="py-2 px-4 flex items-center gap-2">
                        <span
                          style={{
                            display: "inline-block",
                            width: "0.8rem",
                            height: "0.8rem",
                            background: colors[idx],
                            marginRight: 6,
                          }}
                        />
                        {route ? (
                          <Link
                            to={route}
                            className="text-[var(--dark-main)] hover:text-[var(--orange-main)] hover:underline"
                            title={`Go to ${item.label} inventory`}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          item.label
                        )}
                      </td>
                      <td className="py-2 px-4 font-bold text-gray-900">
                        {item.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default InventoryValueChart;