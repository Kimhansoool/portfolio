import React, {memo} from 'react';
import Link from 'next/link';

const MenuCoffee = memo(() => {
  return (
    <div>
      <h1>MenuCoffee</h1> 

      <ul>
        <li><Link href='/menu/menu_coffee'>커피</Link></li>
        <li><Link href='/menu/menu_new'>신메뉴</Link></li>
        <li><Link href='/menu/menu_drink'>음료</Link></li> 
        <li><Link href='/menu/menu_dessert'>아이스크림/디저트</Link></li>
        <li><Link href='/menu/menu_ccino'>빽스치노</Link></li>
      </ul>
    </div>
  );
});

export default MenuCoffee;
