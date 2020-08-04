import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  PageLanding,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections,
} from './styles';

function Landing() {
  return (
    <PageLanding>
      <div id="page-landing-content" className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <HeroImage
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <ButtonsContainer className="buttons-container">
          <a href="teste" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="teste" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </a>
        </ButtonsContainer>
        <TotalConnections className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </div>
    </PageLanding>
  );
}

export default Landing;
