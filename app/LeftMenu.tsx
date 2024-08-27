import React from 'react';
import './leftmenu.css';
import LinkIcon from './LinkIcon';

export default function LeftMenu() {
  return (
    <div className='left-menu'>
        <div className='left-menu-links'>
            <a href="https://www.baidu.com">前端进阶之旅 <LinkIcon></LinkIcon> </a>
            <a href="https://www.baidu.com">Github <LinkIcon></LinkIcon></a>
        </div>
    </div>
  )
}
