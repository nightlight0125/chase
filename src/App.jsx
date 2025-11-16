import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Accounts from './pages/accounts/Accounts'
import AccountDetail from './pages/accounts/AccountDetail'
import PayTransfer from './pages/paytransfer/PayTransfer'
import CustomerInsights from './pages/customerinsights/CustomerInsights'
import Statements from './pages/statements/Statements'
import Security from './pages/security/Security'
import TwoFactorAuthentication from './pages/twofactor/TwoFactorAuthentication'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/accounts/detail" element={<AccountDetail />} />
        <Route path="/pay-transfer" element={<PayTransfer />} />
        <Route path="/customer-insights" element={<CustomerInsights />} />
        <Route path="/statements" element={<Statements />} />
        <Route path="/security" element={<Security />} />
        <Route path="/two-factor-authentication" element={<TwoFactorAuthentication />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
