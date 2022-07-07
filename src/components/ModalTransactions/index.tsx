import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, RadioBox, TransactionType } from './styles';

import Modal from 'react-modal';

import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalTransactions({ isOpen, onRequestClose }: ModalProps) {
  const { createTransaction } = useTransactions();

  const [tittle, setTittle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('desposit');

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      tittle,
      category,
      amount: amount,
      type,
    });

    setTittle('');
    setCategory('');
    setAmount(0);
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeIcon} alt="" />
      </button>
      <Container onSubmit={handleCreateTransaction}>
        <h1>Cadastrar transação</h1>

        <input type="text" placeholder="Título" value={tittle} onChange={(event) => setTittle(event.target.value)} />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionType>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIcon} alt="entrada" />
            Entrada
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="saída" />
            Saída
          </RadioBox>
        </TransactionType>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit" onClick={handleCreateTransaction}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
