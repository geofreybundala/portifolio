import React from 'react'
import MyCover from '../../assets/images/myProfile.png'

export const Cover = () => {
    return (
        <section className='d-flex justify-content-between container welcome-cover'>
           <div className="my-auto mx-auto">
               <h5>Hello, My name is </h5>
               <h3>Geofrey Bundala</h3>
               <p>
                   I'm fullstack developer based in Tanzania,<br/>I change Ideas into software
               </p>
               <button className="btn btn-round p-blue-btn">See My works</button>
           </div>

           <div>
               <img src={MyCover} />
           </div>
        </section>
    )
}

export default Cover
