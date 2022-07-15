import React from 'react';
import './index.css';
import {Icon} from "@iconify/react";
import {SiLinkedin} from "@react-icons/all-files/si/SiLinkedin";
import {GoMarkGithub} from "@react-icons/all-files/go/GoMarkGithub";

const Footer = () => {
  return(
    <div>
      <footer>
        <div className='containerText'>
          <p>This page was built using ReactJS⚛️ and an API called <a href='https://docs.awesomeapi.com.br/'>Awesome API</a></p>
        </div>
        <div className='containerSocial'>
          <div className='containerIcons'>
            <a href='https://www.linkedin.com/in/lucas-souza-franco/'>
              <SiLinkedin className='icons'></SiLinkedin>
            </a>
            <a href='https://linktr.ee/lucassouzafranco'>
              <Icon icon="simple-icons:linktree" className='icons'/>
            </a>
            <a href='https://github.com/lucassouzafranco'>
              <GoMarkGithub className='icons'/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer