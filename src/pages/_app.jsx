// _app.js

import React from 'react';
import App from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

// Components
import Navbar from '../components/General/Navbar';



export default class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <Head>
                    <title>Dev's Cafe blog</title>
                    <link rel="icon" href="/logo.png" />
                </Head>
                <Navbar />
                <span style={{margin: "10",}}></span>
                <Component {...pageProps} />
            </div>
        );
    }
}