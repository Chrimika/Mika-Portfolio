import React, { useState } from 'react'
import Card from '../components/Card'

export default function DisplayCards() {
  const baseCards = [
    { bgColor: "#e4e3dd", textColor: "#b2aaa9", showButton: false, width: '300px', height: '350px' },
    { bgColor: "#e4e3dd", textColor: "#b2aaa9", showButton: false, width: '300px', height: '350px' },
    { bgColor: "#e4e3dd", textColor: "#b2aaa9", showButton: false, width: '300px', height: '350px' },
    { bgColor: "#e4e3dd", textColor: "#b2aaa9", showButton: false, width: '300px', height: '350px' }
  ]
  const activeCard = [
        { bgColor: "#137857", textColor: "#fff", showButton: true,  width: '320px', height: '550px' },
  ]

  const activeTemplate = activeCard[0]
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <div style={{ display: 'flex', gap: '16px', flex: 0.7, width: '100%', justifyContent: 'center', paddingBottom: '32px', height: '100%', alignItems: 'center',  }}>
      {baseCards.map((card, index) => {
        const isActive = index === activeIndex
        const finalProps = isActive ? activeTemplate : card
        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              transition: 'transform 220ms ease, box-shadow 220ms ease, filter 220ms ease',
              transform: isActive ? 'scale(1.04)' : 'scale(1)',
              boxShadow: isActive ? '0 12px 24px rgba(0,0,0,0.18)' : '0 2px 6px rgba(0,0,0,0.1)',
              borderRadius: '15px',
              cursor: 'pointer'
            }}
          >
            <Card {...finalProps} />
          </div>
        )
      })}
    </div>
  )
}
