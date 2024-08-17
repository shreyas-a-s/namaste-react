import { Link } from "react-router-dom"

function Contact() {

  return (
    <>
      <h1>Contact Page</h1>
      <p className="subtitle">
        Come on! This is a simple website. How can you expect a contact us page?
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

export default Contact
