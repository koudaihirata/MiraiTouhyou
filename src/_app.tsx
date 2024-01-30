import axios from 'axios';


import App, { AppContext } from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
    const news = response.data;

    return { pageProps, news };
  }

  render() {
    const { Component, pageProps, news } = this.props;

    return <Component {...pageProps} news={news} />
  }
}

export default MyApp;