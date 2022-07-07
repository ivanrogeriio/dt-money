import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface TransactionProps {
  id: string;
  tittle: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

interface TransactionProviderProps {
  children: ReactNode;
}

interface dataContext {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

const TransactionContext = createContext<dataContext>({} as dataContext);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((res) => {
        setTransactions(res.data.transactions);
      })
      .catch((err) => console.log(err));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() });

    const { transaction } = response.data;

    setTransactions([
      // Mantendo o que existe...
      ...transactions,
      // Adiconando mais
      transaction,
    ]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
