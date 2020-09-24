import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../layout/Banner'
import AccountLayout from './AccountLayout'
import { accountDashboardList } from '../../constants/account-nav'

const AccountDashboard = () => {
  return (
    <>
      <Banner dark />
      <DashboardStyled className='container'>
        <AccountLayout>
          <Main>
            <Greetings>
              <p>
                Hello <strong>Mars</strong> (not <strong>Mars</strong>? <Link to='/'>Logout</Link>)
              </p>
            </Greetings>
            <DashboardMain>
              {accountDashboardList()}
            </DashboardMain>
          </Main>
        </AccountLayout>
      </DashboardStyled>
    </>
  )
}

const DashboardStyled = styled.section`
  display: flex;
  width: 100%;

  @media (min-width: 768px) {
    margin: 2rem auto 8rem;
  }
`

const Greetings = styled.div`
  padding: 1rem;
  background-color: rgba(136,136,136,.06);
`

const Main = styled.div`
  width: 70%;
  padding: 0 1rem;
`

const DashboardMain = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  a{
    border: 1px solid rgba(136,136,136,.12);
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    transition: all 0.2s;
    .icon {
      font-size: 3rem;
      color: rgba(129, 129, 129, 0.2);
      transition: all 0.2s;
      margin-bottom: 0.5rem;
    }
  }
  a:hover .icon{
    color: var(--primary-clr);
  }
  a:hover {
    background-color: rgba(136,136,136,.04)
  }
`

export default AccountDashboard