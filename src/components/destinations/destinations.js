import React from 'react'
import './destinationsStyles.css'

import BoraBora from '../../assests/borabora.jpg'
import BoraBora2 from '../../assests/borabora2.jpg'
import Maldives from '../../assests/maldives.jpg'
import Maldives2 from '../../assests/maldives2.jpg'
import KeyWest from '../../assests/keywest.jpg'

function destinations() {
  return (
    <div className='destinations'>
        <div className="container">
                <h1>All-Iclusive Resorts</h1>
                <p>On the Caribbean's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/" />
                    <img src={BoraBora2} alt="/" />
                    <img src={Maldives} alt="/" />
                    <img src={Maldives2} alt="/" />
                    <img src={KeyWest} alt="/" />
                </div>
        </div>
    </div>
  )
}

export default destinations