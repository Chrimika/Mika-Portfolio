import React from 'react'
import Header from '../sections/Header'
import HeroTitle from '../sections/HeroTitle'
import DisplayCards from '../sections/DisplayCards'


export default function Landing1() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', flex:1, width:"100%", flexDirection:'column', padding: '0 64px', backgroundColor:'#dbeae5', backgroundImage:'url(/assets/images/background.png)', backgroundSize:'cover', backgroundPosition:'center' }}>
      <Header />
      <HeroTitle/>
      <DisplayCards/>
    </div>
  )
}
