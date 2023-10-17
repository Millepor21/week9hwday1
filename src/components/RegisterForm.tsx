
export default function RegisterForm(): JSX.Element {
  return (
    <div  className="form">
        <form action="">
            <label htmlFor="username">Username</label><br/>
            <input type="text" name="username" /><br/>
            <label htmlFor="email">Email</label><br/>
            <input type="text" name="email" /><br/>
            <label htmlFor="password">Passwords</label><br/>
            <input type="text" name="password" /><br/>
            <label htmlFor="first-name">First Name</label><br/>
            <input type="text" name="first-name" /><br/>
            <label htmlFor="last-name">Last Name</label><br/>
            <input type="text" name="last-name" /><br/>
            <input type="submit" value="Register" />
        </form>
    </div>
  )
}
