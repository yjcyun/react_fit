import React from 'react'
import { NavLink } from 'react-router-dom'
import { accountNav } from '../../constants/account-nav'
import styled from 'styled-components'

const AccountLayout = ({ children }) => {
  // const checkActive = (location) => {
  //   if (!location) return false;
  //   const { pathname } = location;
  //   return pathname === "/my-account";
  // }

  return (
    <>
      <Sidebar>
        <SidebarContent>
          <h3>my account</h3>
          <nav>
            <ul>
              {accountNav.map(nav => (
                <li key={nav.text}>
                  <NavLink to={`/my-account${nav.to}`} activeClassName='selected' >
                    {nav.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </SidebarContent>
      </Sidebar>
      {children}
    </>
  )
}

const Sidebar = styled.aside`
  width: 30%;
  padding: 0 1rem;
`

const SidebarContent = styled.aside`
  h3{
    padding: 1rem;
    background-color: var(--dark-clr);
    color: var(--light-clr);
    text-transform: uppercase;
    text-align: center;
  }
  nav{
    border-bottom: 1px solid rgba(136,136,136,.12);
  }
  a {
    display: block;
    padding: 13px 15px;
    border: 1px solid rgba(136,136,136,.12); 
    border-bottom: 0;
    color: rgba(71,71,71,.8);
    text-transform: uppercase;
  }  
  a:hover {
    background-color:rgba(136,136,136,.04);
  }
  a.selected {
    background-color: rgba(136,136,136,.12);
    border: none;
  }
`

export default AccountLayout