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
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [genre, setGenre] = useState('')
    const [genreData, setGenreData] = useState(null)
    const [format, setFormat] = useState('')

    const baseUrl = 'http://localhost:8000/api/albums'

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedSearch(search)
      }, 300)

      return () => clearTimeout(timer)
    }, [search])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const params = new URLSearchParams()

                if (debouncedSearch) params.append('search', debouncedSearch)
                if (genre) params.append('genre', genre)
                if (format) {
                    format === "physical" ? params.append('physical', 1) : params.append('streaming', 1)
                }
                  
                const response = await fetch(`${baseUrl}?${params}`)

                setData(await response.json())
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
          }
          fetchData()
    }, [debouncedSearch, genre, format])

    useEffect(() => {
      const fetchGenreData = async () => {
        try {
            const response = await fetch(`${baseUrl}/genres`)
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
                
                <FilterBar 
                    search={search} 
                    onSearchChange={setSearch} 
                    genres={genreData} 
                    selectedGenre={genre} 
                    onGenreChange={setGenre}
                    selectedFormat={format}
                    onFormatChange={setFormat}
                />
               
                <div>
                    {loading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
                    {!loading && data && data.length === 0 && <p>No albums found</p>}
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
