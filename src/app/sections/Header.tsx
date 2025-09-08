import React, { useState } from "react";
import RightHeaderContent from "../components/RightHeaderContent";
import LeftHeaderContent from "../components/LeftHeaderContent";
import CenterHeaderContent from "../components/CenterHeaderContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between", 
      width: "100%", 
      flex:0.1
    }}>
          <LeftHeaderContent />
          <CenterHeaderContent />
          <RightHeaderContent/>
    </div>
  );
}
