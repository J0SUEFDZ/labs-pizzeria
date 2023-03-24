import Navbar from '../UI/Navbar'
import ErrorHandler from '../UI/SnackbarHandler'
import UserAuthForm from './UserAuthForm'

const Welcome = (): React.ReactElement => {
  return (
    <>
      <p>Welcome</p>
      <Navbar current='welcome' />
      <ErrorHandler message='Success' severity='success' title='Success'></ErrorHandler>
      <UserAuthForm signUp={true}></UserAuthForm>
    </>
  )
}

export default Welcome
