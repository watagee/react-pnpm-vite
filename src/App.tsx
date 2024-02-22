import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Counter from './components/Counter';
import DomAccess from './hooks/Ref/DomAccess';
import ThemeProvider from './providers/ThemeProvider';
import ThemeToggle from './hooks/Contexts/ThemeToggle';
import './App.css'

function App() {

  return (
    <ThemeProvider>
      {/* <Counter /> */}
      {/* <DomAccess /> */}
      <ThemeToggle />
    </ThemeProvider>
  )
}

export default App
