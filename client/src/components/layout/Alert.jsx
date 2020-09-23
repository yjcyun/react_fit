import React from 'react'
import { connect } from 'react-redux'
import { IoIosWarning } from 'react-icons/io'
import styled from 'styled-components'

const Alert = ({ alerts }) => {
  return alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <AlertStyled key={alert.id} className='container'>
      <strong><IoIosWarning className='icon'/></strong>{alert.msg}
    </AlertStyled>
  ))
}

const mapStateToProps = state => ({
  alerts: state.alert
})

const AlertStyled = styled.div`
  padding: 1rem 1.5rem;
  border: 2px solid var(--light-gold);
  color: var(--dark-gold);

  strong {
    .icon {
      color: var(--dark-gold);
      vertical-align: middle;
      font-size: 1.1rem;
      margin-right: 0.5rem;
      margin-bottom: 3px;
    }
  }
`

export default connect(mapStateToProps)(Alert)