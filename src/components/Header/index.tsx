import React from 'react';

import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
};


