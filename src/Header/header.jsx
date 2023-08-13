import React from 'react'
import money from "../Assets/image-currency.jpg"
import eating from "../Assets/image-restaurant.jpg"
import plane from "../Assets/image-plane.jpg"
import congrulation from "../Assets/image-confetti.jpg"
import "./header.css"
const Header = () => {
  return (
    <div className='container'>
    <h1 className='left-side col3'>Latest Articles</h1>
    <section className='section'>
      
    
    
      <div className='flex-colm'>
    
        <div className='columns'>
          <img className='pictures' src={money} alt='money'/>
          <p className='small-font'>By Claire Robinson</p>
          <p className='col-bl'>Receive money in any <br/> currency with no fees</p>
          <p className='ch-col'>The world is getting smaller and <br/> we are becoming more mobile. So <br/> why should you be forced to only <br/> receive money in a single … </p>
        </div>
    
    
        <div className='columns'>
          <img className='pictures' src={eating} alt='money'/>
          <p className='small-font'>By Wilson Hutton</p>
          <p>Treat yourself without <br/> worrying about money</p>
          <p className='ch-col'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
        </div>
    
    
        <div className='columns'>
          <img className='pictures' src={plane} alt='money'/>
          <p className='small-font'>By Wilson Hutton</p>
          <p>Take your Easybank card <br/> wherever you go</p>
          <p className='ch-col'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
        </div>
    
    
        <div className='columns'>
          <img className='pictures' src={congrulation} alt='money'/>
          <p className='small-font'>By Claire Robinson</p>
          <p>Our invite-only Beta <br/> accounts are now live!</p>
          <p className='ch-col'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Header