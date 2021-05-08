import React from 'react'
import MyCover from '../../assets/images/me.png'

export const Cover = () => {
    return (
        <section className='d-flex justify-content-between container welcome-cover'>
             <div className="cover-image">
               <img src={MyCover} alt=''/>
           </div>

           <div className="my-auto mx-auto">
               <h5 className='text-gray'>Hello, My name is </h5>
               <h3>Geofrey Bundala</h3>
               <p className="text-gray">
                   I'm fullstack developer based in Tanzania,<br/>I change Ideas into software
               </p>
               <button className="btn btn-round p-blue-btn">See My works</button>
           </div>

          
        </section>
    )
}

export default Cover
