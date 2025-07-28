import React from "react";
import Chart from "chart.js/auto";
import ChatButton from "../AI/ChatButton";

// Helper to generate random numbers for chart data
const generateInventoryData = () => [
  Math.floor(Math.random() * 50) + 10,  // On PO
  Math.floor(Math.random() * 200) + 50, // On-hand
  Math.floor(Math.random() * 30) + 5    // On Reserve
];

// Use your specified color codes:
const COLOR_PO = "#F36B21";      // --orange-main
const COLOR_ONHAND = "#1296BA";  // --blue-main
const COLOR_RESERVE = "#072E40"; // --dark-main

const storeConfigs = [
  { name: "Miami", colorSet: [COLOR_PO, COLOR_ONHAND, COLOR_RESERVE] },
  { name: "Montreal", colorSet: [COLOR_PO, COLOR_ONHAND, COLOR_RESERVE] },
  { name: "AAR", colorSet: [COLOR_PO, COLOR_ONHAND, COLOR_RESERVE] }
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
            labels: {
              font: { family: "var(--primary-font)", size: 13 }
            }
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
      <div className="w-full h-full items-center justify-center min-h-[200px]">
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

const InventoryStoreValues = () => {
  return (
    <div className="flex flex-col p-2 gap-5 overflow-x-auto relative group">
      {/* ChatButton shown only on hover */}
      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ChatButton onClick={() => alert('Chat opened')} />
      </div>
      <h3 className="pb-3 font-bold text-[var(--dark-main)]">Inventory Store Charts</h3>
      <div className="flex flex-row gap-5 justify-between items-center max-w-full">
        {storeConfigs.map((store, idx) => (
          <div key={store.name} className="bg-white p-4 flex flex-col items-center min-w-[260px]">
            <h5 className="font-semibold mb-2 text-[var(--dark-main)] pb-4">{store.name}</h5>
            <PieChart data={generateInventoryData()} colors={store.colorSet} />
            {/* <div className="mt-3 text-xs text-gray-700 w-full">
              {["On PO", "On-hand", "On Reserve"].map((label, i) => (
                <div key={label} className="flex items-center gap-2 mb-1">
                  <span
                    style={{
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: store.colorSet[i]
                    }}
                  />
                  <span className="font-medium">{label}</span>
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