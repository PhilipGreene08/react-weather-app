import Header from './pages/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Main from './pages/Main';
import AboutPage from './pages/AboutPage';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
  return (
    <Router>
      <Header />
      <div className='weather-app'>
        <Main />
        <Routes>
          <Route path='/' element={<Fragment></Fragment>} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
