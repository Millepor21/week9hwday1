import { useRef, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Patient } from '../types'

export default function PatientRegisterForm(): JSX.Element {

  const navigate = useNavigate()

  const usernameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const fNameField = useRef<HTMLInputElement>(null)
  const lNameField = useRef<HTMLInputElement>(null)
  const dOBField = useRef<HTMLInputElement>(null)
  const heightField = useRef<HTMLInputElement>(null)
  const weightField = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }
  },[])

  async function handlePatientRegisterData(e:FormEvent<HTMLElement>) {
    e.preventDefault()

    const patient: Patient = {
      username: usernameField.current!.value,
      email: emailField.current!.value,
      password: passwordField.current!.value,
      first_name: fNameField.current!.value,
      last_name: lNameField.current!.value,
      dob: dOBField.current!.value,
      height: heightField.current!.value,
      weight: weightField.current!.value
    }
    clearFormData()
    await registerPatient(patient)
  }

  async function registerPatient(patient: Patient){
    const res = await fetch('http://127.0.0.1:5000/register/patient',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(patient)
    })
    const data = await res.json()
    console.log(data);
    if(!res.ok){
      window.alert('Register Failed')
    } else navigate('/login/patient')
  }

  function clearFormData(){
    usernameField.current!.value = ''
    emailField.current!.value = ''
    passwordField.current!.value = ''
    fNameField.current!.value = ''
    lNameField.current!.value = ''
    dOBField.current!.value = ''
    heightField.current!.value = ''
    weightField.current!.value = ''
  }

  return (
    <div  className="form">
        <form action="" onSubmit={handlePatientRegisterData}>
            <label htmlFor="username">Username</label><br/>
            <input type="text" name="username" ref={usernameField} required/><br/>
            <label htmlFor="email">Email</label><br/>
            <input type="text" name="email" ref={emailField} required/><br/>
            <label htmlFor="password">Password</label><br/>
            <input type="text" name="password" ref={passwordField} required/><br/>
            <label htmlFor="first-name">First Name</label><br/>
            <input type="text" name="first-name" ref={fNameField} required/><br/>
            <label htmlFor="last-name">Last Name</label><br/>
            <input type="text" name="last-name" ref={lNameField} required/><br/>
            <label htmlFor="dob">Date Of Birth</label><br/>
            <input type="text" name="dob" ref={dOBField} required/><br/>
            <label htmlFor="height">Height</label><br/>
            <input type="text" name="height" ref={heightField} required/><br/>
            <label htmlFor="weight">Weight</label><br/>
            <input type="text" name="weight" ref={weightField} required/><br/>
            <input type="submit" value="Register" />
        </form>
    </div>
  )
}
