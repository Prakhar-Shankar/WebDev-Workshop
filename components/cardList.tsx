import React from 'react';
import Card from './cards'; // Import the Card component
import cardData from './cardData'; // Import the data source

function CardList() {
  return (
    <div className="ml-16 mt-[10rem] flex gap-10">
      {cardData.map((card, index, link) => (
        <Card key={index} title={card.domain} description={card.name} link={card.link}/>
      ))}
    </div>
  );
}

export default CardList;
