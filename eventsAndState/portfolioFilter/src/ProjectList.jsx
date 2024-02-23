import styles from './ProjectList.module.css';

function ProjectList({ cards }) {
  return (
    <div className={styles.projectList}>
      {cards.map((el, index) => (
        <img key={index} src={el.img} alt={el.category} />
      ))}
    </div>
  );
}

export default ProjectList;
