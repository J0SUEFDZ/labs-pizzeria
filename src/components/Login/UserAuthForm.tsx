import { Field, Form, Formik } from 'formik'
import { signUp } from '../Auth/auth'

interface IFormValues {
  email: string
  password: string
  name: string
  phoneNumber: string
}

interface IFormProps {
  signUp: boolean
}

const handleSubmit = async (values: IFormValues): Promise<void> => {
  const { email, password, name, phoneNumber } = values
  signUp(email, password, name, phoneNumber)
}

const inputClass = 'border-2 bg-color-white'

const UserAuthForm = (props: IFormProps): React.ReactElement => {
  return (
    <Formik
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
            {props.signUp && (
              <Field name='name' className={inputClass} placeholder='Josue Fernandez' />
            )}
            {props.signUp && (
              <Field name='phone_number' className={inputClass} placeholder='(+506) 11111111' />
            )}
            <button
              type='submit'
              className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
            >
              {props.signUp ? 'Sign Up' : 'Sign In'}
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
export default UserAuthForm
