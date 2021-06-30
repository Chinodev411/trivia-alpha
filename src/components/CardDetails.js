import React from 'react'

// import { useState, useEffect } from 'react';

const CardDetails = (props) => {
  // console.log(props);
  return (
    <div className='details-container'>
      {props.match.params.correct_answer}
    </div>

  );

//   const [card, setCard] = useState(null);

//  const getCards = async () => {
//    const url = 'https://opentdb.com/api.php?amount=50&category=18';
//    try {
//      const response = await fetch(url + props.match.params.question);
//      const data = await response.json();
//      setCard(data);
//    } catch (err) {
//      console.log(err);
//    }
//  }; 

//  useEffect(() => {
//    getCards();
//  }, []);
//  if (card) {  
//   return (
//     <div className= 'details-container'>
      
//       <h2>{card.answer}</h2>
      
//     </div>
//   );
//  } else {
//    return null;
//  }
} 

export default CardDetails;
