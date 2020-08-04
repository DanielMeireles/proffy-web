import React from 'react';

import PageHeader from '../../components/PageHeader';
import { PageTeacherForm } from './styles';

function TeacherForm() {
  return (
    <PageTeacherForm>
      <div id="page-teacher-form-content" className="container">
        <PageHeader title="Que incrível que você quer dar aulas." />
      </div>
    </PageTeacherForm>
  );
}

export default TeacherForm;
