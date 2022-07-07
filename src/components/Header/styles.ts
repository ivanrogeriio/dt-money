import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.section`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0.75rem 2rem;

    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    background-color: var(--blue-light);
    border: none;
    border-radius: 0.25rem;

    transition: 0.3s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
