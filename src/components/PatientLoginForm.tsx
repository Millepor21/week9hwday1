import { useRef, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Patient } from '../types'

export default function PatientLoginForm(): JSX.Element {
  const navigate = useNavigate()

  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }
  },[])

  function handlePatientLoginData(e:FormEvent<HTMLElement>){
    e.preventDefault()
    const loginInfo: Partial<Patient> = {
      username: usernameField.current!.value,
      password: passwordField.current!.value
    }
    clearForm()
    loginPatient(loginInfo)
    navigate('/')
  }

  async function loginPatient(loginInfo: Partial<Patient>) {
    const res = await fetch('http://127.0.0.1:5000/login/patient',{
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(loginInfo)
    })
    if(res.ok){
      const data = await res.json()
      const accessToken = data.access_token
      localStorage.setItem('token',accessToken)
    } else window.alert('Failed Login')
  }

  function clearForm(){
    usernameField.current!.value = ''
    passwordField.current!.value = ''
  }

  return (
    <div  className="form">
        <form action="" onSubmit={handlePatientLoginData}>
            <label htmlFor="username">Username</label><br/>
            <input type="text" name="username" ref={usernameField} required/><br/>
            <label htmlFor="password">Passwords</label><br/>
            <input type="text" name="password" ref={passwordField} required/><br/>
            <input type="submit" value="Register"/>
        </form>
    </div>
  )
}
