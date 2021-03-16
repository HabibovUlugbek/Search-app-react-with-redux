import { BrowserRouter} from 'react-router-dom'
import Routes from "./routes";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise';

import reducers from './reducers'

const createStoreWithMiddlaware = applyMiddleware(promiseMiddleware)(createStore)

function App() {
  return (
    <Provider store={createStoreWithMiddlaware(reducers)}>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
