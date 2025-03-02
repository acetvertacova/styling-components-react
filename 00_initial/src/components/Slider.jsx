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
    <div>
      <img src ={currentProfile.avatar} />
        <h2>{currentProfile.name}</h2>
        <h3>{currentProfile.position}</h3>
        <p>{currentProfile.description}</p>

    <button onClick={previosPost}>Previous post</button>
    <button onClick={nextPost}>Next post</button>
    </div>
    )
}