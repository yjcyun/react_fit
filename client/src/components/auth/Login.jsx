import React from 'react'
import { IoIosLogIn } from 'react-icons/io'
import { FormControl } from '../../globalStyles'
import LoginRegister from './LoginRegister'
import Button from '../layout/Button'

const Login = () => {
  return (
    <LoginRegister
      title='register'
      desc='Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.'
      btnTo='register'
      btnText='register'
    >
      <h2><IoIosLogIn className='icon' />Login</h2>
      <form>
        <FormControl>
          <label>Email <span>*</span></label>
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
        <Button flex>login</Button>
      </form>
    </LoginRegister>
  )
}

export default Login