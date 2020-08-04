import React from 'react';

import { Item, Header, Footer } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <Item>
      <Header>
        <img
          src="https://avatars3.githubusercontent.com/u/20533324?s=400&u=c2063eb8cd0bf52089b1af605aa10f813b33f67d&v=4"
          alt="Daniel Meireles"
        />
        <div>
          <strong>Daniel Meireles</strong>
          <span>Química</span>
        </div>
      </Header>
      <p className="description">
        Teste
        <br />
        <br />
        Teste
      </p>
      <Footer>
        <p>
          Preço/hora
          <strong>$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </Footer>
    </Item>
  );
}

export default TeacherItem;
