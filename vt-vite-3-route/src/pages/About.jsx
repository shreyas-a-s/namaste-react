import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function About() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function handleClick() {
    // new variable needs to be used since setCount is async
    const newCount = count + 1;
    setCount(newCount);
    if (newCount >= 10) {
      navigate("/secret", { state: { count } });
    }
  }

  return (
    <>
      <h1>About this Website</h1>
      <p className="subtitle">
        This website encompasses a secret that you may be able to uncover.
      </p>
      <div className='card'>
        <p>
          Click this button 10 times to go to Secret Page.
        </p>
        <button onClick={handleClick}>
          You have clicked me {count} times
        </button>
        <Link to="/">
          <button>
            Go to Home
          </button>
        </Link>
      </div>
    </>
  )
}

export default About
