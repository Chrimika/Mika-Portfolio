import React from 'react'
import HeaderTiles from './HeaderTiles'

export default function LeftHeaderContent() {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    }}>
        <img src="/assets/images/smoutie-logo.png" alt="Smoutie Logo" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor:'#137857'}} />
        <HeaderTiles texts={['coffe']} fontSize='10px'  />
        <HeaderTiles texts={['Tea']} fontSize='10px'  />
        <HeaderTiles texts={['Menu']} fontSize='10px'  />
    </div>
  )
}
