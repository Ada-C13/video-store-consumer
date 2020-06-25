
import React, { useEffect } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  useEffect(() => {
    document.title = "LA Videos title"
  }, []);

    return (
      <section>
        <Header />
      </section>
    );
}

export default App;