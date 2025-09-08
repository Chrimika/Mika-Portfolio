import React from 'react'

export default function HeroTitle() {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end',width:'100%',flex:0.2,}}>
      <p style={{fontSize:'5rem', fontWeight:'bold', color:'#137857',lineHeight:'5rem',textAlign:'right'}}>The happiest hour <br/> of the year</p>
      <p style={{fontSize:'0.7rem', color:'gray',textAlign:'right',marginTop:'16px',fontWeight:550,letterSpacing:4}}>Join us for a celebration of joy and togetherness</p>
      <p style={{fontSize:'0.7rem', color:'gray',textAlign:'right',marginTop:'4px',fontWeight:550,letterSpacing:2,textDecoration:'underline',textUnderlineOffset: 4}}>SEND ME MOCAC</p>
    </div>
  )
}
