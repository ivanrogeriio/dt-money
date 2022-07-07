import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

import iconcomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      total: 0,
      deposits: 0,
      withdraw: 0,
    }
  );

  return (
    <Container>
      <article>
        <div>
          <span>Entradas</span>
          <img src={iconcomeIcon} alt="entradas" />
        </div>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </article>

      <article>
        <div>
          <span>Saídas</span>
          <img src={outcomeIcon} alt="entradas" />
        </div>
        <strong>
          -{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraw)}
        </strong>
      </article>

      <article>
        <div>
          <span>Total</span>
          <img src={totalIcon} alt="entradas" />
        </div>
        <strong>
          {' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </article>
    </Container>
  );
}
