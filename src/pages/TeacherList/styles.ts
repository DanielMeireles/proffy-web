import styled from 'styled-components';

export const PageTeacherList = styled.div`
  #page-teacher-list-content {
    width: 100vw;
    height: 100vh;

    @media (min-width: 700px) {
      max-width: 100%;
    }
  }
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 32px 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
