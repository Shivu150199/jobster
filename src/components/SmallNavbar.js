import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
// import { NavLink} from 'react-router-dom'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'
// import links from '../utils/links'
import Navlinks from './Navlinks'

const SmallNavbar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'show-sidebar  sidebar-container '
            : ' sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
         <Navlinks toggleSidebar={toggle}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallNavbar
