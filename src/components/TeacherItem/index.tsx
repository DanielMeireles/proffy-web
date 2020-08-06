/* eslint-disable react/prop-types */
import React from 'react';

import { Item, Header, Footer } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface TeacherItemProps {
  teacher: {
    class_id: string;
    user_id: string;
    name: string;
    subject: string;
    bio: string;
    cost: number;
    avatar: string;
    whatsapp: string;
  };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.user_id,
    });
  }

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
        <a
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </Footer>
    </Item>
  );
};

export default TeacherItem;
