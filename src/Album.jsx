import { Disc3, AudioLines, Dot } from 'lucide-react'
import Chip from './Chip'

export default function Album({ album }) {
    const { title, artist, physical, streaming, genres, streamingSites, image, year } = album
    return (
        <div className="album-card">
            <img src={image} alt={`${title} - ${artist}`} />
            <h2 className="album-title">{title}</h2>
            <div className="album-artist">
                <span>{artist}</span>
                <Dot size={20} color="var(--accent)"/>
                <span className="album-year">{year}</span>
            </div>

            <Chip elements={genres} />
            
            { streaming === 1 &&
            <div className="album-media">
                <AudioLines size={20} line-height="1" color="var(--accent)"/>
                <span className="album-format">{streamingSites.join('/ ')}</span>
            </div>
            }

            { physical === 1 &&
                <div className="album-media">
                    <Disc3 size={20} color="var(--accent)"/>
                    <span className="album-format">Physical CD</span>
                </div>
            }
        </div>
    )
}
