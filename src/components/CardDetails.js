import React from 'react'


const CardDetails = (props) => {
  return (
    <div className='details-container'>
      {props.match.params.correct_answer}
    </div>

  );
} 

export default CardDetails;
