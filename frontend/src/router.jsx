import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import { Error_404 } from './pages/404';
import { DeveloperPage } from './pages/Developer';
import { LicensePage } from './pages/License';
import { ShoppingPage } from './pages/Shopping';
import { WalletPage } from './pages/Wallet';
import { ProgressBar } from './components/progressBar';
import { LoginPage } from './pages/Login';

import { NewsPage } from './pages/News';
import { ToastContainer } from 'react-toastify';
import { DialogProvider } from './context/dialog';
import Loading from './components/loading';
import { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('./pages/Dashboard'));

const AppRoutes = () => {
  return (
    <Router>
      <ToastContainer theme='colored' />
      <DialogProvider>
        <ProgressBar />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route
              path='/dashboard'
              element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route path='/developer' element={<DeveloperPage />} />
            <Route path='/license' element={<LicensePage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/shopping' element={<ShoppingPage />} />
            <Route path='/wallet' element={<WalletPage />} />
            <Route path='/404' element={<Error_404 />} />
            <Route path='*' element={<Error_404 />} />
          </Route>
        </Routes>
      </DialogProvider>
    </Router>
  );
};

export default AppRoutes;
