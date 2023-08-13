import React from 'react'
import "./section.css"
import icononline from "../Assets/icon-online.svg"
import phonedollars from "../Assets/icon-budgeting.svg"
import iconboarding from "../Assets/icon-onboarding.svg"
import iconapi from "../Assets/icon-api.svg"


const section = () => {
  return (
    <div className='mainpart'>
          
          <h1 className='left-side header'>Why choose Easybank?</h1>
          <p className='left-side'>We leverage Open Banking to turn your bank account into your financial hub.<br/>Control your finances like never before.</p>
            
            <div className='main'>

              <div className='parametrs'>
                <div className='load-part'>
                  <img src={icononline} alt='icononline'/>
                  <h4>Online Banking</h4>
                  <p>Our modern web and mobile <br/> applications allow you to keep <br/> track of your finances wherever you <br/> are in the world.</p>
                </div>
              </div>

              <div className='parametrs'>
                <div className='load-part'>
                  <img src={phonedollars} alt='icononline'/>
                  <h4>Simple Budgeting</h4>
                  <p>See exactly where your money <br/> goes each month. Receive <br/> notifications when you are close to <br/> hitting your limits.</p>
                </div>
              </div>

              <div className='parametrs'>
                <div className='load-part'>
                  <img src={iconboarding} alt='icononline'/>
                  <h4>Fast Onboarding</h4>
                  <p>We dont do branches. Open your <br/> account in minutes online and start <br/> taking control of your finances <br/> right away.</p>
                </div>
              </div>

              <div className='parametrs'>
                <div className='load-part'>
                  <img src={iconapi} alt='icononline'/>
                  <h4>Open API</h4>
                  <p>Manage your savings, investments, <br/> pension, and much more from one <br/> account. Tracking your money has <br/> never been easier.</p>
                </div>
              </div>
            </div>
            </div>
  )
}

export default section