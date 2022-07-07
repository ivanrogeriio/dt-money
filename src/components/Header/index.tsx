import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

interface HeaderProps {
  onOpenedTransactionModal: () => void;
}

export function Header({ onOpenedTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt-money" />
        <button type="button" onClick={onOpenedTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
