import React from "react";
import Chart from "chart.js/auto";

// Helper to generate random numbers for chart data
const generateInventoryData = () => [
  Math.floor(Math.random() * 50) + 10,  // On PO
  Math.floor(Math.random() * 200) + 50, // On-hand
  Math.floor(Math.random() * 30) + 5    // On Reserve
];

const storeConfigs = [
  { name: "Miami", colorSet: ["#F8C630", "#AFDCED", "#072E40"] },
  { name: "Montreal", colorSet: ["#F8C630", "#AFDCED", "#072E40"] },
  { name: "AAR", colorSet: ["#F8C630", "#AFDCED", "#072E40"] }
];

class PieChart extends React.Component {
  chartRef = React.createRef();
  myChart = null;

  componentDidMount() {
    this.createChart();
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  createChart() {
    this.myChart = new Chart(this.chartRef.current, {
      type: "pie",
      data: {
        labels: ["On PO", "On-hand", "On Reserve"],
        datasets: [
          {
            data: this.props.data,
            backgroundColor: this.props.colors,
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
        responsive: true,
        maintainAspectRatio: false,
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
      <div className="w-full h-full items-center justify-center">
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

const InventoryStoreValues = () => {
  return (
    <div className="flex flex-col px-5 py-5 gap-5 overflow-x-auto">
      <h4 className="pb-10">Inventory Store Charts</h4>
      <div className="flex flex-row gap-5 justify-between items-center max-w-full">
        {storeConfigs.map((store, idx) => (
          <div key={store.name} className="bg-white p-4 flex flex-col items-center">
            <h5 className="font-semibold mb-2 text-[var(--dark-main)] pb-4">{store.name}</h5>
            <PieChart data={generateInventoryData()} colors={store.colorSet} />
            {/* <div className="mt-2 text-xs text-gray-700">
              {["On PO", "On-hand", "On Reserve"].map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    style={{
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      // borderRadius: "50%",
                      background: store.colorSet[i]
                    }}
                  />
                  {label}
                </div>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryStoreValues;