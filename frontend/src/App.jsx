import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home = () => (
  <div style={{ padding: 16 }}>
    <h2>DBOCWWB Cess Portal (Prototype)</h2>
    <p>Welcome! Use the navigation above.</p>
  </div>
)
const Register = () => <div style={{padding:16}}><h3>Register</h3></div>
const MIS = () => <div style={{padding:16}}><h3>MIS</h3></div>
const Inspections = () => <div style={{padding:16}}><h3>Inspections</h3></div>
const Notices = () => <div style={{padding:16}}><h3>Notices</h3></div>
const BulkUpload = () => <div style={{padding:16}}><h3>Bulk Upload</h3></div>
const ChangeContact = () => <div style={{padding:16}}><h3>Profile / Change Contact</h3></div>
const ForgotPassword = () => <div style={{padding:16}}><h3>Forgot Password</h3></div>

export default function App() {
  return (
    <div>
      <div style={{ display:'flex', alignItems:'center', gap:12, padding:'8px 12px', borderBottom:'1px solid #eee' }}>
        <img src="/dbocwwb-logo.png" alt="DBOCWWB" style={{ height: 32 }} />
        <b>DBOCWWB Cess Portal</b>
        <nav style={{ display:'flex', gap:12, marginLeft: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/mis">MIS</Link>
          <Link to="/inspections">Inspections</Link>
          <Link to="/notices">Notices</Link>
          <Link to="/bulk">Bulk Upload</Link>
          <Link to="/change-contact">Profile</Link>
          <Link to="/forgot">Forgot Password</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/mis" element={<MIS/>} />
        <Route path="/inspections" element={<Inspections/>} />
        <Route path="/notices" element={<Notices/>} />
        <Route path="/bulk" element={<BulkUpload/>} />
        <Route path="/change-contact" element={<ChangeContact/>} />
        <Route path="/forgot" element={<ForgotPassword/>} />
      </Routes>
    </div>
  )
}
