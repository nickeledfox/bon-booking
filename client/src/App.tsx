import 'normalize.css';
import GlobalStyle from './styles';

import Routes from './routes/Routes';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <GlobalStyle />
      <Routes />
    </div>
  );
};

export default App;
