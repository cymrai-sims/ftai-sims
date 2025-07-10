import "./index.css";
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Inventory from "./Pages/Inventory";
import Procurement from "./Pages/Procurement";
import Maintenance from "./Pages/Maintenance";
import MyAccounts from "./Pages/Settings";
import Support from "./Pages/Support";
import Requisitions from "./Pages/Requisitions";
import NotFound from './pages/NotFound';

// Auth Pages
import Login from './Auth/Login';
// import Signup from './Auth/SignUp';

// Providers
import PrivateRoute from "./Providers/PrivateRoute"; 
import AuthProvider from "./Providers/AuthProvider"; 

// Layouts
import AppLayout from './Layouts/AppLayout';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}

        {/* Protected routes */}  
        <Route
          path="/"
          element={
            <PrivateRoute>
              <AppLayout>
                <Home />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/procurement"
          element={
            <PrivateRoute>
              <AppLayout>
                <Procurement />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <PrivateRoute>
              <AppLayout>
                <Inventory />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/maintenance"
          element={
            <PrivateRoute>
              <AppLayout>
                <Maintenance />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/accounts"
          element={
            <PrivateRoute>
              <AppLayout>
                <MyAccount />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/support"
          element={
            <PrivateRoute>
              <AppLayout>
                <Support />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/requisitions"
          element={
            <PrivateRoute>
              <AppLayout>
                <Requisitions />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />        
      </Routes>

    </Router>
    </AuthProvider>
  );
};

export default App;