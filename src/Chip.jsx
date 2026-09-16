export default function Chip({elements}) {
    return (
        <div className="chip">
            { elements && (
                elements.map((element, index) => (
                <div className="chip-element" key={`chip-element-${index}`}>
                    <span key={index} className="chip-element">{element}</span>
                </div>
            )))}
        </div>
    )
}