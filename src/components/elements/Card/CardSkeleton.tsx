import styles from './Card.module.scss'
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => (
  <div className={styles.container}>
    <div className={styles["image-container"]}>
      <Skeleton height={200} />
    </div>
    <div className={styles.header}>
      <div className={`${styles.flex} ${styles.row} ${styles.jc}`}>
        <h3 className={styles["header-text"]}>
          <Skeleton width={100} />
        </h3>
        <div className={styles["price-container"]}>
          <Skeleton width={60} />
        </div>
      </div>
      <div
        className={`${styles.flex} ${styles.row} ${styles.jc} ${styles.ai} ${styles["mt-10"]}`}
      >
        <div className={`${styles.flex} ${styles.row} ${styles.ai}`}>
          <Skeleton circle width={20} height={20} />
          <Skeleton width={30} />
          <Skeleton width={50} />
        </div>
        <p className={styles["error-text"]}>
          <Skeleton width={60} />
        </p>
      </div>
    </div>
  </div>
);

export default SkeletonCard;