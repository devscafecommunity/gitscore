// _app.js

import React from 'react';
import App from 'next/app';
import '../styles/globals.css';

// Components
import Navbar from '../components/General/Navbar';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <Navbar />
                <Component {...pageProps} />
            </div>
        );
    }
}