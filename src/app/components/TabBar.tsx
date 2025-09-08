import React from 'react'
import { Home, Search, RefreshCw, ShoppingCart, User } from 'lucide-react';


export default function TabBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', backgroundColor:'#171426', width: '80%',height:60,borderRadius:30,margin: 'auto 0px', padding: '10px' }}>
      <div style={{backgroundColor:'#fff',borderRadius:30, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around',padding:'0px 15px'}}>
        <Home size={20} color="#171426" style={{marginTop:-2,marginLeft:-10}} fill='#000'/>
        <p style={{color:'#171426', fontWeight:'bold'}}>Home</p>
      </div>

      <div style={{backgroundColor:'#171426',borderRadius:30, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <Search size={20} color="gray" style={{marginTop:-4,marginLeft:-6}} />
      </div>
      <div style={{backgroundColor:'#171426',borderRadius:30, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <RefreshCw size={20} color="gray" style={{marginTop:-4,marginLeft:-6}} />
      </div>

      <div style={{backgroundColor:'#171426',borderRadius:30, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <ShoppingCart size={20} color="gray" style={{marginTop:-4,marginLeft:-6}} />
      </div>
       <div style={{backgroundColor:'#171426',borderRadius:30, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <User size={20} color="gray" style={{marginTop:-4,marginLeft:-6}} />
      </div>
    </div>
  )
}
