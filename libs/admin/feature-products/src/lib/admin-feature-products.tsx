import styles from './admin-feature-products.module.css';

export function AdminFeatureProducts() {
  return (
    <div className={styles['container']}>
      <h1>Product Management</h1>
      <p>Manage product inventory and details</p>
    </div>
  );
}

export default AdminFeatureProducts;
