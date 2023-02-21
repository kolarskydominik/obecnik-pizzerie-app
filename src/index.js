import App from './App';
import ReactDOM from 'react-dom/client';
import { ClearCacheProvider, useClearCacheCtx } from 'react-clear-cache';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClearCacheProvider duration={5000}>
    <App />
  </ClearCacheProvider>
);
