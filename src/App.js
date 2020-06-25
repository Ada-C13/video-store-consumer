
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  useEffect(() => {
    document.title = "LA Videos title"
  }, []);

    return (
      <section>
        <Header />
        <Footer />
      </section>
    );
}

export default App;