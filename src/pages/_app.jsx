// _app.js

import React from 'react';
import App from 'next/app';
import '../styles/globals.css';

// Components
import Navbar from '../components/General/Navbar';

const meta = {
    favicon: "/logo.png",
    title: "Blog do Dev's Café",
    description: "Blog oficial da comunidade.",
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                {/* Load meta */}
                <title>{meta.title}</title>
                <link rel="icon" href={meta.favicon} />
                <meta name="description" content={meta.description} />
                {/* Load components */}
                <Navbar />
                <span style={{margin: "10",}}></span>
                <Component {...pageProps} />
            </div>
        );
    }
}