import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Loader } from './cmps/Loader'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { EditorPage } from './pages/EditorPage'
import { Templates } from './pages/Templates'
import { LoginSignupPage } from './pages/LoginSignupPage'
import { Dashboard } from './pages/Dashboard'
import { Publish } from './pages/Publish'
import { Err404 } from './pages/Err404'
import { Footer } from './cmps/Footer'
import { AppMsg } from './cmps/AppMsg'

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Loader />
        <Header />
        <Routes>
          <Route path="/editor/:wapId" element={<EditorPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/signup" element={<LoginSignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preview/:wapId" element={<Publish />} />
          <Route path="/404" element={<Err404 />} />
          <Route path="/:wapName" element={<Publish />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
        <Footer />
        <AppMsg />
      </Router>
    </div>
  )
}