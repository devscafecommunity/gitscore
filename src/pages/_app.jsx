// _app.js

import React from 'react';
import App from 'next/app';
import '../styles/globals.css';

// Components
import Navbar from '../components/General/Navbar';

const meta = {
    favicon: "/logo.png",
    title: "Blog Dev's Café",
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <Head>
                    <title>{meta.title}</title>
                    <link rel="icon" href={meta.favicon} />
                </Head>
                <Navbar />
                <span style={{margin: "10",}}></span>
                <Component {...pageProps} />
            </div>
        );
    }
}