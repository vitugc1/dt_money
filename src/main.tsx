import { createServer, Model } from 'miragejs';
import ReactDOM from 'react-dom'
import { App } from './App'

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelancer de websites',
                    type: 'deposit',
                    category: 'Dev',
                    amount: 6000,
                    createAt: new Date('2020-06-20 09:00:00'),
                },
                {
                    id: 2,
                    title: 'Aluguel',
                    type: 'withdraw',
                    category: 'Casa',
                    amount: 1100,
                    createAt: new Date('2020-07-20 11:00:00'),
                }

            ],
        })
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('transaction', data)
        })
    }
})

ReactDOM.render(<App />, document.getElementById('root'))
