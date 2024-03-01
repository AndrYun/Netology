import styles from './ShopItem.module.css';

function ShopItem(props) {
  return (
    <div>
      <div className={styles.shopItem}>
        <img src={props.img} />
        <h1>{props.name}</h1>
        <h3>{props.color}</h3>
        <p>{`$${props.price}`}</p>
        <button>Add to Card</button>
      </div>
    </div>
  );
}

export default ShopItem;
