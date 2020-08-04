import React from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Header, TopBarContainer, HeaderContent } from './styles';

interface PageHeaderProps {
  title: string;
}

// eslint-disable-next-line react/prop-types
const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Header>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoIcon} id="Proffy" alt="Proffy" />
      </TopBarContainer>
      <HeaderContent>
        <strong>{title}</strong>
        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
