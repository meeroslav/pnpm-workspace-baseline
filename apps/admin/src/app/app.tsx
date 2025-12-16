import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { LoadingSpinner } from '@org/admin-shared-ui';
import './app.css';

// Lazy load feature components
const OrderList = lazy(() => import('@org/admin-feature-orders').then(m => ({ default: m.AdminFeatureOrders })));
const ProductManagement = lazy(() => import('@org/admin-feature-products').then(m => ({ default: m.AdminFeatureProducts })));
const AnalyticsDashboard = lazy(() => import('@org/admin-feature-analytics').then(m => ({ default: m.AdminFeatureAnalytics })));

export function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Admin Dashboard</h1>
          <nav className="app-nav">
            <Link to="/orders" className="nav-link">Orders</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/analytics" className="nav-link">Analytics</Link>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/orders" replace />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="*" element={<Navigate to="/orders" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
