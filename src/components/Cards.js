import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Cards = ({cards}) => {
  if (!cards.length){
    return null;
  }
  return (
      <section className='container'>
        {cards.map((card)=> {
          if (card.question) {
            return (
              <Link to={`/answer/${card.correct_answer}`} key={card.correct_answer}>
                <div className='card'>
                    <h6 className="card-q">{card.question}</h6>
                </div>
              </Link>
            );
          } else if (!cards.length){
            return null;
          }
        })}

      </section>
      
  );
}

export default Cards;