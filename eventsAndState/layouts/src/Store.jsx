import IconSwitch from './IconSwitch';
import CardView from './CardView';
import Products from './Products';
import ListView from './ListView';
import './App.css';
import { useState } from 'react';

function Store() {
  const [view, setView] = useState(true);
  const changeViewHandler = () => {
    setView(!view);
  };

  return (
    <div className="store__wrapp">
      <IconSwitch changeView={changeViewHandler} view={view} />
      {view ? <CardView cards={Products} /> : <ListView cards={Products} />}
    </div>
  );
}

export default Store;
