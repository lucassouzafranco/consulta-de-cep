import React from 'react';
import './index.css';

const Content = () => {
  return(
    <>
      <div className='contentContainer'>
          <div className='inputContainer'>
            <form>
              <input type='text' name='name'></input>
              <input type='submit' value='send'></input>
            </form>
          </div>
      </div>
      
    </>
  )
} 

export default Content