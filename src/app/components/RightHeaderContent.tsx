import React, { useState } from 'react'
import MenuBroken from './MenuBroken'
import { CloseCircle } from 'iconsax-react'
import SideMenu from './SideMenu';
import HeaderTiles from './HeaderTiles';

export default function RightHeaderContent() {
  const [open, setOpen] = useState(false);
     
  return (
    <div style={{ 
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }}>
        <div>
            <HeaderTiles texts={['MY BASKET']} fontSize='12px' color='#000'  />
        </div>

        {!open ? (
            <span style={{ cursor: "pointer" }} onClick={()=>setOpen(true)}>
                <MenuBroken
                size={30}
                color="gray"
                />
            </span>
        ) : (
            <CloseCircle 
            size={30} 
            color="#000" 
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(false)} 
            />
        )}

        {/* Menu déroulant */}
        {open && (
            <SideMenu/>
        )}
    </div>
  )
}
