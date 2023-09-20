import React from 'react'
import styels from './page.module.css'

const Layout = ({children}) => {
  return (
    <div className={styels.container}>
        <h1 className={styels.mainTitle}>
            Our Works
        </h1>
        {children}     
    </div>
  )
}

export default Layout
