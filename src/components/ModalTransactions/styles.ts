import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h1 {
    color: var(--text-tittle);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    &:focus {
      outline: none;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;

    margin-top: 1.5rem;
    padding: 0 1.5rem;

    font-weight: 600;
    font-size: 1rem;
    color: var(--shape);

    background-color: var(--green);

    border: none;
    border-radius: 0.25rem;

    transition: 0.3s ease;

    & {
      background-color: var(--green);
    }

    &:hover {
      background-color: var(--green-light);
    }
  }
`;

export const TransactionType = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#12A454',
  red: '#E52E4D',
};

export const RadioBox = styled.button<RadioBoxProps>`
  background-color: ${(props) => (props.isActive ? transparentize(0.8, colors[props.activeColor]) : 'transparent')};
  border: 1.5px solid ${(props) => (props.isActive ? 'transparent' : '#d7d7d7')};
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem 4rem;

  font-size: 1rem;
  font-weight: 400;
  color: var(--text-tittle);

  transition: 0.3s ease;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: cover;
  }
`;
