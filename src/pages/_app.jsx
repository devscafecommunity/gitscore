// _app.js

import React from 'react';
import App from 'next/app';
import '../styles/globals.css';

// Components
import Navbar from '../components/General/Navbar';

const meta = {
    favicon: "/logo.png",
    title: "Blog do Dev's Café",
    image: "/logo.png",
    url: "https://blog.devscafe.pt/",
    description: "Blog oficial da comunidade.",
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <Navbar />
                <span style={{margin: "10",}}></span>
                <Component {...pageProps} />
            </div>
        );
    }
}