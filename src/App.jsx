import { useState, useEffect } from 'react'

import Header from './Header'
import Footer from './Footer'
import Album from './Album'
import FilterBar from './FilterBar'

function App() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [genre, setGenre] = useState('')
    const [genreData, setGenreData] = useState(null)
    const [format, setFormat] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const params = new URLSearchParams()

                if (search) params.append('search', search)
                if (genre) params.append('genre', genre)
                if (format) {
                    format === "physical" ? params.append('physical', 1) : params.append('streaming', 1)
                }
                  
                const response = await fetch(`http://localhost:8000/api/albums?${params}`)

                setData(await response.json())
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
          }
          fetchData()
    }, [search, genre, format])

    useEffect(() => {
      const fetchGenreData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/albums/genres`)
            setGenreData(await response.json())
        } catch (error) {
          console.log('could not load genres', error)
        } 
      }
      fetchGenreData()
    }, [])

    return (
        <>
            <Header />

            <main className='content'>
                <section>
                    <FilterBar 
                      search={search} 
                      onSearchChange={setSearch} 
                      genres={genreData} 
                      selectedGenre={genre} 
                      onGenreChange={setGenre}
                      selectedFormat={format}
                      onFormatChange={setFormat}
                      />
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
            </main>

            <Footer />
        </>
    )
}

export default App
