import React from 'react';
import SpinnerGif from '../../assets/Spinner.gif';

export default function Spinner() {
  return (
    <img src={SpinnerGif} className='spinner' alt='Loading...'/>
  )
}
