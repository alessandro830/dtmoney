import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model, Server } from "miragejs"
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  
  seeds(server: Server) {
    server.db.loadData({
      transactions: [
      {
        id: 1,
        title: "Freelance de Website",
        type: "deposit",
        category: "Dev",
        amount: 6000,
        createdAt: new Date("2024-08-11 21:27")
      },
      {
        id: 2,
        title: "Aluguel",
        type: "withdraw",
        category: "Casa",
        amount: 1100,
        createdAt: new Date("2024-08-14 21:27")
      },
      ],
    })
  },
  
  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post('/transactions', (schema: any, request: any) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);