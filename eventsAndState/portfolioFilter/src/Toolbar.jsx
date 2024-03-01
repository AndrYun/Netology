import styles from './Toolbar.module.css';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className={styles.toolBar} selected={selected}>
      {filters.map((filter) => (
        <button key={filter} onClick={onSelectFilter}>
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
