import styles from './admin-feature-orders.module.css';

export function AdminFeatureOrders() {
  return (
    <div className={styles['container']}>
      <h1>Order Management</h1>
      <p>View and manage orders</p>
    </div>
  );
}

export default AdminFeatureOrders;
