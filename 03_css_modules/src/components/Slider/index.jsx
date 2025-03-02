import {profiles} from './profiles';
import { useState } from 'react'
import styles from "./Slider.module.scss" 

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
    
    <div className={styles.profileSlide}>

    <div className={styles.profile}>
        <img src ={currentProfile.avatar} className={styles.avatar} />
        <h2 className={styles.name}>{currentProfile.name}</h2>
        <h3 className={styles.position}>{currentProfile.position}</h3>
        <p className={styles.description}>{currentProfile.description}</p>
    </div>
      <div className={styles.buttons}>
        <button onClick={previosPost}>Previous post</button>
        <button onClick={nextPost}>Next post</button>
      </div>
    </div>
    
    )
}