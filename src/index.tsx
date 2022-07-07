import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          tittle: 'Desenvolvimento de site',
          amount: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date('2021-04-03 09:00:00'),
        },
        {
          id: 2,
          tittle: 'Hamburguer',
          amount: 59,
          type: 'withdraw',
          category: 'Alimentação',
          createdAt: new Date('2021-04-10 11:00:00'),
        },
        {
          id: 3,
          tittle: 'Aluguel do apartamento',
          amount: 1200,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-03-27 11:00:00'),
        },
        {
          id: 4,
          tittle: 'Notebook',
          amount: 5400,
          type: 'deposit',
          category: 'Venda',
          createdAt: new Date('2021-03-15 11:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
