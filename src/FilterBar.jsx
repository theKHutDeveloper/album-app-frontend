import { Search } from 'lucide-react'

export default function FilterBar({ search, onSearchChange }) {
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
        </div>
    )
}
