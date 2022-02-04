import React from 'react';
import Modal  from 'react-modal';

import { Container } from './styles';

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
            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Titulo'
                />
                <input
                    type="number"
                    placeholder='Valor'
                />

                <input
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
};


