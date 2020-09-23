import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { FormControl } from '../../globalStyles'
import LoginRegister from './LoginRegister'
import Button from '../layout/Button'

const Register = () => {
  return (
    <LoginRegister
      title='login'
      desc='Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.'
      btnTo='login'
      btnText='login'
    >
      <h2><BsPerson className='icon' />Register</h2>
      <form>
        <FormControl>
          <label>Username <span>*</span></label>
          <input
            type='text'
            required
          />
        </FormControl>
        <FormControl>
          <label>Email address <span>*</span></label>
          <input
            type='text'
            required
          />
        </FormControl>
        <FormControl>
          <label>Password <span>*</span></label>
          <input
            type='text'
            required
          />
        </FormControl>
        <Button flex>Register</Button>
      </form>
    </LoginRegister>
  )
}

export default Register