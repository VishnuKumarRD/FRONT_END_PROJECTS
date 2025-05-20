import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { UserCard } from './UserCard'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard/>
  </StrictMode>,
)
