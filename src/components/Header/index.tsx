import React from 'react';

import logoImg from '../../assets/Logo.svg';

import { Container, Content } from './styles';

export const Header: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
};


