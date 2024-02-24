import IconSwitch from './IconSwitch';
import CardView from './CardView';
import Products from './Products';
import ListView from './ListView';
import './App.css';

function Store() {
  return (
    <div className="store__wrapp">
      <IconSwitch icon="View List" />
      <CardView cards={Products} />
      <ListView cards={Products} />
    </div>
  );
}

export default Store;
