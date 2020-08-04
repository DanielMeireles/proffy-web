import React from 'react';

import PageHeader from '../../components/PageHeader';
import { PageTeacherList, SearchTeachers, Main } from './styles';
import TeacherItem from '../../components/TeacherItem';

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
          <TeacherItem />
        </Main>
      </div>
    </PageTeacherList>
  );
}

export default TeacherList;
