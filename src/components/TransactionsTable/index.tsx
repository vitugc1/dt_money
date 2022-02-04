import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles'

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

export const TransactionsTable: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(res => setTransactions(res.data.transactions))
    }, []);

    return (
        <Container>
            <table>

                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', 
                                        { 
                                            style: 'currency',
                                            currency: 'BRL' 
                                        }).format(transaction.amount)
                                    }
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createAt)
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </Container>
    )
};

