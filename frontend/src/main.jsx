import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import QueryProvider from './context/QueryContext.jsx';
import NewsProvider from './context/news/index.jsx';
import { GlobalProvider } from './context/global/index.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryProvider>
      <NewsProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </NewsProvider>
    </QueryProvider>
  </StrictMode>
);
