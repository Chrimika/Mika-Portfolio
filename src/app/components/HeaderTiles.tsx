import React from 'react'

interface HeaderTilesProps {
    texts: string[]
    fontSize?: string
    color?: string
}

export default function HeaderTiles({
    texts,
    fontSize = '1.5rem',
    color = '#000'
}: HeaderTilesProps) {
    return (
        <div>
            {texts.map((text, idx) => (
                <span
                    key={idx}
                    style={{
                        fontSize,
                        color,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        marginRight: '8px',
                                            }}
                >
                    {text}
                </span>
            ))}
        </div>
    )
}
