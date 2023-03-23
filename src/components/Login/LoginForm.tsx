import { Field, Form, Formik } from 'formik'
import { signUp } from '../Auth/auth'

interface IFormValues {
  email: string
  password: string
  name: string
  phoneNumber: string
}

const handleSubmit = async (values: IFormValues): Promise<void> => {
  const { email, password, name, phoneNumber } = values
  const userInfo = signUp(email, password, name, phoneNumber)
  if (userInfo.code === 200) {
    console.log(userInfo.message)
  } else {
    console.log(userInfo.message)
  }
}

const inputClass = 'border-2 bg-color-white'

const LoginForm = (): React.ReactElement => {
  return (
    <Formik
      key='loginForm-1'
      initialValues={{ email: '', password: '', name: '', phoneNumber: '' }}
      onSubmit={handleSubmit}
    >
      {() => {
        return (
          <Form className='flex h-screen flex-col content-center justify-center'>
            <Field
              name='email'
              type='email'
              className={inputClass}
              placeholder='josue.fernandez@gorilla.com'
            />
            <Field name='password' type='password' className={inputClass} placeholder='********' />
            <Field name='name' className={inputClass} placeholder='Josue Fernandez' />
            <Field name='phone_number' className={inputClass} placeholder='(+506) 11111111' />
            <button
              type='submit'
              className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
            >
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
export default LoginForm
