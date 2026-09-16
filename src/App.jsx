import { useState, useEffect } from 'react'
import './index.css'
import Header from './Header'
import Footer from './Footer'
import Album from './Album'
import FilterBar from './FilterBar'

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(`http://localhost:8000/api/albums?search=${search}`)
                setData(await response.json())
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
          }
          fetchData()
    }, [search])

    return (
      <>
        <section>
          <Header />
        </section>

        <section>
          <FilterBar search={search} onSearchChange={setSearch} />
        </section>

        <div>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
          <div className="album-grid">
            {data && (  
                data.map(album => (
                  <Album key={album.id} album={album}/>
                ))
            )}
          </div>
        </div>

        <section>
          <Footer />
        </section>
      </>
    )
}

export default App