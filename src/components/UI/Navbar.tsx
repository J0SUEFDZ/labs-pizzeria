import { NavLink } from 'react-router-dom'

const activeClassName = ({
  isActive,
  isPending,
}: {
  isActive: boolean
  isPending: boolean
}): string => {
  return isPending ? 'pending' : isActive ? 'active' : ''
}

const Navbar = ({ current, ...props }: { current: string }): React.ReactElement => {
  return (
    <nav>
      <NavLink to='/' className={activeClassName({ isActive: true, isPending: false })}>
        Home
      </NavLink>
      <NavLink to='/welcome' className={activeClassName({ isActive: true, isPending: false })}>
        Welcome
      </NavLink>
    </nav>
  )
}

export default Navbar
