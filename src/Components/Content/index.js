import './index.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Content = () => {

  const[cep, setCep] = useState('');
  const[error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); //para não recarregar a página ao clicar no botão de submit
  }

  const handleInputLimit = (event) => {
    if (cep.length < 8) { 
      window.alert("Para um CEP ser válido, ele precisa possuir 8 dígitos.");
    }
  }

  console.log(cep);

  return(
    <div className='contentContainer'>
      <div className='cardContainer'>
        <div className='inputContainer'>
          <div className='textContainer'><h4>Digite um CEP</h4></div>
          <form onSubmit={handleSubmit}>
            <input 
            type='text'
            maxLength={9}
            className='inputStyle' 
            placeholder='Ex.: 38810-000'
            onChange={event => setCep(event.target.value)}>
            </input>
          </form>
        </div>
        <div className='buttonContainer'>
          <button type='submit' className='buttonStyle' onClick={handleInputLimit}>Enviar</button>
        </div>
      </div>
    </div> 
  )
} 

export default Content