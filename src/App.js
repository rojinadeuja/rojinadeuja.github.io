import React from 'react';
import './App.css';
// import Header from './Components/Shared/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Shared/Footer';


function App() {
  return (
    <div className="wrapper">
      {/* <header className="header">
        <Header></Header>
      </header> */}
      <main className="main">
        <Main></Main>
      </main>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
