import React from 'react';
import { useState } from 'react';
import './index.css';

const Content = () => {

  const[cep, setCep] = useState('');
  const[error, setError] = useState(false);

  
  const handleSubmit = (event) => {
    event.preventDefault(); //para não recarregar a página ao clicar no botão de submit
  
  }

  return(
    <div className='contentContainer'>
      <div className='cardContainer'>
        <div className='inputContainer'>
          <div className='textContainer'>
            <h3>Digite um CEP</h3>
          </div>
          <form>
            <input type='text' className='inputStyle' placeholder='Ex.: 38810-000'></input>
          </form>
        </div>
        <div className='buttonContainer'>
          <button type='submit' className='buttonStyle'>Enviar</button>
        </div>
      </div>
    </div> 
  )
} 

export default Content