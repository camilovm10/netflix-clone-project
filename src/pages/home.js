import React from 'react'
import { Feature, OptForm } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email adress" />
                        <OptForm.Button>Try it Now</OptForm.Button>
                        <OptForm.Break />
                    </OptForm>
                </Feature>
                
            </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            
        </>
    )
}