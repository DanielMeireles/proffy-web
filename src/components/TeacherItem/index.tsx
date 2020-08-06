/* eslint-disable react/prop-types */
import React from 'react';

import { Item, Header, Footer } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
  teacher: {
    id: string;
    name: string;
    subject: string;
    bio: string;
    cost: number;
    avatar: string;
    whatsapp: string;
  };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <Item>
      <Header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>
      <p className="description">{teacher.bio}</p>
      <Footer>
        <p>
          Preço/hora
          <strong>{`R$ ${teacher.cost}`}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </Footer>
    </Item>
  );
};

export default TeacherItem;
