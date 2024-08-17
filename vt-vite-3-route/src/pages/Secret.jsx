import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Secret() {
  const location = useLocation()
  const { count } = location.state || {}
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.5, // 80% of window width
    height: (window.innerWidth * 0.5 * 9) / 16, // Maintain 16:9 aspect ratio
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        // Example breakpoint for larger displays
        setDimensions({
          width: window.innerWidth * 0.5, // Larger size
          height: (window.innerWidth * 0.5 * 9) / 16,
        })
      } else {
        // Smaller displays
        setDimensions({
          width: window.innerWidth * 0.7, // Smaller size
          height: (window.innerWidth * 0.7 * 9) / 16,
        })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call once to set initial size

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
              width={dimensions.width}
              height={dimensions.height}
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
