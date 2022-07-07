import { useState } from 'react';

import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { ModalTransactions } from './components/ModalTransactions';
import { TransactionProvider } from './hooks/useTransactions';

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  Modal.setAppElement('#root');

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenedTransactionModal={handleOpenTransactionModal} />

      <ModalTransactions isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      <Dashboard />
    </TransactionProvider>
  );
}
