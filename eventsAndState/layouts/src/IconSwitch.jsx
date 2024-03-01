import styles from './IconSwitch.module.css';
import { TiThLarge, TiThMenu } from 'react-icons/ti';

function IconSwitch({ changeView, view }) {
  return (
    <div onClick={changeView} className={styles.iconSwitch}>
      {view ? <TiThLarge /> : <TiThMenu />}
    </div>
  );
}

export default IconSwitch;
