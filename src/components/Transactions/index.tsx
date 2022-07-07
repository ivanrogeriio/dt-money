import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export function Transactions() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((res) => (
            <tr key={res.id}>
              <td>{res.tittle}</td>
              <td className={res.type}>
                {res.type === 'deposit' ? '' : '- '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(res.amount)}
              </td>
              <td>{res.category}</td>
              <td> {new Intl.DateTimeFormat('pt-BR').format(new Date(res.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
