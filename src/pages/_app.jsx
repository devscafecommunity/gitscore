// _app.js

import React from 'react';
import App from 'next/app';
import Head from 'next/head';

// Components
import Navbar from '../components/General/Navbar';

// CSS
import '../styles/header.css';
import '../styles/navbar.css';
import '../styles/post.css';
import '../styles/searchBar.css';
import '../styles/body.css';


export default class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <Head>
                    <title>Dev's Cafe blog</title>
                    <link rel="icon" href="https://blog.devscafe.pt/logo.png" />
                </Head>
                <Navbar />
                <span style={{margin: "10",}}></span>
                <Component {...pageProps} />
            </div>
        );
    }
}