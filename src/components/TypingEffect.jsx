import React from 'react'
import { useState, useEffect } from 'react'
import './TypingEffect.css'

const TypingEffect = () => {
    {/* TODO: Hacer que cuando no se este visualizando no corra el typingEffect */}
    const [actives, setActives] = useState(true)
    
    const [paragraphCounter,setParagraphCounter] = useState(0)
    // TODO: Pasar los datos a utils
    const words = ["Web design", "FrontEnd developer", "Backend developer", "FullStack developer"]

    useEffect(() => {
      const intervalID = setInterval(() => {
        setParagraphCounter((currentValue) => {
          if(currentValue + 1 === words.length) {
            return 0;
          }
          return currentValue + 1;
        })
      }, 3000);
      return () => clearInterval(intervalID)
    },[])
  

  return (
    <div className='writing-effect-container'>
        {actives && <span className={`writing-effect ${'typing'+paragraphCounter}`}>{words[paragraphCounter]}</span>}
    </div>
  )
}

export default TypingEffect