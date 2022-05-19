import GlobalStyle from './styles';

import Routes from './routes/Routes';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <GlobalStyle />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
