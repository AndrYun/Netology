import styles from './ShopCard.module.css';

function ShopCard(props) {
  return (
    <div className={styles.shopCard}>
      <div className={styles.shopCard__name}>
        <h1>{props.name}</h1>
      </div>
      <div className={styles.shopCard__color}>
        <h3>{props.color}</h3>
      </div>
      <div className={styles.shopCard__img}>
        <img src={props.img} />
      </div>
      <div className={styles.shopCard__bottom}>
        <p>{`$${props.price}`}</p>
        <button>Add to Card</button>
      </div>
    </div>
  );
}

export default ShopCard;
