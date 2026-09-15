import { useState, useEffect } from 'react'
import './index.css'
import Header from './Header'
import Footer from './Footer'

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch('http://localhost:8000/api/albums')
                setData(await response.json())
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
          }
          fetchData()
    }, [])

    return (
      <>
        <section>
          <Header />
        </section>

        <div>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
          {data && (  
            <ul>
              {data.map((album) => (
                <>
                  <li key={album.id}>{album.title}</li>
                  <li key={album.id + '-artist'}>{album.artist}</li>
                </>
              ))}
            </ul>
          )}
        </div>

        <section>
          <Footer />
        </section>
      </>
    )
}

export default App