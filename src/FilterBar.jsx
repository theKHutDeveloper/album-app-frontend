import { Search } from 'lucide-react'

export default function FilterBar({ search, onSearchChange, genres, selectedGenre, onGenreChange, selectedFormat, onFormatChange }) {
    return (
        <div className="filter-bar">
            <div className="search-wrapper">
                {<Search size={20} color="var(--accent)"/>}
                <input
                    type="text"
                    className="input"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder=  "Search..." 
                />
            </div>

            <div className="genre-filter">
                <label className="visually-hidden" htmlFor="album-genres">Select genre</label>

                <select 
                    id="album-genres" 
                    aria-label="Select genre" 
                    value={selectedGenre} 
                    onChange={(e) => onGenreChange(e.target.value)}
                >
                    <option value="">All genres</option>
                    { genres && (
                        genres.map(genre => (
                            <option value={genre.name} key={genre.name + "-" +genre.id}>{genre.name}</option>
                        ))
                    )}
                </select> 
            </div>

            <div className="media-filter">
                <label className="visually-hidden" htmlFor="media-format">Select format</label>

                <select 
                    id="media-format" 
                    aria-label="Select format" 
                    value={selectedFormat} 
                    onChange={(e) => onFormatChange(e.target.value)}
                >
                    <option value="">All formats</option>
                    <option value="physical">Physical CDs</option>
                    <option value="streaming">Streaming</option>
                </select>
            </div>
        </div>
    )
}
