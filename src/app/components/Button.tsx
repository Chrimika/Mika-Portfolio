import React from 'react'
import HeaderTiles from './HeaderTiles'

export default function Button() {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '0px 32px', cursor: 'pointer',display:'flex',alignItems:'center',height:'32px',justifyContent:'center',marginTop:'auto' }}>
      <HeaderTiles texts={['add to cart']} fontSize='8px' color='#000' />
    </div>
  )
}
