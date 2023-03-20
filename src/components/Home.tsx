import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <div>
      <h1>This is the home page</h1>
      <p>
        <Link to='about'>Click to view our about page</Link>
      </p>
      <p>
        <Link to='contact'>Click to view our contact page</Link>
      </p>
    </div>
  )
}

export default Home
