import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <p className='subtitle'>
        Welcome to my
      </p>
      <h1>Super Secret Website</h1>
      <div className='card'>
        <Link to="about">
          <button>
            About Us
          </button>
        </Link>
        <Link to="contact">
          <button>
            Contact Us
          </button>
        </Link>
      </div>
    </>
  )
}

export default App
