import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Maincontent from './components/layout/Maincontent'
import ErrorBoundary from './components/ErrorBoundary'


function App() {

  return (
    <div className="flex">
      <Sidebar />
      <ErrorBoundary>
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <Maincontent />
          </main>
        </div>
      </ErrorBoundary>
    </div>
  )
}

export default App
