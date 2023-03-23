import Navbar from '../UI/Navbar'
import LoginForm from './LoginForm'

const Welcome = (): React.ReactElement => {
  return (
    <>
      <p>Welcome</p>
      <Navbar current='welcome' />

      <LoginForm></LoginForm>
    </>
  )
}

export default Welcome
