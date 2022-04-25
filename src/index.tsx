import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';

import './styles/styles.scss'
import configureStore from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore();
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);