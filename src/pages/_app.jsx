// _app.js
import React from 'react';
import App from 'next/app';
import Head from 'next/head';

// Components
import Navbar from '../components/General/Navbar/Navbar';

// CSS
import '../styles/body.css';

const meta = {
  title: "Blog Dev's Café",
  favicon: "/logo.png",
  description: "Blog oficial da comunidade dev's café.",
  image: "/logo.png",
  color: "#8C583A"
};

export default class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <Head>
                  <title>{meta.title}</title>
                  <link rel="icon" href={meta.favicon} />
                  <meta name="description" content={meta.description} />
                  <meta property="og:title" content={meta.title} />
                  <meta property="og:description" content={meta.description} />
                  <meta property="og:image" content={meta.image} />
                  <meta name="theme-color" content={meta.color} />
                </Head>
                <Navbar />
                <span style={{margin: "10",}}></span>
                <Component {...pageProps} />
            </div>
        );
    }
}
