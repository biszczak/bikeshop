import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
import Top from './Top';
// import Newsletter from './Newsletter';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
    <Router >
      <ScrollToTop>
        <div className="app">
          {<Top />}


          <div className="container">
            {/* <header> */}
            <Route path="/" exact component={Header} />
            {/* </header> */}
            <main>
              <section className="blog">
                {<Page />}
              </section>


            </main>
            <footer>
              {<Footer />}
            </footer>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
