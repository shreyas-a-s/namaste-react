import { Link, useLocation } from 'react-router-dom'

function Secret() {
  const location = useLocation()
  const { count } = location.state || {}

  return (
    <>
      <h1>Super Secret Page</h1>
      <div className='card'>
        {count == null || count >= 10 ? (
          <>
            <p className='subtitle'>
              Trying to cheat? Go to about us page and follow instructions.
            </p>
            <Link to='/about'>
              <button>Go to About Page</button>
            </Link>
          </>
        ) : (
          <div>
            <iframe
              width='532'
              height='299'
              src='https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1&mute=1&controls=0'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        )}
      </div>
    </>
  )
}

export default Secret
