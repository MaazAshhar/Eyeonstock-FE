import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  return (
    <div className="mt-5 text-center">
        <h1 className="text-2xl text-red-400">Please Login first</h1>
        <Link className="text-blue-700 font-medium" to="/login" >Go to login page</Link>
    </div>
  )
}

export default ErrorPage