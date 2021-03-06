import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  article {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-tittle);

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2.25rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }

  article:last-child {
    background-color: var(--green);
    color: var(--shape);
  }
`;
