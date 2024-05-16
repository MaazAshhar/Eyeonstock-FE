import React from 'react'
import { Outlet } from 'react-router-dom'
import { isLoggedIn } from '../../auth'
import ErrorPage from '../ErrorPage'

const PrivateRoute: React.FC = () => {
  return (
    <div>
        {isLoggedIn()? <Outlet /> : <ErrorPage />}
    </div>
  )
}

export default PrivateRoute