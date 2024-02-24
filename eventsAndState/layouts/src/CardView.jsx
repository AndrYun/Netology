import styles from './CardView.module.css';
import ShopCard from './ShopCard';

function CardView({ cards }) {
  return (
    <div className={styles.cardView__container}>
      {cards.map((card) => (
        <ShopCard {...card} />
      ))}
    </div>
  );
}

export default CardView;
