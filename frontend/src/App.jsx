import "./index.css";
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Inventory from "./Pages/Inventory";
import UsageInsights from "./Pages/UsageInsights";
import MinMax from "./Pages/MinMax";
import Procurement from "./Pages/Procurement";
import Maintenance from "./Pages/Maintenance";
import MyAccount from "./Pages/MyAccount";
import Support from "./Pages/Support";
import Requisitions from "./Pages/Requisitions";
import NotFound from './pages/NotFound';
import WorkOrders from './pages/WorkOrders';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings';

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
        <Route path="/" element={<AppLayout><Home /></AppLayout>} />
        <Route path="/procurement" element={<AppLayout><Procurement /></AppLayout>} />
        <Route path="/inventory/global-inventory" element={<AppLayout><Inventory /></AppLayout>} />
        <Route path="/inventory/usage-insights" element={<AppLayout><UsageInsights /></AppLayout>} />
        <Route path="/inventory/min-max" element={<AppLayout><MinMax /></AppLayout>} />
        <Route path="/inventory/work-orders" element={<AppLayout><WorkOrders /></AppLayout>} />
        <Route path="/maintenance" element={<AppLayout><Maintenance /></AppLayout>} />
        <Route path="/accounts" element={<AppLayout><MyAccount /></AppLayout>} />
        <Route path="/support" element={<AppLayout><Support /></AppLayout>} />
        <Route path="/requisitions" element={<AppLayout><Requisitions /></AppLayout>} />
        <Route path="/calendar" element={<AppLayout><Calendar /></AppLayout>} />
        <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;