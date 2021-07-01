import React from 'react'

// import { useState, useEffect } from 'react';

const CardDetails = (props) => {
  // console.log(props);
  return (
    <div className='details-container'>
      {props.match.params.correct_answer}
    </div>

  );
} 

export default CardDetails;
