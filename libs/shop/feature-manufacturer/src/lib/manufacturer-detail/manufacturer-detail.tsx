import { useParams, useNavigate } from 'react-router-dom';
import styles from './manufacturer-detail.module.css';

export function ManufacturerDetail() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!name) {
    return (
      <div className={styles['manufacturer-detail-container']}>
        <div className={styles['error']}>Manufacturer name not found</div>
      </div>
    );
  }

  return (
    <div className={styles['manufacturer-detail-container']}>
      <button className={styles['back-button']} onClick={handleBackClick}>
        ← Back
      </button>

      <div className={styles['manufacturer-detail']}>
        <h1 className={styles['manufacturer-name']}>{decodeURIComponent(name)}</h1>
        <p className={styles['manufacturer-subtitle']}>Manufacturer Information</p>
      </div>
    </div>
  );
}

export default ManufacturerDetail;
