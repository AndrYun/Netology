import styles from './ShopItem.module.css';

function ShopItem(props) {
  return (
    <div>
      <div className={styles.shopItem}>
        <div className={styles.shopItem__name}>
          <h1>{props.name}</h1>
        </div>
        <div className={styles.shopItem__color}>
          <h3>{props.color}</h3>
        </div>
        <div className={styles.shopItem__img}>
          <img src={props.img} />
        </div>
        <div className={styles.shopItem__bottom}>
          <p>{`$${props.price}`}</p>
          <button>Add to Card</button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
