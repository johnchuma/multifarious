import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/register_page';
import LoginPage from './pages/login_page';
import LayoutPage from './pages/layout_page';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPage from './pages/dashboard_page';
import YoutubePage from './pages/youtube_page';
import TikTokPage from './pages/tiktok_page';
import AuthProvider, { AuthContext } from './utils/auth_provider';
import './aeonik.css'
import PrivateRoute from './controller/private_route';
import InvitedUsers from './pages/invited_users';
import SelcomPayment from './pages/selcom_payment';
import PaymentPage from './pages/payment_page';
import EarningsPage from './pages/earnings_page';
import HistoryPage from './pages/history_page';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register/:referral" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/payment" element={<PaymentPage />} />

          <Route path="/" element={< PrivateRoute > <LayoutPage/></PrivateRoute>}>
            <Route path="/"  element={<DashboardPage />} />
            <Route path="/youtube" element={<YoutubePage />} />
            <Route path="/tiktok" element={<TikTokPage />} />
            <Route path="/invitedUsers" element={<InvitedUsers />} />
            <Route path="/earnings" element={<EarningsPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
