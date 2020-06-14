import React from 'react';
import { Container, Details, Img, Title, Description } from './styles';
import img13 from '../../images/13.png'

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
            </Details>
            <Description>
                Mantenha suas parceirias em dia, use o quickPay para fazer suas cobranças.
            </Description>

            <Img source={img13} />
        </Container>
    );
}