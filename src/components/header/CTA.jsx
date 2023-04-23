import React from 'react'
import CV from '../../assets/cv.pdf'
export const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="mailto:samyaksk10@gmail.com" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA