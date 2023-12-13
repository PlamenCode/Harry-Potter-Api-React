import React, { useState } from 'react'

export default function Search({ setFilter }) {
    const [text, setText]= useState('');

    function onChange(text) {
        setText(text);
        setFilter(text);
    }
  return (
    <section className='search'>
        <form>
            <input type="text" className='form-control' 
                placeholder='Search Charecters'
                autoFocus
                value={text}
                onChange={(e) => onChange(e.target.value)}
            />
        </form>
    </section>
  )
}
