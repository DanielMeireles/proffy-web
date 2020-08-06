import React from 'react';

import PageHeader from '../../components/PageHeader';
import { PageTeacherList, SearchTeachers, Main } from './styles';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
  return (
    <PageTeacherList>
      <div id="page-teacher-list-content" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <SearchTeachers>
            <Select
              name="subject"
              label="Disciplina"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Select
              name="week_day"
              label="Dia da semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
            <Input type="time" name="time" label="Hora" />
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
