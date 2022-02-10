import React from 'react';
import { useTransactions } from '../../hooks/useTransaction';

import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';

import { Container } from './styles';

export const Summary: React.FC = () => {
    const { transactions } = useTransactions();

    const sumary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        }else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        deposit: 0,
        withdraw: 0,
        total: 0,
    })

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', 
                        { 
                            style: 'currency',
                            currency: 'BRL' 
                        }).format(sumary.deposit)
                    }
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-
                    {new Intl.NumberFormat('pt-BR', 
                        { 
                            style: 'currency',
                            currency: 'BRL' 
                        }).format(sumary.withdraw)
                    }
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', 
                        { 
                            style: 'currency',
                            currency: 'BRL' 
                        }).format(sumary.total)
                    }
                </strong>
            </div>
        </Container>
    )
};


