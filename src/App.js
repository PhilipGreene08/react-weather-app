import Header from './pages/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Main from './pages/Main';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className='weather-app'>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
