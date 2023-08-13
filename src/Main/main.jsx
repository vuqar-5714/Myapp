import "./main.css"
import React from 'react'
import sectionlogo from "../Assets/bg-intro-desktop.svg"

const Main = () => {
  return (
    <div className='section'>

    <div className='main-part'>
        <h1 className='head'>Next generation <br/> digital banking</h1>

        <p>Take your financial life online. Your Easybank account <br/> will be a one-stop-shop for spending, saving, <br/> budgeting, investing, and much more.</p>
        <button className='my-btn' type='button'>Request Invite</button>
      </div>
      
      <img className='section-logo' src={sectionlogo} alt='section-logo'/>
      
      
    </div>
  )
}

export default Main