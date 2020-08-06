/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Header, TopBarContainer, HeaderContent } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Header className="page-header">
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoIcon} id="Proffy" alt="Proffy" />
      </TopBarContainer>
      <HeaderContent className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
        {props.children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
