import React from 'react';
import Card from './cards'; // Import the Card component
import cardData from './cardData'; // Import the data source

function CardList() {
  return (
    <div className="ml-16 mt-[10rem] gap-10 flex flex-wrap">
      {cardData.map((card, index, link) => (
        <Card key={index} title={card.name} description={card.favDomain} link={card.link}/>
      ))}
    </div>
  );
}

export default CardList;
