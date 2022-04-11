import React from 'react'
import MyCover from '../../assets/images/me.png'
import { AiOutlineLinkedin , AiOutlineGithub} from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';

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
                   I'm fullstack developer based in Tanzania,<br/>Let`s create build together 🤝
               </p>

               <div className="mx-4 mb-2 social-link d-flex justify-content-between">
                    <span><FiTwitter size="23px"/></span>
                    <span><AiOutlineGithub size="23px"/></span>
                    <span><AiOutlineLinkedin size="23px"/></span>
               </div>
               <button className="btn btn-round p-blue-btn">Download my Resume</button>
           </div>

          
        </section>
    )
}

export default Cover
