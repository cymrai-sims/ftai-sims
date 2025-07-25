import "./index.css";
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Pages
import Dashboard from './Pages/Dashboard/Dashboard';
import GlobalInventory from "./Pages/Inventory/GlobalInventory";
import UsageInsights from "./Pages/UsageInsights/UsageInsights";
import MinMax from "./Pages/MinMax/MinMax";
import Procurement from "./Pages/Procurement/Procurement";
import Maintenance from "./Pages/Maintenance/Maintenance";
import MyAccount from "./Pages/Account/MyAccount";
import Support from "./Pages/Support/Support";
import Requisitions from "./Pages/Requisitioins/Requisitions";
import NotFound from './Pages/404/NotFound';
import WorkOrders from './Pages/WorkOrders/WorkOrders';
import Calendar from './Pages/Calendar/Calendar';
import Settings from './Pages/Settings/Settings';
import Forecast from './Pages/Forecasting/Forecast';
import ScrapRates from './Pages/ScrapRates/ScrapRates';
import EOQs from './Pages/EOQs/EOQs';

// Items
import WorkOrderItem from './Pages/WorkOrders/WorkOrderItem';
import InventoryItem from './Pages/Inventory/InventoryItem';

// Inventory Components
import AARInventoryList from "./Pages/Inventory/AAR/AARInventory";
import MontrealInventoryList from "./Pages/Inventory/Montreal/MontrealInventory";
import MiamiInventoryList from "./Pages/Inventory/Miami/MiamiInventory";

// Auth Pages
import Login from './Auth/Login';
// import Signup from './Auth/SignUp';

// Layouts
import AppLayout from './Layouts/AppLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}

        {/* Routes without authentication */}
        <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/procurement" element={<AppLayout><Procurement /></AppLayout>} />

        {/* Inventory */}
        <Route path="/inventory/global-inventory" element={<AppLayout><GlobalInventory /></AppLayout>} />
        <Route path="/inventory/usage-insights" element={<AppLayout><UsageInsights /></AppLayout>} />
        <Route path="/inventory/min-max" element={<AppLayout><MinMax /></AppLayout>} />
        <Route path="/inventory/work-orders" element={<AppLayout><WorkOrders /></AppLayout>} />
        <Route path="/inventory/forecast" element={<AppLayout><Forecast /></AppLayout>} />
        <Route path="/inventory/scrap-rates" element={<AppLayout><ScrapRates /></AppLayout>} />

        {/* Other Pages */}
        <Route path="/inventory/economic-order-quantities" element={<AppLayout><EOQs /></AppLayout>} />
        <Route path="/maintenance" element={<AppLayout><Maintenance /></AppLayout>} />
        <Route path="/accounts" element={<AppLayout><MyAccount /></AppLayout>} />
        <Route path="/support" element={<AppLayout><Support /></AppLayout>} />
        <Route path="/requisitions" element={<AppLayout><Requisitions /></AppLayout>} />
        <Route path="/calendar" element={<AppLayout><Calendar /></AppLayout>} />
        <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
        <Route path="*" element={<NotFound />} />

        {/* Items */}
        {/* <Route path="work-order/work-orders/:id" element={<AppLayout><WorkOrderItem /></AppLayout>} /> */}
        <Route path="work-order/work-order-temp" element={<AppLayout><WorkOrderItem /></AppLayout>} />
        <Route path="inventory/inventory-temp" element={<AppLayout><InventoryItem /></AppLayout>} />

        {/* Inventory Lists */}
        <Route path="/inventory/aar-inventory" element={<AppLayout><AARInventoryList /></AppLayout>} />
        <Route path="/inventory/montreal-inventory" element={<AppLayout><MontrealInventoryList /></AppLayout>} />
        <Route path="/inventory/miami-inventory" element={<AppLayout><MiamiInventoryList /></AppLayout>} />
      </Routes>
    </Router>
  );
};

export default App;