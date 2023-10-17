
export default function LoginForm(): JSX.Element {
  return (
    <div  className="form">
        <form action="">
            <label htmlFor="username">Username</label><br/>
            <input type="text" name="username" /><br/>
            <label htmlFor="password">Passwords</label><br/>
            <input type="text" name="password" /><br/>
            <input type="submit" value="Register"/>
        </form>
    </div>
  )
}
