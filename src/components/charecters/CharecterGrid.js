import React from 'react'
import CharecterItem from './CharecterItem'
import Spinner from '../ui/Spinner'

export default function CharecterGrid({ isLoading, charecters }) {
  return isLoading 
    ? <Spinner />
    : (
        <section className='cards'>
            { charecters.map(charecter => (
                <CharecterItem key={charecter.id} charecter={charecter} />
            )) }
        </section>
    )
}
