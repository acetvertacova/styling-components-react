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
    <div className="bg-primary text-font border border-border p-4">
      <img src ={currentProfile.avatar} className="w-32 h-32 rounded-full mx-auto"/>
        <h2 className="text-2xl font-serif text-center mt-4">{currentProfile.name}</h2>
        <h3 className="text-lg font-serif text-center text-secondary mt-2">{currentProfile.position}</h3>
        <p className="text-center mt-2">{currentProfile.description}</p>

      <div className="flex justify-between mt-4">
        <button className="bg-secondary text-font py-2 px-4 rounded hover:bg-border" onClick={previosPost}>Previous post</button>
        <button className="bg-secondary text-font py-2 px-4 rounded hover:bg-border" onClick={nextPost}>Next post</button>
      </div>
    </div>
    )
}