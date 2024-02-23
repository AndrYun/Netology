import { useState } from 'react';
import './App.css';
import Cards from './Cards';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList.jsx';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cards, setCards] = useState(Cards);

  const onSelectedFilter = (e) => {
    let pushedButton = e.target.textContent;
    setSelectedCategory(pushedButton);

    if (pushedButton === 'All') {
      setCards(Cards);
    } else {
      setCards(Cards.filter((el) => el.category === pushedButton));
    }
  };

  return (
    <div className="portfolio-wrapp">
      <Toolbar
        filters={['All', 'Websites', 'Flayers', 'Business Cards']}
        selected={selectedCategory}
        onSelectFilter={onSelectedFilter}
      />
      <ProjectList cards={cards} />
    </div>
  );
}

export default Portfolio;
