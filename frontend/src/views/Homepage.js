import React from 'react'
import Message from './Message'
import Registerpage from './Registerpage'

function Homepage() {
  const token = localStorage.getItem("authTokens")
  
  return (
    <div>
      <>
        <>
            <div >
              {token === null && <Registerpage/>}
              {token !== null && 
              <>
              <div className='container row center'>
                <div className='col-lg-1 col-xl-1 border-right m-6'>
                  <div className="position-relative center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        className="rounded-circle mr-1"
                        alt="Sharon Lessman"
                       width={40}
                        height={40}
                      />
                      <p></p>
                    </div>
                    <div className='border mb-5'>
                      <div className='sidebar_icons'>
                        <i className="fas fa-search"></i> 
                        <i className="far fa-bookmark"></i>
                        <i className="fas fa-home"></i> 
                      </div>
                    </div>
                    <div>
                      <div className='bottom-icons'>
                        <i className="fas fa-cog"></i> 
                        <i className="fas fa-palette"></i> 
                      </div>
                    </div>
                </div>
                <div className='col-lg-10 col-xl-10 border-right '>
                  <Message/>
                </div>

              </div>
              </>}
              
            </div>
          </>
      </>

    </div>
  )
}

export default Homepage