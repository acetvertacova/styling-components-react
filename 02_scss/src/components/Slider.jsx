import {profiles} from './profiles';
import { useState } from 'react'

export default function Slider() {

    const [index, setCurrentIndex] = useState(0);

    function nextPost() {
        if (index < profiles.length - 1) {
          setCurrentIndex(index + 1);
        }
    }

    function previosPost() {
        if (index > 0) {
          setCurrentIndex(index - 1);
        }
    }

    let currentProfile = profiles[index];

    return(
    <div className='profile-slide'>
      
        <img src ={currentProfile.avatar} className='avatar'/>
        <h2 className='name'>{currentProfile.name}</h2>
        <h3 className='position'>{currentProfile.position}</h3>
        <p className='decription'>{currentProfile.description}</p>
    
    <div className='slider-button'>
        <button onClick={previosPost}>Previous post</button>
        <button onClick={nextPost}>Next post</button>
    </div>

    </div>
    )
}