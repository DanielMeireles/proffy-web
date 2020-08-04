import React from 'react';

import PageHeader from '../../components/PageHeader';
import { PageTeacherList, SearchTeachers, Main, TeacherItem } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
  return (
    <PageTeacherList>
      <div id="page-teacher-list-content" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <SearchTeachers>
            <div>
              <label htmlFor="subject">
                Disciplina
                <input type="text" id="subject" />
              </label>
            </div>
            <div>
              <label htmlFor="week_day">
                Dia da semana
                <input type="text" id="week_day" />
              </label>
            </div>
            <div>
              <label htmlFor="time">
                Hora
                <input type="text" id="time" />
              </label>
            </div>
          </SearchTeachers>
        </PageHeader>
        <Main>
          <TeacherItem>
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/20533324?s=400&u=c2063eb8cd0bf52089b1af605aa10f813b33f67d&v=4"
                alt="Daniel Meireles"
              />
              <div>
                <strong>Daniel Meireles</strong>
                <span>Química</span>
              </div>
            </header>
            <p>
              Teste
              <br />
              <br />
              Teste
            </p>
            <footer>
              <p>
                Preço/hora
                <strong>$ 20,00</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
              </button>
            </footer>
          </TeacherItem>
        </Main>
      </div>
    </PageTeacherList>
  );
}

export default TeacherList;
