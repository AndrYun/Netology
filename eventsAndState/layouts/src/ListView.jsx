import styles from './ListView.module.css';
import ShopItem from './ShopItem';

function ListView({ cards }) {
  return (
    <div className={styles.listView__container}>
      {cards.map((card) => (
        <ShopItem {...card} />
      ))}
    </div>
  );
}

export default ListView;
