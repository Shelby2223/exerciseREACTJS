import React, { useState } from 'react';
import {Data} from './data';
import items from './item';
function Menu(){
    const [menu, setMenu] = useState({
        cafesua: 12000,
        cafeda: 10000,
        stingdau: 8000,
        trada: 2000
      });
    // const [menu, setMenu] = useState(Data());  
      return (
        <div>
            <h3>Menu</h3>
            <p>Cà phê sữa    ..............{menu.cafesua}đ</p>
            <p>Cà phê đá     ..............{menu.cafeda}đ</p>
            <p>Sting dâu     ..............{menu.stingdau}đ</p>
            <p>Trà đá        ..............{menu.trada}đ</p>
        </div>
      )
}

export default Menu;