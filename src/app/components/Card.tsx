import React from 'react'
import Button from './Button'

export default function Card({
  bgColor = '#137857',
  textColor = '#fff',
  width = '300px',
  height = '500px',
  imageSrc = "/assets/images/smoothie.png",
  showButton = true
}) {
  return (
    <div 
      style={{
        borderRadius: '15px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width,
        height,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        backgroundColor: bgColor,
        padding: '0 32px',
        paddingBottom: 32
      }}
    >
      {imageSrc && (
        <img src={imageSrc} alt="Card illustration" style={{marginTop:-64}} />
      )}
      
      <p 
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: textColor,
          lineHeight: 1,
          width: '100%'
        }}
      >
        Midnight Mint <br/> Mocha <br/> Frappuccino
      </p>

      {showButton && <Button />}
    </div>
  )
}
