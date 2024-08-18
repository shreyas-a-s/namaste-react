import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <>
      <h1>404 • Page Not Found</h1>
      <p className="subtitle">
        The page you are trying to find does not exist.
      </p>
      <div className='card'>
        <Link to="/">
          <button>
            Go to Home
          </button>
        </Link>
      </div>
    </>
  )
}

export default PageNotFound
