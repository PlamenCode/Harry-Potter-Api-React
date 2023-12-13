import React from 'react'

export default function CharecterItem({ charecter }) {
  return (
    <div className="card">
        <div className="card-inner">
            <div className="card-front">
                <img src={charecter.image} alt="" />
            </div>
            <div className="card-back">
                <h1>{charecter.name}</h1>
                <ul>
                    <li>Actor: {charecter.actor}</li>
                    <li>Data of Birth: {charecter.dateOfBirth}</li>
                    <li>Gender: {charecter.gender}</li>
                    <li>House: {charecter.house}</li>
                    <li>Species: {charecter.species}</li>
                    <li>Status: {charecter.alive ? 'alive' : 'dead'}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
