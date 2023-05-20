import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">BOOK MANAGEMENT</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Form</Link></li>
      
      <li><Link to='/home2'>Search</Link></li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Nav;