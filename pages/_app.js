import React from 'react';
import App, {Container} from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

export default class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props
        return (
            <Container>
                    <Component {...pageProps} />
            </Container>
        );
    }
}