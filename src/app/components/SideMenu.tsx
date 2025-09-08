import React from 'react'

export default function SideMenu() {
  return (
        <div style={{
          position: "absolute",
          top: "60px",
          right: "10px",
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
        }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>Accueil</li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>À propos</li>
            <li style={{ padding: "8px 0", cursor: "pointer" }}>Contact</li>
          </ul>
        </div>
  )
}
