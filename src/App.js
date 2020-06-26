
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const App = () => {
  useEffect(() => {
    document.title = "LA Videos title"
  }, []);

    return (
      <section className="">
        <ReactNotification />
        <Header />
        <Footer />
      </section>
    );
}

export default App;