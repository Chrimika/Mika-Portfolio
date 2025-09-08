import React from 'react'
import HeaderTiles from './HeaderTiles'
import {SearchNormal} from 'iconsax-react'
export default function CenterHeaderContent() {
  return (
    <div style={{ flex: 1/2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom:'0.2px solid gray' }}>
      <HeaderTiles texts={['search']} fontSize='10px' color='gray' />
      <SearchNormal color='gray' size={18}/>
    </div>
  )
}
