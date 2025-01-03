import * as React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode,
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>
}

export default AuthLayout
