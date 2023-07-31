import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa'
import { Logo } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { clearStore,  toggleSidebar } from '../features/user/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.user)
  const [showLogout, setShowLogout] = useState(false)
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  const logout = () => {
    dispatch(clearStore('logout successful..'))
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type="button" className="dropdown-btn" onClick={logout}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
