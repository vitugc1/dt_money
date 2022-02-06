import React from 'react';
import Modal  from 'react-modal';

import closeImg from '../../assets/close.svg';
import { Container , TransactionTypeContainer } from './styles';

interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionProps> = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Titulo'
                />
                <input
                    type="number"
                    placeholder='Valor'
                />

                <TransactionTypeContainer>

                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
};


