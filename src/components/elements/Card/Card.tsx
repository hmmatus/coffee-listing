import Image from "next/image";
import styles from "./Card.module.scss";
import { CardI } from "@/models/Card.model";
type Props = {
  card: CardI;
};
type RatingP = {
  rating:number | null | string;
  votes: number;
  available: boolean;
};
const Card = ({ card }: Props) => {
  const { image, name, price, rating, votes, available } = card;

  const RatingComponent = ({ rating, votes, available }: RatingP) => {
    const isRated = votes > 0;
    return (
      <div className={`${styles.flex} ${styles.row} ${styles.jc} ${styles.ai} ${styles['mt-10']}`}>
        <div className={`${styles.flex} ${styles.row} ${styles.ai}`}>
          <Image
            alt="Star"
            width={20}
            height={20}
            src={`./images/svg/${isRated ? "Star_fill.svg" : "Star.svg"}`}
          />
          {isRated && <h3 className={styles["header-text"]}>{rating}</h3>}
          <p className={styles["desc-text"]}>{`${
            isRated ? `(${votes} votes)` : "No ratings"
          }`}</p>
        </div>
        {!available && <p className={styles['error-text']}>Sold out</p>}
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <img className={styles.img} src={image} alt={name}/>
      </div>
      <div className={styles.header}>
        <div className={`${styles.flex} ${styles.row} ${styles.jc}`}>
          <h3 className={styles["header-text"]}>{name}</h3>
          <div className={styles["price-container"]}>
            <p className={styles.price}>{`${price}`}</p>
          </div>
        </div>
        <RatingComponent rating={rating} votes={votes} available={available}/>
      </div>
    </div>
  );
};

export default Card;
