import React from 'react'
import { Outlet } from 'react-router-dom'
import { BigNavbar, Navbar, SmallNavbar } from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallNavbar />
        <BigNavbar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
