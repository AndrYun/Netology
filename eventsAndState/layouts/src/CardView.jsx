import styles from './CardView.module.css';
import ShopCard from './ShopCard';

function CardView({ cards }) {
  return (
    <div className={styles.cardView__container}>
      {cards.map((card, index) => (
        <ShopCard {...card} key={index} />
      ))}
    </div>
  );
}

export default CardView;
